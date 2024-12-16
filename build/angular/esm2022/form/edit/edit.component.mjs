import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
import * as i4 from "@formio/angular/embed";
export class FormEditComponent {
    service;
    router;
    route;
    alerts;
    builder;
    mobileView = false;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    cancel() {
        this.service.cancelFormUpdate();
        this.afterCancel();
    }
    afterCancel() {
        this.router.navigate(['../view'], { relativeTo: this.route });
    }
    afterSave() {
        this.router.navigate(['../view'], { relativeTo: this.route });
    }
    onFormConflict(err) {
        this.router.navigate(['../conflict'], { relativeTo: this.route });
    }
    onBuilder(builder) {
        this.builder = builder;
    }
    onDisplaySelect(event) {
        this.builder.setDisplay(event.target.value);
    }
    saveForm() {
        this.service.saveForm().then(() => {
            this.afterSave();
        }).catch((err) => {
            if (err._id === this.service.form._id) {
                this.onFormConflict(err);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormEditComponent, selector: "form-edit", ngImport: i0, template: "<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"], dependencies: [{ kind: "component", type: i4.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-edit', template: "<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7O0FBTzFFLE1BQU0sT0FBTyxpQkFBaUI7SUFJbkI7SUFDQTtJQUNBO0lBQ0E7SUFORixPQUFPLENBQWM7SUFDckIsVUFBVSxHQUFZLEtBQUssQ0FBQztJQUNuQyxZQUNTLE9BQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsY0FBYyxDQUFDLEdBQVE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQW9CO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt3R0EzQ1UsaUJBQWlCOzRGQUFqQixpQkFBaUIsaURDWDlCLHVZQU1BOzs0RkRLYSxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGZvcm1pby9qcyc7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRWRpdENvbXBvbmVudCB7XG4gIHB1YmxpYyBidWlsZGVyOiBGb3JtQnVpbGRlcjtcbiAgcHVibGljIG1vYmlsZVZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuc2VydmljZS5jYW5jZWxGb3JtVXBkYXRlKCk7XG4gICAgdGhpcy5hZnRlckNhbmNlbCgpO1xuICB9XG5cbiAgYWZ0ZXJDYW5jZWwoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi92aWV3J10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gIH1cblxuICBhZnRlclNhdmUoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi92aWV3J10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gIH1cblxuICBvbkZvcm1Db25mbGljdChlcnI6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vY29uZmxpY3QnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIG9uQnVpbGRlcihidWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMuYnVpbGRlciA9IGJ1aWxkZXI7XG4gIH1cblxuICBvbkRpc3BsYXlTZWxlY3QoZXZlbnQpIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0RGlzcGxheShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgc2F2ZUZvcm0oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnNhdmVGb3JtKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmFmdGVyU2F2ZSgpO1xuICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgaWYgKGVyci5faWQgPT09IHRoaXMuc2VydmljZS5mb3JtLl9pZCkge1xuICAgICAgICB0aGlzLm9uRm9ybUNvbmZsaWN0KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJiZy1ib2R5IHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICAgIDxmb3JtaW8tYnVpbGRlciBbZm9ybV09XCJzZXJ2aWNlLmJ1aWxkZXJGb3JtXCIgW29wdGlvbnNdPVwic2VydmljZS5idWlsZGVyT3B0aW9uc1wiIChjaGFuZ2UpPVwic2VydmljZS5vbkNoYW5nZSgkZXZlbnQpXCIgKHJlYWR5KT1cIm9uQnVpbGRlcigkZXZlbnQpXCI+PC9mb3JtaW8tYnVpbGRlcj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG15LTNcIj5cbiAgICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYWxpZ24tc2VsZi1lbmRcIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiPlNhdmUgRm9ybTwvYT5cbjwvZGl2PlxuIl19