import { Component } from '@angular/core';
import { FormsService } from '../../forms.service';
import * as i0 from "@angular/core";
import * as i1 from "../../forms.service";
import * as i2 from "@formio/angular/embed";
export class FormSubmissionViewComponent {
    service;
    constructor(service) {
        this.service = service;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionViewComponent, deps: [{ token: i1.FormsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionViewComponent, selector: "form-submission-view", ngImport: i0, template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" [options]=\"{readOnly: true}\"></formio>", styles: [""], dependencies: [{ kind: "component", type: i2.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission-view', template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" [options]=\"{readOnly: true}\"></formio>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vc3VibWlzc2lvbnMvdmlldy92aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFPbkQsTUFBTSxPQUFPLDJCQUEyQjtJQUNuQjtJQUFuQixZQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQUcsQ0FBQzt3R0FEakMsMkJBQTJCOzRGQUEzQiwyQkFBMkIsNERDUnhDLDhHQUFzRzs7NEZEUXpGLDJCQUEyQjtrQkFMdkMsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uLy4uL2Zvcm1zLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXN1Ym1pc3Npb24tdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TdWJtaXNzaW9uVmlld0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBGb3Jtc1NlcnZpY2UpIHt9XG59XG4iLCI8Zm9ybWlvIFtmb3JtXT1cInNlcnZpY2UuZm9ybVwiIFtzdWJtaXNzaW9uXT1cInNlcnZpY2Uuc3VibWlzc2lvblwiIFtvcHRpb25zXT1cIntyZWFkT25seTogdHJ1ZX1cIj48L2Zvcm1pbz4iXX0=