import { Injectable } from '@angular/core';
import { AppService, EnterpriseBuilderConfig } from '@formio/enterprise-builder-core';
import { Submission } from '@formio/core/types';
import { Router } from '@angular/router';
import { EnterpriseBuilderAlerts } from './enterprise-builder.alerts';
import { FormioAppConfig } from '@formio/angular';
@Injectable({
    providedIn: 'root'
})
export class EnterpriseBuilderService extends AppService {
    constructor(
        public formioConfig: FormioAppConfig,
        public alerts: EnterpriseBuilderAlerts,
        public router: Router
    ) {
        const config: EnterpriseBuilderConfig = {...formioConfig, ...{
            license: formioConfig.license || '',
            projectUrl: formioConfig.projectUrl || formioConfig.appUrl || '',
            baseUrl: formioConfig.baseUrl || formioConfig.apiUrl || '',
        }};
        super(config, alerts);
    }

    public async authenticate(): Promise<Submission> {
        try {
            await super.authenticate();
        }
        catch (err) {
            if (err === 'Unauthorized') {
                this.router.navigate([`/auth/login`]);
            }
        }
        return this.currentUser;
    }
}