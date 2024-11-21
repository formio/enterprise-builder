import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import { EnterpriseBuilderAlerts } from '../../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
export declare class FormSubmissionDeleteComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    cancel(): void;
    deleteSubmission(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSubmissionDeleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormSubmissionDeleteComponent, "form-submission-delete", never, {}, {}, never, never, false, never>;
}
