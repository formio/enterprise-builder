import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import { EnterpriseBuilderAlerts } from '../../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
import * as i1 from "../../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../enterprise-builder.alerts";
import * as i4 from "@formio/angular/embed";
export class FormSubmissionEditComponent {
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
    saveSubmission(submission) {
        return this.service.saveSubmission(submission).then(() => {
            this.router.navigate(['..'], { relativeTo: this.route });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionEditComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionEditComponent, selector: "form-submission-edit", ngImport: i0, template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" (submit)=\"saveSubmission($event)\"></formio>", styles: [""], dependencies: [{ kind: "component", type: i4.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission-edit', template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" (submit)=\"saveSubmission($event)\"></formio>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vc3VibWlzc2lvbnMvZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7O0FBTzdFLE1BQU0sT0FBTywyQkFBMkI7SUFFN0I7SUFDQTtJQUNBO0lBQ0E7SUFKVCxZQUNTLE9BQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosY0FBYyxDQUFDLFVBQWM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3dHQVpVLDJCQUEyQjs0RkFBM0IsMkJBQTJCLDREQ1h4QyxtSEFBMkc7OzRGRFc5RiwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uLy4uL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWxlcnRMZXZlbCB9IGZyb20gJ0Bmb3JtaW8vZW50ZXJwcmlzZS1idWlsZGVyLWNvcmUnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHMgfSBmcm9tICcuLi8uLi8uLi9lbnRlcnByaXNlLWJ1aWxkZXIuYWxlcnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1zdWJtaXNzaW9uLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU3VibWlzc2lvbkVkaXRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybXNTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBhbGVydHM6IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzXG4gICkge31cblxuICBzYXZlU3VibWlzc2lvbihzdWJtaXNzaW9uOmFueSkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2Uuc2F2ZVN1Ym1pc3Npb24oc3VibWlzc2lvbikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxmb3JtaW8gW2Zvcm1dPVwic2VydmljZS5mb3JtXCIgW3N1Ym1pc3Npb25dPVwic2VydmljZS5zdWJtaXNzaW9uXCIgKHN1Ym1pdCk9XCJzYXZlU3VibWlzc2lvbigkZXZlbnQpXCI+PC9mb3JtaW8+Il19