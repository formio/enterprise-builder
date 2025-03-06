import { FormService } from '@formio/enterprise-builder-core';
import { EnterpriseBuilderService } from '../enterprise-builder.service';
import * as i0 from "@angular/core";
export declare class FormsService extends FormService {
    appService: EnterpriseBuilderService;
    constructor(appService: EnterpriseBuilderService);
    initializeFormModule(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormsService>;
}
