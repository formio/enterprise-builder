import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import { EnterpriseBuilderAlerts } from '../../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
export declare class FormSubmissionEditComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    saveSubmission(submission: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSubmissionEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormSubmissionEditComponent, "form-submission-edit", never, {}, {}, never, never, false, never>;
}
