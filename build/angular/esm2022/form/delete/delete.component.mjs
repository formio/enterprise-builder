import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
export class FormDeleteComponent {
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
    onCancel() {
        this.router.navigate(['../view'], { relativeTo: this.route });
    }
    onDeleteDone() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    onDeleteError(err) {
        // Do nothing and allow extended classes to override.
    }
    onDelete() {
        this.service.deleteForm()
            .then(() => this.onDeleteDone())
            .catch((err) => this.onDeleteError(err));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormDeleteComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormDeleteComponent, selector: "form-delete", ngImport: i0, template: "<div class=\"p-3\">\n    <h3>Are you sure you wish to delete {{service.form?.title}} form?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger me-2\">Yes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormDeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-delete', template: "<div class=\"p-3\">\n    <h3>Are you sure you wish to delete {{service.form?.title}} form?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger me-2\">Yes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBTTFFLE1BQU0sT0FBTyxtQkFBbUI7SUFFckI7SUFDQTtJQUNBO0lBQ0E7SUFKVCxZQUNTLE9BQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxhQUFhLENBQUMsR0FBVTtRQUN0QixxREFBcUQ7SUFDdkQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTthQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQy9CLEtBQUssQ0FBQyxDQUFDLEdBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7d0dBeEJVLG1CQUFtQjs0RkFBbkIsbUJBQW1CLG1EQ1RoQyx1VkFNTTs7NEZER08sbUJBQW1CO2tCQUovQixTQUFTOytCQUNFLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWRlbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWxldGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1EZWxldGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybXNTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBhbGVydHM6IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzXG4gICkge31cblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIG9uRGVsZXRlRG9uZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgb25EZWxldGVFcnJvcihlcnI6IEVycm9yKSB7XG4gICAgLy8gRG8gbm90aGluZyBhbmQgYWxsb3cgZXh0ZW5kZWQgY2xhc3NlcyB0byBvdmVycmlkZS5cbiAgfVxuXG4gIG9uRGVsZXRlKCkge1xuICAgIHRoaXMuc2VydmljZS5kZWxldGVGb3JtKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub25EZWxldGVEb25lKCkpXG4gICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHRoaXMub25EZWxldGVFcnJvcihlcnIpKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInAtM1wiPlxuICAgIDxoMz5BcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIHt7c2VydmljZS5mb3JtPy50aXRsZX19IGZvcm0/PC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXJcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIG1lLTJcIj5ZZXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPk5vPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=