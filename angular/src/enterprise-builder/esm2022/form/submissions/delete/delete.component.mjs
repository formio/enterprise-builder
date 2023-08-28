import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import { EnterpriseBuilderAlerts } from '../../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
import * as i1 from "../../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../enterprise-builder.alerts";
export class FormSubmissionDeleteComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    cancel() {
        this.router.navigate(['../view'], { relativeTo: this.route });
    }
    deleteSubmission() {
        this.service.deleteSubmission().then(() => {
            this.router.navigate(['../..'], { relativeTo: this.route });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormSubmissionDeleteComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.3", type: FormSubmissionDeleteComponent, selector: "form-submission-delete", ngImport: i0, template: "<h3>Are you sure you wish to delete this record?</h3>\n<div class=\"btn-toolbar\">\n  <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-primary me-3 px-3 py-2\">No</button>\n  <button type=\"button\" (click)=\"deleteSubmission()\" class=\"btn btn-light px-3 py-2\" style=\"margin-right: 10px;\">Yes, delete this submission</button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormSubmissionDeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission-delete', template: "<h3>Are you sure you wish to delete this record?</h3>\n<div class=\"btn-toolbar\">\n  <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-primary me-3 px-3 py-2\">No</button>\n  <button type=\"button\" (click)=\"deleteSubmission()\" class=\"btn btn-light px-3 py-2\" style=\"margin-right: 10px;\">Yes, delete this submission</button>\n</div>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBTzdFLE1BQU0sT0FBTyw2QkFBNkI7SUFFL0I7SUFDQTtJQUNBO0lBQ0E7SUFKVCxZQUNTLE9BQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3VHQWhCVSw2QkFBNkI7MkZBQTdCLDZCQUE2Qiw4RENYMUMsZ1dBSU07OzJGRE9PLDZCQUE2QjtrQkFMekMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBBbGVydExldmVsIH0gZnJvbSAnQGZvcm1pby9lbnRlcnByaXNlLWJ1aWxkZXItY29yZSc7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXN1Ym1pc3Npb24tZGVsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlbGV0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TdWJtaXNzaW9uRGVsZXRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vdmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgZGVsZXRlU3VibWlzc2lvbigpIHtcbiAgICB0aGlzLnNlcnZpY2UuZGVsZXRlU3VibWlzc2lvbigpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLiddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICAgIH0pO1xuICB9XG59XG4iLCI8aDM+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIHJlY29yZD88L2gzPlxuPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTMgcHgtMyBweS0yXCI+Tm88L2J1dHRvbj5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImRlbGV0ZVN1Ym1pc3Npb24oKVwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBweC0zIHB5LTJcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweDtcIj5ZZXMsIGRlbGV0ZSB0aGlzIHN1Ym1pc3Npb248L2J1dHRvbj5cbjwvZGl2PiJdfQ==