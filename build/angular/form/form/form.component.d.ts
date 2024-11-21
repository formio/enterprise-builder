import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import * as i0 from "@angular/core";
export declare class FormComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    constructor(service: FormsService, router: Router, route: ActivatedRoute);
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponent, "form-form", never, {}, {}, never, never, false, never>;
}
