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
export class FormBuildComponent {
    service;
    router;
    route;
    alerts;
    builder;
    formConfig = { data: {
            title: '',
            display: 'form'
        } };
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    ngOnInit() {
        this.service.resetForm();
    }
    configChange(event) {
        if (event.changed &&
            event.changed.component &&
            event.changed.component.key === 'display') {
            this.service.form.display = this.formConfig.data.display;
            this.builder.builder.options = this.service.builderOptions;
            this.builder.builder.setDisplay(this.formConfig.data.display);
        }
    }
    configForm() {
        return {
            components: [
                {
                    "columns": [
                        {
                            "components": [
                                {
                                    "label": "Title",
                                    "placeholder": "Form Title",
                                    "hideLabel": true,
                                    "applyMaskOn": "change",
                                    "tableView": true,
                                    "validateWhenHidden": false,
                                    "key": "title",
                                    "type": "textfield",
                                    "input": true
                                }
                            ],
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
    onSave(form) {
        this.router.navigate(['..', form._id, 'view'], { relativeTo: this.route });
    }
    saveForm() {
        this.service.builderForm.title = this.formConfig.data.title;
        this.service.builderForm.display = this.formConfig.data.display;
        this.service.saveForm().then((form) => this.onSave(form));
    }
    isPDFattached() {
        return this.service.builderForm.settings?.pdf;
    }
    removePDF() {
        delete this.service.builderForm.settings.pdf;
        this.service.builderForm = { ...this.service.builderForm };
        this.builder.builder.setDisplay('pdf');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormBuildComponent, selector: "form-build", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }], ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n  <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i5.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-build', template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n  <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL2J1aWxkL2J1aWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9idWlsZC9idWlsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFRdEQsTUFBTSxPQUFPLGtCQUFrQjtJQU9wQjtJQUNBO0lBQ0E7SUFDQTtJQVRpQixPQUFPLENBQWdCO0lBQzFDLFVBQVUsR0FBUSxFQUFDLElBQUksRUFBRTtZQUM5QixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxNQUFNO1NBQ2hCLEVBQUMsQ0FBQTtJQUNGLFlBQ1MsT0FBcUIsRUFDckIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQStCO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQ3JDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFDRSxL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QUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFvQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBb0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO3dHQXhIVSxrQkFBa0I7NEZBQWxCLGtCQUFrQiwyRkFDbEIsYUFBYSxnRENiMUIsaThCQWlCTTs7NEZETE8sa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLFlBQVk7eUtBS0ksT0FBTztzQkFBaEMsU0FBUzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9CdWlsZGVyIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyL2VtYmVkJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAZm9ybWlvL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWJ1aWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1aWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnVpbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQnVpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKEZvcm1pb0J1aWxkZXIpIGJ1aWxkZXI6IEZvcm1pb0J1aWxkZXI7XG4gIHB1YmxpYyBmb3JtQ29uZmlnOiBhbnkgPSB7ZGF0YToge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkaXNwbGF5OiAnZm9ybSdcbiAgfX1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0Rm9ybSgpO1xuICB9XG5cbiAgY29uZmlnQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuY2hhbmdlZCAmJiBcbiAgICAgIGV2ZW50LmNoYW5nZWQuY29tcG9uZW50ICYmXG4gICAgICBldmVudC5jaGFuZ2VkLmNvbXBvbmVudC5rZXkgPT09ICdkaXNwbGF5J1xuICAgICkge1xuICAgICAgdGhpcy5zZXJ2aWNlLmZvcm0uZGlzcGxheSA9IHRoaXMuZm9ybUNvbmZpZy5kYXRhLmRpc3BsYXk7XG4gICAgICB0aGlzLmJ1aWxkZXIuYnVpbGRlci5vcHRpb25zID0gdGhpcy5zZXJ2aWNlLmJ1aWxkZXJPcHRpb25zO1xuICAgICAgdGhpcy5idWlsZGVyLmJ1aWxkZXIuc2V0RGlzcGxheSh0aGlzLmZvcm1Db25maWcuZGF0YS5kaXNwbGF5KTtcbiAgICB9XG4gIH1cblxuICBjb25maWdGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbHVtbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJUaXRsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkZvcm0gVGl0bGVcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZUxhYmVsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImFwcGx5TWFza09uXCI6IFwiY2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgICBcInRhYmxlVmlld1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJ2YWxpZGF0ZVdoZW5IaWRkZW5cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcImtleVwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0ZmllbGRcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA4LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgIFwid2lkZ2V0XCI6IFwiY2hvaWNlc2pzXCIsXG4gICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRGlzcGxheSBhc1wiLFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVZpZXdcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwiaGlkZUxhYmVsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJXaXphcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ3aXphcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBERlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJ2YWxpZGF0ZVdoZW5IaWRkZW5cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcImtleVwiOiBcImRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndpZHRoXCI6IDQsXG4gICAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXG4gICAgICAgICAgICAgIFwicHVzaFwiOiAwLFxuICAgICAgICAgICAgICBcInB1bGxcIjogMCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwibWRcIixcbiAgICAgICAgICAgICAgXCJjdXJyZW50V2lkdGhcIjogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJrZXlcIjogXCJjb2x1bW5zXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwiaW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgXCJ0YWJsZVZpZXdcIjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIG9uU2F2ZShmb3JtOiBGb3JtKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLicsIGZvcm0uX2lkLCAndmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgc2F2ZUZvcm0oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnRpdGxlID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEudGl0bGU7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLmRpc3BsYXkgPSB0aGlzLmZvcm1Db25maWcuZGF0YS5kaXNwbGF5O1xuICAgIHRoaXMuc2VydmljZS5zYXZlRm9ybSgpLnRoZW4oKGZvcm0pID0+IHRoaXMub25TYXZlKGZvcm0pKTtcbiAgfVxuXG4gIGlzUERGYXR0YWNoZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0gYXMgRm9ybSkuc2V0dGluZ3M/LnBkZjtcbiAgfVxuXG4gIHJlbW92ZVBERigpIHtcbiAgICBkZWxldGUgKHRoaXMuc2VydmljZS5idWlsZGVyRm9ybSBhcyBGb3JtKS5zZXR0aW5ncy5wZGY7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtID0gey4uLnRoaXMuc2VydmljZS5idWlsZGVyRm9ybX07XG4gICAgdGhpcy5idWlsZGVyLmJ1aWxkZXIuc2V0RGlzcGxheSgncGRmJyk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1iLTIgdGV4dC1ib2R5XCI+XG4gIDxoNSBjbGFzcz1cIm15LTIgZC1mbGV4IGdhcC0yIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPlxuICAgIDxpIGNsYXNzPVwiYmkgZnMtNSBiaS1jYXJkLWxpc3RcIj48L2k+XG4gICAgPHNwYW4+XG4gICAgICBDcmVhdGUgTmV3IEZvcm08L3NwYW4+XG4gIDwvaDU+XG48L2Rpdj5cbjxociAvPlxuPGZvcm1pbyBbZm9ybV09XCJjb25maWdGb3JtKClcIiBbc3VibWlzc2lvbl09XCJmb3JtQ29uZmlnXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwidy0xMDBcIj48L2Zvcm1pbz5cbjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBteS0zXCIgKm5nSWY9XCJzZXJ2aWNlLmJ1aWxkZXJGb3JtLmRpc3BsYXkgPT09ICdwZGYnICYmIGlzUERGYXR0YWNoZWQoKVwiPlxuICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJyZW1vdmVQREYoKVwiPlJlbW92ZSBQREY8L2E+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJiZy1ib2R5IHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICA8Zm9ybWlvLWJ1aWxkZXIgW2Zvcm1dPVwic2VydmljZS5idWlsZGVyRm9ybVwiIFtvcHRpb25zXT1cInNlcnZpY2UuYnVpbGRlck9wdGlvbnNcIiAoY2hhbmdlKT1cInNlcnZpY2Uub25DaGFuZ2UoJGV2ZW50KVwiPjwvZm9ybWlvLWJ1aWxkZXI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBteS0zXCI+XG4gIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBhbGlnbi1zZWxmLWVuZFwiIChjbGljayk9XCJzYXZlRm9ybSgpXCI+U2F2ZSBGb3JtPC9hPlxuPC9kaXY+Il19