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
            this.builder.builder.options = this.service.builderOptions;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBT3RELE1BQU0sT0FBTyxpQkFBaUI7SUFPbkI7SUFDQTtJQUNBO0lBQ0E7SUFUaUIsT0FBTyxDQUFnQjtJQUMxQyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBQzVCLFVBQVUsR0FBaUQsRUFBQyxJQUFJLEVBQUU7WUFDdkUsT0FBTyxFQUFFLE1BQU07U0FDaEIsRUFBQyxDQUFBO0lBQ0YsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDckMsQ0FBQztJQUVKLFVBQVU7UUFDUixPQUFPO1lBQ0wsVUFBVSxFQUFFO2dCQUNWO29CQUNFLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxZQUFZLEVBQUUsRUFBRTs0QkFDaEIs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QUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNwQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBb0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQzt3R0F6SFUsaUJBQWlCOzRGQUFqQixpQkFBaUIsMEZBQ2pCLGFBQWEsZ0RDZDFCLHV0QkFVQTs7NEZER2EsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLFdBQVc7eUtBS0ssT0FBTztzQkFBaEMsU0FBUzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSB9IGZyb20gJ0Bmb3JtaW8vY29yZS90eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGZvcm1pby9qcyc7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuaW1wb3J0IHsgRm9ybWlvQnVpbGRlciB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhci9lbWJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1FZGl0Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZChGb3JtaW9CdWlsZGVyKSBidWlsZGVyOiBGb3JtaW9CdWlsZGVyO1xuICBwdWJsaWMgbW9iaWxlVmlldzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZm9ybUNvbmZpZzoge2RhdGE6IHtkaXNwbGF5OiAnZm9ybScgfCAnd2l6YXJkJyB8ICdwZGYnfX0gPSB7ZGF0YToge1xuICAgIGRpc3BsYXk6ICdmb3JtJ1xuICB9fVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogRm9ybXNTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBhbGVydHM6IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzXG4gICkge31cblxuICBjb25maWdGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbHVtbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW10sXG4gICAgICAgICAgICAgIFwid2lkdGhcIjogOCxcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcbiAgICAgICAgICAgICAgXCJwdXNoXCI6IDAsXG4gICAgICAgICAgICAgIFwicHVsbFwiOiAwLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCJtZFwiLFxuICAgICAgICAgICAgICBcImN1cnJlbnRXaWR0aFwiOiA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcIndpZGdldFwiOiBcImNob2ljZXNqc1wiLFxuICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRpc3BsYXkgYXNcIixcbiAgICAgICAgICAgICAgICAgIFwidGFibGVWaWV3XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImhpZGVMYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiV2l6YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwid2l6YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQREZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJwZGZcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGVXaGVuSGlkZGVuXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwia2V5XCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImNvbHVtbnNcIixcbiAgICAgICAgICBcImlucHV0XCI6IGZhbHNlLFxuICAgICAgICAgIFwidGFibGVWaWV3XCI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNhbmNlbEZvcm1VcGRhdGUoKTtcbiAgICB0aGlzLmFmdGVyQ2FuY2VsKCk7XG4gIH1cblxuICBhZnRlckNhbmNlbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIGFmdGVyU2F2ZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIG9uRm9ybUNvbmZsaWN0KGVycjogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9jb25mbGljdCddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgb25CdWlsZGVyKGJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheSA9IChidWlsZGVyLmZvcm0gYXMgRm9ybSkuZGlzcGxheTtcbiAgfVxuXG4gIG9uRGlzcGxheVNlbGVjdChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQ/LnZhbHVlKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuZm9ybS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheTtcbiAgICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLm9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuYnVpbGRlck9wdGlvbnM7XG4gICAgICB0aGlzLmJ1aWxkZXIuYnVpbGRlci5zZXREaXNwbGF5KHRoaXMuZm9ybUNvbmZpZy5kYXRhLmRpc3BsYXkpO1xuICAgIH07XG4gIH1cblxuICBzYXZlRm9ybSgpIHtcbiAgICB0aGlzLnNlcnZpY2Uuc2F2ZUZvcm0oKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuYWZ0ZXJTYXZlKCk7XG4gICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyLl9pZCA9PT0gdGhpcy5zZXJ2aWNlLmZvcm0uX2lkKSB7XG4gICAgICAgIHRoaXMub25Gb3JtQ29uZmxpY3QoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzUERGYXR0YWNoZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0gYXMgRm9ybSkuc2V0dGluZ3M/LnBkZjtcbiAgfVxuXG4gIHJlbW92ZVBERigpIHtcbiAgICBkZWxldGUgKHRoaXMuc2VydmljZS5idWlsZGVyRm9ybSBhcyBGb3JtKS5zZXR0aW5ncy5wZGY7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtID0gey4uLnRoaXMuc2VydmljZS5idWlsZGVyRm9ybX07XG4gICAgdGhpcy5idWlsZGVyLmJ1aWxkZXIuc2V0RGlzcGxheSgncGRmJyk7XG4gIH1cbn1cbiIsIjxmb3JtaW8gW2Zvcm1dPVwiY29uZmlnRm9ybSgpXCIgW3N1Ym1pc3Npb25dPVwiZm9ybUNvbmZpZ1wiIChjaGFuZ2UpPVwib25EaXNwbGF5U2VsZWN0KCRldmVudClcIiBjbGFzcz1cInctMTAwXCI+PC9mb3JtaW8+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiICpuZ0lmPVwic2VydmljZS5idWlsZGVyRm9ybS5kaXNwbGF5ID09PSAncGRmJyAmJiBpc1BERmF0dGFjaGVkKClcIj5cbiAgICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJyZW1vdmVQREYoKVwiPlJlbW92ZSBQREY8L2E+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJiZy1ib2R5IHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICAgIDxmb3JtaW8tYnVpbGRlciBbZm9ybV09XCJzZXJ2aWNlLmJ1aWxkZXJGb3JtXCIgW29wdGlvbnNdPVwic2VydmljZS5idWlsZGVyT3B0aW9uc1wiIChjaGFuZ2UpPVwic2VydmljZS5vbkNoYW5nZSgkZXZlbnQpXCIgKHJlYWR5KT1cIm9uQnVpbGRlcigkZXZlbnQpXCI+PC9mb3JtaW8tYnVpbGRlcj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG15LTNcIj5cbiAgICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYWxpZ24tc2VsZi1lbmRcIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiPlNhdmUgRm9ybTwvYT5cbjwvZGl2PlxuIl19