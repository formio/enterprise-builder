import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';
import * as i0 from "@angular/core";
import * as i1 from "../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "../../enterprise-builder.alerts";
import * as i4 from "@angular/common";
import * as i5 from "@formio/angular/embed";
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
    ngOnInit() {
        this.service.initializeFormModule();
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
            this.service.form.display = this.formConfig.data.display;
            const builderOptions = this.service.initializeFormModule();
            this.builder.builder.options = {
                ...this.service.builderOptions,
                builder: builderOptions ?? this.service.builderOptions.builder,
            };
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
    isPDFattached() {
        return this.service.builderForm.settings?.pdf;
    }
    removePDF() {
        delete this.service.builderForm.settings.pdf;
        this.service.builderForm = { ...this.service.builderForm };
        this.builder.builder.setDisplay('pdf');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormEditComponent, selector: "form-edit", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }], ngImport: i0, template: "<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"onDisplaySelect($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n    <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i5.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-edit', template: "<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"onDisplaySelect($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n    <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBT3RELE1BQU0sT0FBTyxpQkFBaUI7SUFPbkI7SUFDQTtJQUNBO0lBQ0E7SUFUaUIsT0FBTyxDQUFnQjtJQUMxQyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLFVBQVUsR0FBaUQsRUFBQyxJQUFJLEVBQUU7WUFDdkUsT0FBTyxFQUFFLE1BQU07U0FDaEIsRUFBQyxDQUFBO0lBQ0YsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDckMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPO1lBQ0wsVUFB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtIH0gZnJvbSAnQGZvcm1pby9jb3JlL3R5cGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bmb3JtaW8vanMnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHMgfSBmcm9tICcuLi8uLi9lbnRlcnByaXNlLWJ1aWxkZXIuYWxlcnRzJztcbmltcG9ydCB7IEZvcm1pb0J1aWxkZXIgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXIvZW1iZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoRm9ybWlvQnVpbGRlcikgYnVpbGRlcjogRm9ybWlvQnVpbGRlcjtcbiAgcHVibGljIG1vYmlsZVZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZvcm1Db25maWc6IHtkYXRhOiB7ZGlzcGxheTogJ2Zvcm0nIHwgJ3dpemFyZCcgfCAncGRmJ319ID0ge2RhdGE6IHtcbiAgICBkaXNwbGF5OiAnZm9ybSdcbiAgfX1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemVGb3JtTW9kdWxlKCk7XG4gIH1cblxuICBjb25maWdGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbHVtbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW10sXG4gICAgICAgICAgICAgIFwid2lkdGhcIjogOCxcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcbiAgICAgICAgICAgICAgXCJwdXNoXCI6IDAsXG4gICAgICAgICAgICAgIFwicHVsbFwiOiAwLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCJtZFwiLFxuICAgICAgICAgICAgICBcImN1cnJlbnRXaWR0aFwiOiA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcIndpZGdldFwiOiBcImNob2ljZXNqc1wiLFxuICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRpc3BsYXkgYXNcIixcbiAgICAgICAgICAgICAgICAgIFwidGFibGVWaWV3XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImhpZGVMYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiV2l6YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwid2l6YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQREZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJwZGZcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGVXaGVuSGlkZGVuXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwia2V5XCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImNvbHVtbnNcIixcbiAgICAgICAgICBcImlucHV0XCI6IGZhbHNlLFxuICAgICAgICAgIFwidGFibGVWaWV3XCI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNhbmNlbEZvcm1VcGRhdGUoKTtcbiAgICB0aGlzLmFmdGVyQ2FuY2VsKCk7XG4gIH1cblxuICBhZnRlckNhbmNlbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIGFmdGVyU2F2ZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIG9uRm9ybUNvbmZsaWN0KGVycjogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9jb25mbGljdCddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgb25CdWlsZGVyKGJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheSA9IChidWlsZGVyLmZvcm0gYXMgRm9ybSkuZGlzcGxheTtcbiAgfVxuXG4gIG9uRGlzcGxheVNlbGVjdChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQ/LnZhbHVlKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuZm9ybS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheTtcbiAgICAgIGNvbnN0IGJ1aWxkZXJPcHRpb25zID0gdGhpcy5zZXJ2aWNlLmluaXRpYWxpemVGb3JtTW9kdWxlKCk7XG4gICAgICB0aGlzLmJ1aWxkZXIuYnVpbGRlci5vcHRpb25zID0ge1xuICAgICAgICAuLi50aGlzLnNlcnZpY2UuYnVpbGRlck9wdGlvbnMsXG4gICAgICAgIGJ1aWxkZXI6IGJ1aWxkZXJPcHRpb25zID8/IHRoaXMuc2VydmljZS5idWlsZGVyT3B0aW9ucy5idWlsZGVyLFxuICAgICAgfTtcbiAgICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLnNldERpc3BsYXkodGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheSk7XG4gICAgfTtcbiAgfVxuXG4gIHNhdmVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZS5zYXZlRm9ybSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5hZnRlclNhdmUoKTtcbiAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgIGlmIChlcnIuX2lkID09PSB0aGlzLnNlcnZpY2UuZm9ybS5faWQpIHtcbiAgICAgICAgdGhpcy5vbkZvcm1Db25mbGljdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNQREZhdHRhY2hlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuc2VydmljZS5idWlsZGVyRm9ybSBhcyBGb3JtKS5zZXR0aW5ncz8ucGRmO1xuICB9XG5cbiAgcmVtb3ZlUERGKCkge1xuICAgIGRlbGV0ZSAodGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtIGFzIEZvcm0pLnNldHRpbmdzLnBkZjtcbiAgICB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0gPSB7Li4udGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtfTtcbiAgICB0aGlzLmJ1aWxkZXIuYnVpbGRlci5zZXREaXNwbGF5KCdwZGYnKTtcbiAgfVxufVxuIiwiPGZvcm1pbyBbZm9ybV09XCJjb25maWdGb3JtKClcIiBbc3VibWlzc2lvbl09XCJmb3JtQ29uZmlnXCIgKGNoYW5nZSk9XCJvbkRpc3BsYXlTZWxlY3QoJGV2ZW50KVwiIGNsYXNzPVwidy0xMDBcIj48L2Zvcm1pbz5cbjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBteS0zXCIgKm5nSWY9XCJzZXJ2aWNlLmJ1aWxkZXJGb3JtLmRpc3BsYXkgPT09ICdwZGYnICYmIGlzUERGYXR0YWNoZWQoKVwiPlxuICAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cInJlbW92ZVBERigpXCI+UmVtb3ZlIFBERjwvYT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImJnLWJvZHkgcm91bmRlZCBzaGFkb3ctc20gcC0yXCI+XG4gICAgPGZvcm1pby1idWlsZGVyIFtmb3JtXT1cInNlcnZpY2UuYnVpbGRlckZvcm1cIiBbb3B0aW9uc109XCJzZXJ2aWNlLmJ1aWxkZXJPcHRpb25zXCIgKGNoYW5nZSk9XCJzZXJ2aWNlLm9uQ2hhbmdlKCRldmVudClcIiAocmVhZHkpPVwib25CdWlsZGVyKCRldmVudClcIj48L2Zvcm1pby1idWlsZGVyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiPlxuICAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBhbGlnbi1zZWxmLWVuZFwiIChjbGljayk9XCJzYXZlRm9ybSgpXCI+U2F2ZSBGb3JtPC9hPlxuPC9kaXY+XG4iXX0=