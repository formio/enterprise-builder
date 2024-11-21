import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { Submission } from '@formio/core/types';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
export declare class FormViewComponent implements OnInit {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    ngOnInit(): void;
    onFormError(err: Error): void;
    onSubmitError(err: Error): void;
    onSubmitDone(submission: Submission): void;
    onSubmitLoadError(err: Error): void;
    onSubmit(submission: any): void;
    submit(submission: Submission): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormViewComponent, "form-view", never, {}, {}, never, never, false, never>;
}
