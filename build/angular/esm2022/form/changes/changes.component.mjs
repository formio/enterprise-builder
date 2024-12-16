import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
export class FormChangesComponent extends FormEditComponent {
    service;
    router;
    route;
    alerts;
    intendedRoute = null;
    constructor(service, router, route, alerts) {
        super(service, router, route, alerts);
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
        this.intendedRoute = this.router.getCurrentNavigation()?.extras.state?.intendedRoute || null;
    }
    afterCancel() {
        if (this.intendedRoute) {
            this.router.navigate([this.intendedRoute]);
            return;
        }
        super.afterCancel();
    }
    afterSave() {
        if (this.intendedRoute) {
            this.router.navigate([this.intendedRoute]);
            return;
        }
        super.afterSave();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormChangesComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormChangesComponent, selector: "form-changes", usesInheritance: true, ngImport: i0, template: "<div class=\"p-3\">\n    <h3>You have made some changes to this form. Would you like to save your changes?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"saveForm()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormChangesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-changes', template: "<div class=\"p-3\">\n    <h3>You have made some changes to this form. Would you like to save your changes?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"saveForm()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vY2hhbmdlcy9jaGFuZ2VzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9jaGFuZ2VzL2NoYW5nZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFNM0QsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGlCQUFpQjtJQUdoRDtJQUNBO0lBQ0E7SUFDQTtJQUxELGFBQWEsR0FBa0IsSUFBSSxDQUFDO0lBQzVDLFlBQ1MsT0FBcUIsRUFDckIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQStCO1FBRXRDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUwvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUd0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLGFBQWEsSUFBSSxJQUFJLENBQUM7SUFDL0YsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE9BQU87UUFDVCxDQUFDO1FBQ0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMzQyxPQUFPO1FBQ1QsQ0FBQztRQUNELEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQixDQUFDO3dHQTFCVSxvQkFBb0I7NEZBQXBCLG9CQUFvQiwyRUNWakMsdVhBTU07OzRGRElPLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHMgfSBmcm9tICcuLi8uLi9lbnRlcnByaXNlLWJ1aWxkZXIuYWxlcnRzJztcbmltcG9ydCB7IEZvcm1FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tY2hhbmdlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2VzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ2hhbmdlc0NvbXBvbmVudCBleHRlbmRzIEZvcm1FZGl0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSBpbnRlbmRlZFJvdXRlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHtcbiAgICBzdXBlcihzZXJ2aWNlLCByb3V0ZXIsIHJvdXRlLCBhbGVydHMpO1xuICAgIHRoaXMuaW50ZW5kZWRSb3V0ZSA9IHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKCk/LmV4dHJhcy5zdGF0ZT8uaW50ZW5kZWRSb3V0ZSB8fCBudWxsO1xuICB9XG5cbiAgYWZ0ZXJDYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuaW50ZW5kZWRSb3V0ZSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuaW50ZW5kZWRSb3V0ZV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdXBlci5hZnRlckNhbmNlbCgpO1xuICB9XG5cbiAgYWZ0ZXJTYXZlKCkge1xuICAgIGlmICh0aGlzLmludGVuZGVkUm91dGUpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmludGVuZGVkUm91dGVdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3VwZXIuYWZ0ZXJTYXZlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwLTNcIj5cbiAgICA8aDM+WW91IGhhdmUgbWFkZSBzb21lIGNoYW5nZXMgdG8gdGhpcyBmb3JtLiBXb3VsZCB5b3UgbGlrZSB0byBzYXZlIHlvdXIgY2hhbmdlcz88L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTJcIj5ZZXMsIHNhdmUgbXkgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPk5vPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=