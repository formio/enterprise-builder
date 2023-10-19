import { Injectable } from "@angular/core";
import { FormioAppConfig , Formio} from "@formio/angular";
import { FormioAuthService } from '@formio/angular/auth';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilderConfig } from "./form-builder.config";
import { Components} from 'formiojs';
import _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class FormBuilderService {
    public formio: Formio;
    public onTenant: Subject<any> = new Subject();
    public currentForm: any;
    public currentTenant: any;
    constructor(
        public config: FormioAppConfig,
        public router: Router,
        public builderConfig: FormBuilderConfig,
        private auth: FormioAuthService,
        ) {
        this.formio = new Formio(config.apiUrl);
        this.builderConfig = builderConfig;
        this.init();
    }

    async init() {
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
        this.onTenant.next(tenant)
    }

    setForm(form, mode) {
        this.currentForm = form;
        this.router.navigate([`/form/${form._id}/${mode}`]);
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