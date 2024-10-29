import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
export declare class FormConflictComponent extends FormEditComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    onMergeConflict(err: any): void;
    merge(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormConflictComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormConflictComponent, "form-conflict", never, {}, {}, never, never, false, never>;
}
