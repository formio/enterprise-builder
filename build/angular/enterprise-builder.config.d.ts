import { InjectionToken } from "@angular/core";
import { FormioAppConfig } from "@formio/angular";
import { EnterpriseBuilderConfig } from "@formio/enterprise-builder-core";
import * as i0 from "@angular/core";
export declare const ENTERPRISE_BUILDER_CONFIG: InjectionToken<EnterpriseBuilderConfig>;
export declare class EnterpriseBuilderAppConfig extends FormioAppConfig {
    license: string;
    projectUrl: string;
    baseUrl: string;
    tag: string;
    icons: string;
    config: any;
    showData: boolean;
    constructor(config: EnterpriseBuilderConfig);
    static ɵfac: i0.ɵɵFactoryDeclaration<EnterpriseBuilderAppConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EnterpriseBuilderAppConfig>;
}
