import { OnInit } from '@angular/core';
import { FormsService } from '../../forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class FormSubmissionsComponent implements OnInit {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    submissionForm: any;
    constructor(service: FormsService, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    onFormio(formio: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSubmissionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormSubmissionsComponent, "form-submissions", never, {}, {}, never, never, false, never>;
}
