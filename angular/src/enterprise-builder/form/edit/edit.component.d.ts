import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { FormBuilder } from '@formio/js';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
export declare class FormEditComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    builder: FormBuilder;
    mobileView: boolean;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    cancel(): void;
    afterCancel(): void;
    afterSave(): void;
    onFormConflict(err: any): void;
    onBuilder(builder: FormBuilder): void;
    onDisplaySelect(event: any): void;
    saveForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormEditComponent, "form-edit", never, {}, {}, never, never, false, never>;
}
