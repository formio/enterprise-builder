import { FormsService } from '../forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
export declare class FormDeleteComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    onCancel(): void;
    onDeleteDone(): void;
    onDeleteError(err: Error): void;
    onDelete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormDeleteComponent, "form-delete", never, {}, {}, never, never, false, never>;
}
