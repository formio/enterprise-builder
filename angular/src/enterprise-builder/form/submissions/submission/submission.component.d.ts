import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import * as i0 from "@angular/core";
export declare class FormSubmissionComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    pdfDownload: string;
    constructor(service: FormsService, router: Router, route: ActivatedRoute);
    isChildRoute(path: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSubmissionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormSubmissionComponent, "form-submission", never, {}, {}, never, never, false, never>;
}
