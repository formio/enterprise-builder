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
        this.service.initializeFormModule();
    }
    configChange(event) {
        if (event.changed &&
            event.changed.component &&
            event.changed.component.key === 'display') {
            this.service.form.display = this.formConfig.data.display;
            const builderOptions = this.service.initializeFormModule();
            this.builder.builder.options = {
                ...this.service.builderOptions,
                builder: builderOptions ?? this.service.builderOptions.builder,
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL2J1aWxkL2J1aWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9idWlsZC9idWlsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFRdEQsTUFBTSxPQUFPLGtCQUFrQjtJQU9wQjtJQUNBO0lBQ0E7SUFDQTtJQVRpQixPQUFPLENBQWdCO0lBQzFDLFVBQVUsR0FBUSxFQUFDLElBQUksRUFBRTtZQUM5QixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxNQUFNO1NBQ2hCLEVBQUMsQ0FBQTtJQUNGLFlBQ1MsT0FBcUIsRUFDckIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLE1BQStCO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQXlCO0lBQ3JDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7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QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFvQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBb0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO3dHQTdIVSxrQkFBa0I7NEZBQWxCLGtCQUFrQiwyRkFDbEIsYUFBYSxnRENiMUIsaThCQWlCTTs7NEZETE8sa0JBQWtCO2tCQUw5QixTQUFTOytCQUNFLFlBQVk7eUtBS0ksT0FBTztzQkFBaEMsU0FBUzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9CdWlsZGVyIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyL2VtYmVkJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAZm9ybWlvL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWJ1aWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1aWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnVpbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQnVpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKEZvcm1pb0J1aWxkZXIpIGJ1aWxkZXI6IEZvcm1pb0J1aWxkZXI7XG4gIHB1YmxpYyBmb3JtQ29uZmlnOiBhbnkgPSB7ZGF0YToge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkaXNwbGF5OiAnZm9ybSdcbiAgfX1cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0c1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0Rm9ybSgpO1xuICAgIHRoaXMuc2VydmljZS5pbml0aWFsaXplRm9ybU1vZHVsZSgpO1xuICB9XG5cbiAgY29uZmlnQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuY2hhbmdlZCAmJlxuICAgICAgZXZlbnQuY2hhbmdlZC5jb21wb25lbnQgJiZcbiAgICAgIGV2ZW50LmNoYW5nZWQuY29tcG9uZW50LmtleSA9PT0gJ2Rpc3BsYXknXG4gICAgKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuZm9ybS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheTtcbiAgICAgIGNvbnN0IGJ1aWxkZXJPcHRpb25zID0gdGhpcy5zZXJ2aWNlLmluaXRpYWxpemVGb3JtTW9kdWxlKCk7XG4gICAgICB0aGlzLmJ1aWxkZXIuYnVpbGRlci5vcHRpb25zID0ge1xuICAgICAgICAuLi50aGlzLnNlcnZpY2UuYnVpbGRlck9wdGlvbnMsXG4gICAgICAgIGJ1aWxkZXI6IGJ1aWxkZXJPcHRpb25zID8/IHRoaXMuc2VydmljZS5idWlsZGVyT3B0aW9ucy5idWlsZGVyLFxuICAgICAgfTtcbiAgICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLnNldERpc3BsYXkodGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheSk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlnRm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2x1bW5zXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVGl0bGVcIixcbiAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJGb3JtIFRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBcImhpZGVMYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJhcHBseU1hc2tPblwiOiBcImNoYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVZpZXdcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGVXaGVuSGlkZGVuXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dGZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwid2lkdGhcIjogOCxcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcbiAgICAgICAgICAgICAgXCJwdXNoXCI6IDAsXG4gICAgICAgICAgICAgIFwicHVsbFwiOiAwLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCJtZFwiLFxuICAgICAgICAgICAgICBcImN1cnJlbnRXaWR0aFwiOiA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcIndpZGdldFwiOiBcImNob2ljZXNqc1wiLFxuICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRpc3BsYXkgYXNcIixcbiAgICAgICAgICAgICAgICAgIFwidGFibGVWaWV3XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImhpZGVMYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiV2l6YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwid2l6YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQREZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJwZGZcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGVXaGVuSGlkZGVuXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwia2V5XCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImNvbHVtbnNcIixcbiAgICAgICAgICBcImlucHV0XCI6IGZhbHNlLFxuICAgICAgICAgIFwidGFibGVWaWV3XCI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBvblNhdmUoZm9ybTogRm9ybSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4nLCBmb3JtLl9pZCwgJ3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIHNhdmVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50aXRsZSA9IHRoaXMuZm9ybUNvbmZpZy5kYXRhLnRpdGxlO1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheTtcbiAgICB0aGlzLnNlcnZpY2Uuc2F2ZUZvcm0oKS50aGVuKChmb3JtKSA9PiB0aGlzLm9uU2F2ZShmb3JtKSk7XG4gIH1cblxuICBpc1BERmF0dGFjaGVkKCkge1xuICAgIHJldHVybiAodGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtIGFzIEZvcm0pLnNldHRpbmdzPy5wZGY7XG4gIH1cblxuICByZW1vdmVQREYoKSB7XG4gICAgZGVsZXRlICh0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0gYXMgRm9ybSkuc2V0dGluZ3MucGRmO1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybSA9IHsuLi50aGlzLnNlcnZpY2UuYnVpbGRlckZvcm19O1xuICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLnNldERpc3BsYXkoJ3BkZicpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yIHRleHQtYm9keVwiPlxuICA8aDUgY2xhc3M9XCJteS0yIGQtZmxleCBnYXAtMiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5cbiAgICA8aSBjbGFzcz1cImJpIGZzLTUgYmktY2FyZC1saXN0XCI+PC9pPlxuICAgIDxzcGFuPlxuICAgICAgQ3JlYXRlIE5ldyBGb3JtPC9zcGFuPlxuICA8L2g1PlxuPC9kaXY+XG48aHIgLz5cbjxmb3JtaW8gW2Zvcm1dPVwiY29uZmlnRm9ybSgpXCIgW3N1Ym1pc3Npb25dPVwiZm9ybUNvbmZpZ1wiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cInctMTAwXCI+PC9mb3JtaW8+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiICpuZ0lmPVwic2VydmljZS5idWlsZGVyRm9ybS5kaXNwbGF5ID09PSAncGRmJyAmJiBpc1BERmF0dGFjaGVkKClcIj5cbiAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwicmVtb3ZlUERGKClcIj5SZW1vdmUgUERGPC9hPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYmctYm9keSByb3VuZGVkIHNoYWRvdy1zbSBwLTJcIj5cbiAgPGZvcm1pby1idWlsZGVyIFtmb3JtXT1cInNlcnZpY2UuYnVpbGRlckZvcm1cIiBbb3B0aW9uc109XCJzZXJ2aWNlLmJ1aWxkZXJPcHRpb25zXCIgKGNoYW5nZSk9XCJzZXJ2aWNlLm9uQ2hhbmdlKCRldmVudClcIj48L2Zvcm1pby1idWlsZGVyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiPlxuICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYWxpZ24tc2VsZi1lbmRcIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiPlNhdmUgRm9ybTwvYT5cbjwvZGl2PiJdfQ==