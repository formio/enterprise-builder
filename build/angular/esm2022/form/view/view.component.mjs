import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { AlertType } from '@formio/enterprise-builder-core';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
import * as i4 from "@formio/angular/embed";
export class FormViewComponent {
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
        return this.submit(submission);
    }
    submit(submission) {
        this.service.createSubmission(submission).then((result) => {
            this.service.loadSubmission(result._id)
                .then((submission) => this.onSubmitDone(submission))
                .catch((err) => this.onSubmitLoadError(err));
        }).catch((err) => this.onSubmitError(err));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormViewComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormViewComponent, selector: "form-view", ngImport: i0, template: "<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio [url]=\"service.formUrl()\" [form]=\"service.form\" (submit)=\"onSubmit($event)\" (error)=\"onFormError($event)\"></formio>\n</div>", dependencies: [{ kind: "component", type: i4.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-view', template: "<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio [url]=\"service.formUrl()\" [form]=\"service.form\" (submit)=\"onSubmit($event)\" (error)=\"onFormError($event)\"></formio>\n</div>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vdmlldy92aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztBQU01RCxNQUFNLE9BQU8saUJBQWlCO0lBRW5CO0lBQ0E7SUFDQTtJQUNBO0lBSlQsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDckMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXLENBQUMsR0FBVTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhLENBQUMsR0FBVTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxZQUFZLENBQUMsVUFBc0I7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVU7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQXdCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQXNCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDcEMsSUFBSSxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDL0QsS0FBSyxDQUFDLENBQUMsR0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO3dHQXRDVSxpQkFBaUI7NEZBQWpCLGlCQUFpQixpRENYOUIsZ01BRU07OzRGRFNPLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnQGZvcm1pby9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tICdAZm9ybWlvL2VudGVycHJpc2UtYnVpbGRlci1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0U3VibWlzc2lvbigpO1xuICB9XG5cbiAgb25Gb3JtRXJyb3IoZXJyOiBFcnJvcikge1xuICAgIHRoaXMuYWxlcnRzLmVycm9yKEFsZXJ0VHlwZS5GT1JNX1ZJRVcsIGVycik7XG4gIH1cblxuICBvblN1Ym1pdEVycm9yKGVycjogRXJyb3IpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2Vycm9yJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gIH1cblxuICBvblN1Ym1pdERvbmUoc3VibWlzc2lvbjogU3VibWlzc2lvbikge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgLi4vc3VibWlzc2lvbi8ke3N1Ym1pc3Npb24uX2lkfWBdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgb25TdWJtaXRMb2FkRXJyb3IoZXJyOiBFcnJvcikge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vY29tcGxldGUnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHN1Ym1pc3Npb246IGFueSkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChzdWJtaXNzaW9uIGFzIFN1Ym1pc3Npb24pO1xuICB9XG5cbiAgc3VibWl0KHN1Ym1pc3Npb246IFN1Ym1pc3Npb24pIHtcbiAgICB0aGlzLnNlcnZpY2UuY3JlYXRlU3VibWlzc2lvbihzdWJtaXNzaW9uKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXJ2aWNlLmxvYWRTdWJtaXNzaW9uKHJlc3VsdC5faWQpXG4gICAgICAgIC50aGVuKChzdWJtaXNzaW9uOiBTdWJtaXNzaW9uKSA9PiB0aGlzLm9uU3VibWl0RG9uZShzdWJtaXNzaW9uKSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB0aGlzLm9uU3VibWl0TG9hZEVycm9yKGVycikpO1xuICAgIH0pLmNhdGNoKChlcnI6IEVycm9yKSA9PiB0aGlzLm9uU3VibWl0RXJyb3IoZXJyKSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJiZy1ib2R5IHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICAgIDxmb3JtaW8gW3VybF09XCJzZXJ2aWNlLmZvcm1VcmwoKVwiIFtmb3JtXT1cInNlcnZpY2UuZm9ybVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiIChlcnJvcik9XCJvbkZvcm1FcnJvcigkZXZlbnQpXCI+PC9mb3JtaW8+XG48L2Rpdj4iXX0=