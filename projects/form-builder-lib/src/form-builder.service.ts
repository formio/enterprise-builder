import { Injectable } from "@angular/core";
import { FormioAppConfig , Formio} from "@formio/angular";
import { FormioAuthService } from '@formio/angular/auth';
import { OfflineLibraryLicense } from '@formio/license/library';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilderConfig } from "./form-builder.config";
import { Components } from 'formiojs';
import _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class FormBuilderService {
    public formio: Formio;
    public onTenant: Subject<any> = new Subject();
    public currentForm: any;
    public currentTenant: any;
    public currentReport: any;
    private licenseName: string = 'enterpriseBuilder';

    constructor(
        public config: FormioAppConfig,
        public router: Router,
        public builderConfig: FormBuilderConfig,
        private auth: FormioAuthService,
        ) {
        this.builderConfig = builderConfig;
        this.init();
    }

    async init() {
        const allowed = await this.checkLicense();
        if (allowed) {
            const auth = await this.auth.ready.then(() => {
                if (this.auth.authenticated) {
                    this.loadTenants({params: {type: 'tenant'}}).then((tenants) => {
                        this.currentTenant = tenants[0];
                        this.setTenant(tenants[0])
                    })
                    return true;
                } else {
                    this.router.navigate(['/auth/login']);
                    return false;
                }
            });
        }
    }

    async checkLicense() {
        const {license: licenseKey} = this.builderConfig;
        if (!licenseKey) {
            throw new Error('License is required to use the Enterprise Builder module.');
        }

        const libLicense = await OfflineLibraryLicense.verify(licenseKey);

        if (!libLicense) {
            throw new Error('Invalid License Key.');
        } else  if (!_.get(libLicense, `terms.${this.licenseName}`)) {
            throw new Error('Enterprise Builder Module is not enabled for your license.');
        }
        const allowedHostnames = _.get(libLicense, 'terms.hostnames', [])
        const currentHost = `${window.location.protocol}//${window.location.hostname}`;

        const allowCurrentHost = this.isAllowedUrl(allowedHostnames, currentHost);

        if (allowCurrentHost) {
            return true;
        }

        const allowedProjectEndpoints =  _.get(libLicense, 'terms.endpoints', []);

        const allowCurrentEndpoint = this.config.appUrl
            ? this.isAllowedUrl(allowedProjectEndpoints, this.config.appUrl)
            : false;

        if (!allowCurrentEndpoint) {
            throw new Error(`Current hostname (${currentHost}) and project endpoint (${this.config.appUrl}) is not allowed by the license.`);
        }

        return true;
    }

    isAllowedUrl(allowedList =[], currentUrl) {
        return _.some(allowedList, url => {
            const hostRegex = new RegExp(`^${_.chain(url).split('*').join('(\\S+)').value()}$`, 'i');
            return hostRegex.test(currentUrl);
        });
    }

    loadTenants(...args) {
        return Formio.loadProjects(...args).then((tenants) => {
            return tenants;
        })
        .catch((err)=> {
            if (err === 'Unauthorized') {
                this.router.navigate([`/auth/login`]);
            }
            return [];
        });
    }

    setTenant(tenant) {
        this.formio = new Formio(`${this.config.apiUrl}/${tenant.name}`)
        this.onTenant.next(tenant)
    }

    setForm(form, mode) {
        this.currentForm = form;
        this.formio = new Formio(`${this.config.apiUrl}/${this.currentTenant.name}/form/${form._id}`)
        this.router.navigate([`/form/${form._id}/${mode}`]);
    }

    setReport(report) {
        this.currentReport = report;
    }

    getBuilderOptions() {
        const options: {builder?: Object, editForm?:Object} = {}
        const {formBuilderOptions, editFormOptions} = this.builderConfig;
        if (formBuilderOptions) {
            options.builder = formBuilderOptions;
        }
        if (editFormOptions) {
            const customTabs: any = {};
            const hiddenTabs = _.difference(['Display', 'Data', 'Validation', 'Conditional', 'API', 'Logic', 'Layout'],editFormOptions.showTabs)
            const hiddenFields = editFormOptions.hiddenFields;
            Object.keys(Components.components).forEach((componentKey) => {
                const settingsTab = [];
                hiddenTabs.forEach((tab) => {
                settingsTab.push({ key: tab.toLowerCase(), ignore: true})
                })
                Object.keys(hiddenFields).forEach((tab) => {
                settingsTab.push({ key : tab, components: hiddenFields[tab].map((field) => {return { key: field, ignore: true}})})
                })
                customTabs[componentKey] = settingsTab;
            });
            options.editForm = customTabs;
        }
        return options;
    }
}
