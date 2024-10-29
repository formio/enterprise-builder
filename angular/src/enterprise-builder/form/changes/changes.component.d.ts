import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
export declare class FormChangesComponent extends FormEditComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    private intendedRoute;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    afterCancel(): void;
    afterSave(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormChangesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormChangesComponent, "form-changes", never, {}, {}, never, never, false, never>;
}
