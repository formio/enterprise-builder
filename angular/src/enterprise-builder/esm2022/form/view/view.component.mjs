import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { AlertType } from '@formio/enterprise-builder-core';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
import * as i4 from "@angular/common";
import * as i5 from "@formio/angular/embed";
export class FormViewComponent {
    service;
    router;
    route;
    alerts;
    mobileView = false;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    ngOnInit() {
        this.service.resetSubmission();
    }
    onFormError(err) {
        this.alerts.error(AlertType.FORM_VIEW, err);
    }
    onSubmitError(err) {
        this.router.navigate(['../error'], { relativeTo: this.route });
    }
    onSubmitDone(submission) {
        this.router.navigate([`../submission/${submission._id}`], { relativeTo: this.route });
    }
    onSubmitLoadError(err) {
        this.router.navigate(['../complete'], { relativeTo: this.route });
    }
    onSubmit(submission) {
        this.service.createSubmission(submission).then((result) => {
            this.service.loadSubmission(result._id)
                .then((submission) => this.onSubmitDone(submission))
                .catch((err) => this.onSubmitLoadError(err));
        }).catch((err) => this.onSubmitError(err));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormViewComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.3", type: FormViewComponent, selector: "form-view", ngImport: i0, template: "<div class=\"d-flex justify-content-center my-2\">\n    <div class=\"form-ui-controls d-flex gap-2 justify-content-center\">\n        <div class=\"d-flex gap-2\">\n            <button class=\"btn btn-outline-primary btn-sm\" [ngClass]=\"mobileView ? 'active': ''\" (click)=\"mobileView = true\"><i class=\"bi bi-phone\"></i></button>\n            <button class=\"btn btn-outline-primary btn-sm\" [ngClass]=\"!mobileView ? 'active': ''\" (click)=\"mobileView = false\"><i class=\"bi bi-laptop\"></i></button>\n        </div>\n    </div>\n</div>\n<div [ngClass]=\"mobileView ? 'mobileView' : ''\">\n    <div class=\"bg-body rounded shadow-sm p-2 renderer\">\n        <formio [url]=\"service.formUrl\" [form]=\"service.form\" (submit)=\"onSubmit($event)\" (error)=\"onFormError($event)\"></formio>\n    </div>\n</div>", styles: [".mobileView .renderer{width:30%!important;margin:0 auto!important}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-view', template: "<div class=\"d-flex justify-content-center my-2\">\n    <div class=\"form-ui-controls d-flex gap-2 justify-content-center\">\n        <div class=\"d-flex gap-2\">\n            <button class=\"btn btn-outline-primary btn-sm\" [ngClass]=\"mobileView ? 'active': ''\" (click)=\"mobileView = true\"><i class=\"bi bi-phone\"></i></button>\n            <button class=\"btn btn-outline-primary btn-sm\" [ngClass]=\"!mobileView ? 'active': ''\" (click)=\"mobileView = false\"><i class=\"bi bi-laptop\"></i></button>\n        </div>\n    </div>\n</div>\n<div [ngClass]=\"mobileView ? 'mobileView' : ''\">\n    <div class=\"bg-body rounded shadow-sm p-2 renderer\">\n        <formio [url]=\"service.formUrl\" [form]=\"service.form\" (submit)=\"onSubmit($event)\" (error)=\"onFormError($event)\"></formio>\n    </div>\n</div>", styles: [".mobileView .renderer{width:30%!important;margin:0 auto!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vdmlldy92aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7QUFPNUQsTUFBTSxPQUFPLGlCQUFpQjtJQUduQjtJQUNBO0lBQ0E7SUFDQTtJQUxGLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDbkMsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDckMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsR0FBVTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhLENBQUMsR0FBVTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxZQUFZLENBQUMsVUFBc0I7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVU7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQXNCO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDcEMsSUFBSSxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDL0QsS0FBSyxDQUFDLENBQUMsR0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO3VHQW5DVSxpQkFBaUI7MkZBQWpCLGlCQUFpQixpRENaOUIsZ3pCQVlNOzsyRkRBTyxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJ0Bmb3JtaW8vY29yZS90eXBlcyc7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuaW1wb3J0IHsgQWxlcnRUeXBlIH0gZnJvbSAnQGZvcm1pby9lbnRlcnByaXNlLWJ1aWxkZXItY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG1vYmlsZVZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0U3VibWlzc2lvbigpO1xuICB9XG5cbiAgb25Gb3JtRXJyb3IoZXJyOiBFcnJvcikge1xuICAgIHRoaXMuYWxlcnRzLmVycm9yKEFsZXJ0VHlwZS5GT1JNX1ZJRVcsIGVycik7XG4gIH1cblxuICBvblN1Ym1pdEVycm9yKGVycjogRXJyb3IpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2Vycm9yJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gIH1cblxuICBvblN1Ym1pdERvbmUoc3VibWlzc2lvbjogU3VibWlzc2lvbikge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgLi4vc3VibWlzc2lvbi8ke3N1Ym1pc3Npb24uX2lkfWBdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgb25TdWJtaXRMb2FkRXJyb3IoZXJyOiBFcnJvcikge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vY29tcGxldGUnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHN1Ym1pc3Npb246IFN1Ym1pc3Npb24pIHtcbiAgICB0aGlzLnNlcnZpY2UuY3JlYXRlU3VibWlzc2lvbihzdWJtaXNzaW9uKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXJ2aWNlLmxvYWRTdWJtaXNzaW9uKHJlc3VsdC5faWQpXG4gICAgICAgIC50aGVuKChzdWJtaXNzaW9uOiBTdWJtaXNzaW9uKSA9PiB0aGlzLm9uU3VibWl0RG9uZShzdWJtaXNzaW9uKSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB0aGlzLm9uU3VibWl0TG9hZEVycm9yKGVycikpO1xuICAgIH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PiB0aGlzLm9uU3VibWl0RXJyb3IoZXJyKSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tdWktY29udHJvbHMgZC1mbGV4IGdhcC0yIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1zbVwiIFtuZ0NsYXNzXT1cIm1vYmlsZVZpZXcgPyAnYWN0aXZlJzogJydcIiAoY2xpY2spPVwibW9iaWxlVmlldyA9IHRydWVcIj48aSBjbGFzcz1cImJpIGJpLXBob25lXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1zbVwiIFtuZ0NsYXNzXT1cIiFtb2JpbGVWaWV3ID8gJ2FjdGl2ZSc6ICcnXCIgKGNsaWNrKT1cIm1vYmlsZVZpZXcgPSBmYWxzZVwiPjxpIGNsYXNzPVwiYmkgYmktbGFwdG9wXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBbbmdDbGFzc109XCJtb2JpbGVWaWV3ID8gJ21vYmlsZVZpZXcnIDogJydcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmctYm9keSByb3VuZGVkIHNoYWRvdy1zbSBwLTIgcmVuZGVyZXJcIj5cbiAgICAgICAgPGZvcm1pbyBbdXJsXT1cInNlcnZpY2UuZm9ybVVybFwiIFtmb3JtXT1cInNlcnZpY2UuZm9ybVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiIChlcnJvcik9XCJvbkZvcm1FcnJvcigkZXZlbnQpXCI+PC9mb3JtaW8+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=