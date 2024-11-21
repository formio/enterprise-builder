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
        this.router.navigate(['..'], { relativeTo: this.route });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBTzdFLE1BQU0sT0FBTyw2QkFBNkI7SUFFL0I7SUFDQTtJQUNBO0lBQ0E7SUFKVCxZQUNTLE9BQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3VHQWhCVSw2QkFBNkI7MkZBQTdCLDZCQUE2Qiw4RENYMUMsZ1dBSU07OzJGRE9PLDZCQUE2QjtrQkFMekMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBBbGVydExldmVsIH0gZnJvbSAnQGZvcm1pby9lbnRlcnByaXNlLWJ1aWxkZXItY29yZSc7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXN1Ym1pc3Npb24tZGVsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlbGV0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TdWJtaXNzaW9uRGVsZXRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4nXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIGRlbGV0ZVN1Ym1pc3Npb24oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmRlbGV0ZVN1Ym1pc3Npb24oKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vLi4nXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGgzPkFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyByZWNvcmQ/PC9oMz5cbjxkaXYgY2xhc3M9XCJidG4tdG9vbGJhclwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtZS0zIHB4LTMgcHktMlwiPk5vPC9idXR0b24+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJkZWxldGVTdWJtaXNzaW9uKClcIiBjbGFzcz1cImJ0biBidG4tbGlnaHQgcHgtMyBweS0yXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCI+WWVzLCBkZWxldGUgdGhpcyBzdWJtaXNzaW9uPC9idXR0b24+XG48L2Rpdj4iXX0=