import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertLevel } from '@formio/enterprise-builder-core';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
export class FormConflictComponent extends FormEditComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        super(service, router, route, alerts);
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onMergeConflict(err) {
        this.alerts.add({
            level: AlertLevel.ERROR,
            message: 'There is still a conflict with this form. Please try again.'
        });
    }
    merge() {
        this.service.mergeAndSaveChanges().then(() => {
            this.afterSave();
        }).catch((err) => {
            if (err._id === this.service.form._id) {
                this.onMergeConflict(err);
            }
        });
    }
    onCancel() {
        this.service.cancelFormUpdate();
        this.afterCancel();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormConflictComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormConflictComponent, selector: "form-conflict", usesInheritance: true, ngImport: i0, template: "<div class=\"p-3\">\n    <h3>A newer version of this form has been saved to the server. The following changes will be merged with with this version.</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"merge()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormConflictComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-conflict', template: "<div class=\"p-3\">\n    <h3>A newer version of this form has been saved to the server. The following changes will be merged with with this version.</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"merge()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmxpY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL2NvbmZsaWN0L2NvbmZsaWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9jb25mbGljdC9jb25mbGljdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFNM0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjtJQUVqRDtJQUNBO0lBQ0E7SUFDQTtJQUpULFlBQ1MsT0FBcUIsRUFDckIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQStCO1FBRXRDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUwvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUd4QyxDQUFDO0lBRUQsZUFBZSxDQUFDLEdBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsT0FBTyxFQUFFLDZEQUE2RDtTQUN2RSxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7d0dBOUJVLHFCQUFxQjs0RkFBckIscUJBQXFCLDRFQ1hsQyxnYUFNTTs7NEZES08scUJBQXFCO2tCQUpqQyxTQUFTOytCQUNFLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxlcnRMZXZlbCB9IGZyb20gJ0Bmb3JtaW8vZW50ZXJwcmlzZS1idWlsZGVyLWNvcmUnXG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtRWRpdENvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbmZsaWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZsaWN0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29uZmxpY3RDb21wb25lbnQgZXh0ZW5kcyBGb3JtRWRpdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3Jtc1NlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGFsZXJ0czogRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHNcbiAgKSB7XG4gICAgc3VwZXIoc2VydmljZSwgcm91dGVyLCByb3V0ZSwgYWxlcnRzKTtcbiAgfVxuXG4gIG9uTWVyZ2VDb25mbGljdChlcnI6IGFueSkge1xuICAgIHRoaXMuYWxlcnRzLmFkZCh7XG4gICAgICBsZXZlbDogQWxlcnRMZXZlbC5FUlJPUixcbiAgICAgIG1lc3NhZ2U6ICdUaGVyZSBpcyBzdGlsbCBhIGNvbmZsaWN0IHdpdGggdGhpcyBmb3JtLiBQbGVhc2UgdHJ5IGFnYWluLidcbiAgICB9KTtcbiAgfVxuXG4gIG1lcmdlKCkge1xuICAgIHRoaXMuc2VydmljZS5tZXJnZUFuZFNhdmVDaGFuZ2VzKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmFmdGVyU2F2ZSgpO1xuICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgaWYgKGVyci5faWQgPT09IHRoaXMuc2VydmljZS5mb3JtLl9pZCkge1xuICAgICAgICB0aGlzLm9uTWVyZ2VDb25mbGljdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNhbmNlbEZvcm1VcGRhdGUoKTtcbiAgICB0aGlzLmFmdGVyQ2FuY2VsKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwLTNcIj5cbiAgICA8aDM+QSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgZm9ybSBoYXMgYmVlbiBzYXZlZCB0byB0aGUgc2VydmVyLiBUaGUgZm9sbG93aW5nIGNoYW5nZXMgd2lsbCBiZSBtZXJnZWQgd2l0aCB3aXRoIHRoaXMgdmVyc2lvbi48L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhclwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwibWVyZ2UoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG1lLTJcIj5ZZXMsIHNhdmUgbXkgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+Tm88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==