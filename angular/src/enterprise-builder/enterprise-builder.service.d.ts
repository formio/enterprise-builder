import { AppService } from '@formio/enterprise-builder-core';
import { Submission } from '@formio/core/types';
import { Router } from '@angular/router';
import { EnterpriseBuilderAlerts } from './enterprise-builder.alerts';
import { FormioAppConfig } from '@formio/angular';
import * as i0 from "@angular/core";
export declare class EnterpriseBuilderService extends AppService {
    formioConfig: FormioAppConfig;
    alerts: EnterpriseBuilderAlerts;
    router: Router;
    constructor(formioConfig: FormioAppConfig, alerts: EnterpriseBuilderAlerts, router: Router);
    authenticate(): Promise<Submission>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EnterpriseBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EnterpriseBuilderService>;
}
