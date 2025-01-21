import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';
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
    formConfig = { data: {
            display: 'form'
        } };
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    configForm() {
        return {
            components: [
                {
                    "columns": [
                        {
                            "components": [],
                            "width": 8,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "size": "md",
                            "currentWidth": 8
                        },
                        {
                            "components": [
                                {
                                    "label": "Display",
                                    "widget": "choicesjs",
                                    "placeholder": "Display as",
                                    "tableView": true,
                                    "hideLabel": true,
                                    "data": {
                                        "values": [
                                            {
                                                "label": "Form",
                                                "value": "form"
                                            },
                                            {
                                                "label": "Wizard",
                                                "value": "wizard"
                                            },
                                            {
                                                "label": "PDF",
                                                "value": "pdf"
                                            }
                                        ]
                                    },
                                    "validateWhenHidden": false,
                                    "key": "display",
                                    "type": "select",
                                    "input": true
                                }
                            ],
                            "width": 4,
                            "offset": 0,
                            "push": 0,
                            "pull": 0,
                            "size": "md",
                            "currentWidth": 4
                        }
                    ],
                    "key": "columns",
                    "type": "columns",
                    "input": false,
                    "tableView": false
                }
            ]
        };
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
        this.formConfig.data.display = builder.form.display;
    }
    onDisplaySelect(event) {
        if (event.target?.value) {
            this.builder.builder.setDisplay(this.formConfig.data.display);
        }
        ;
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormEditComponent, selector: "form-edit", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }], ngImport: i0, template: "<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"onDisplaySelect($event)\" class=\"w-100\"></formio>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"], dependencies: [{ kind: "component", type: i4.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i4.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-edit', template: "<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"onDisplaySelect($event)\" class=\"w-100\"></formio>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFPdEQsTUFBTSxPQUFPLGlCQUFpQjtJQU9uQjtJQUNBO0lBQ0E7SUFDQTtJQVRpQixPQUFPLENBQWdCO0lBQzFDLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDNUIsVUFBVSxHQUFpRCxFQUFDLElBQUksRUFBRTtZQUN2RSxPQUFPLEVBQUUsTUFBTTtTQUNoQixFQUFDLENBQUE7SUFDRixZQUNTLE9BQXFCLEVBQ3JCLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUErQjtRQUgvQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNyQyxDQUFDO0lBRUosVUFBVTtRQUNSLE9BQU87WUFDTCxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLFlBQVksRUFBRSxFQUFFOzRCQUNoQixP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QUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3dHQTdHVSxpQkFBaUI7NEZBQWpCLGlCQUFpQiwwRkFDakIsYUFBYSxnRENkMUIsbWdCQU9BOzs0RkRNYSxpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsV0FBVzt5S0FLSyxPQUFPO3NCQUFoQyxTQUFTO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtIH0gZnJvbSAnQGZvcm1pby9jb3JlL3R5cGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAZm9ybWlvL2pzJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9CdWlsZGVyIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyL2VtYmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUVkaXRDb21wb25lbnQge1xuICBAVmlld0NoaWxkKEZvcm1pb0J1aWxkZXIpIGJ1aWxkZXI6IEZvcm1pb0J1aWxkZXI7XG4gIHB1YmxpYyBtb2JpbGVWaWV3OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmb3JtQ29uZmlnOiB7ZGF0YToge2Rpc3BsYXk6ICdmb3JtJyB8ICd3aXphcmQnIHwgJ3BkZid9fSA9IHtkYXRhOiB7XG4gICAgZGlzcGxheTogJ2Zvcm0nXG4gIH19XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3Jtc1NlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGFsZXJ0czogRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHNcbiAgKSB7fVxuXG4gIGNvbmZpZ0Zvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sdW1uc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBbXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA4LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgIFwid2lkZ2V0XCI6IFwiY2hvaWNlc2pzXCIsXG4gICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRGlzcGxheSBhc1wiLFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVZpZXdcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwiaGlkZUxhYmVsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJXaXphcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ3aXphcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBERlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJ2YWxpZGF0ZVdoZW5IaWRkZW5cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcImtleVwiOiBcImRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndpZHRoXCI6IDQsXG4gICAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXG4gICAgICAgICAgICAgIFwicHVzaFwiOiAwLFxuICAgICAgICAgICAgICBcInB1bGxcIjogMCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwibWRcIixcbiAgICAgICAgICAgICAgXCJjdXJyZW50V2lkdGhcIjogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJrZXlcIjogXCJjb2x1bW5zXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwiaW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgXCJ0YWJsZVZpZXdcIjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLnNlcnZpY2UuY2FuY2VsRm9ybVVwZGF0ZSgpO1xuICAgIHRoaXMuYWZ0ZXJDYW5jZWwoKTtcbiAgfVxuXG4gIGFmdGVyQ2FuY2VsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vdmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgYWZ0ZXJTYXZlKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vdmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgb25Gb3JtQ29uZmxpY3QoZXJyOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL2NvbmZsaWN0J10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XG4gIH1cblxuICBvbkJ1aWxkZXIoYnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcm1Db25maWcuZGF0YS5kaXNwbGF5ID0gKGJ1aWxkZXIuZm9ybSBhcyBGb3JtKS5kaXNwbGF5O1xuICB9XG5cbiAgb25EaXNwbGF5U2VsZWN0KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldD8udmFsdWUpIHtcbiAgICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLnNldERpc3BsYXkodGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheSk7XG4gICAgfTtcbiAgfVxuXG4gIHNhdmVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZS5zYXZlRm9ybSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5hZnRlclNhdmUoKTtcbiAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgIGlmIChlcnIuX2lkID09PSB0aGlzLnNlcnZpY2UuZm9ybS5faWQpIHtcbiAgICAgICAgdGhpcy5vbkZvcm1Db25mbGljdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCI8Zm9ybWlvIFtmb3JtXT1cImNvbmZpZ0Zvcm0oKVwiIFtzdWJtaXNzaW9uXT1cImZvcm1Db25maWdcIiAoY2hhbmdlKT1cIm9uRGlzcGxheVNlbGVjdCgkZXZlbnQpXCIgY2xhc3M9XCJ3LTEwMFwiPjwvZm9ybWlvPlxuPGRpdiBjbGFzcz1cImJnLWJvZHkgcm91bmRlZCBzaGFkb3ctc20gcC0yXCI+XG4gICAgPGZvcm1pby1idWlsZGVyIFtmb3JtXT1cInNlcnZpY2UuYnVpbGRlckZvcm1cIiBbb3B0aW9uc109XCJzZXJ2aWNlLmJ1aWxkZXJPcHRpb25zXCIgKGNoYW5nZSk9XCJzZXJ2aWNlLm9uQ2hhbmdlKCRldmVudClcIiAocmVhZHkpPVwib25CdWlsZGVyKCRldmVudClcIj48L2Zvcm1pby1idWlsZGVyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiPlxuICAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBhbGlnbi1zZWxmLWVuZFwiIChjbGljayk9XCJzYXZlRm9ybSgpXCI+U2F2ZSBGb3JtPC9hPlxuPC9kaXY+XG4iXX0=