import { Inject, Injectable, InjectionToken } from "@angular/core";
import { FormioAppConfig } from "@formio/angular";
import { Formio } from '@formio/js';
import { EnterpriseBuilderConfig } from "@formio/enterprise-builder-core";

export const ENTERPRISE_BUILDER_CONFIG = new InjectionToken<EnterpriseBuilderConfig>('ENTERPRISE_BUILDER_CONFIG');

@Injectable()
export class EnterpriseBuilderAppConfig extends FormioAppConfig {
    public license: string = '';
    public projectUrl: string = '';
    public baseUrl: string = '';
    public tag: string = '';
    public icons: string = '';
    public config: any = {};
    public showData: boolean = false;
    constructor(@Inject(ENTERPRISE_BUILDER_CONFIG) config: EnterpriseBuilderConfig) {
        super({
            appUrl: config.projectUrl,
            apiUrl: config.baseUrl
        });
        Formio.license = config.license;
        this.license = config.license;
        this.projectUrl = config.projectUrl;
        this.baseUrl = config.baseUrl;
        this.tag = config.tag;
        this.icons = config.icons;
        this.config = config.config;
        this.showData = config.showData;
    }
}