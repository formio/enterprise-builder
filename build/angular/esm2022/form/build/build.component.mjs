import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { get } from 'lodash';
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
    modalElement;
    modalInstance;
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
    ngAfterViewInit() {
        if (this.modalElement) {
            this.modalInstance = new Modal(this.modalElement.nativeElement);
        }
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
    canClearFields() {
        const builderForm = this.service.builderForm;
        return (builderForm.display === 'pdf'
            && get(builderForm, 'settings.pdf.nonFillableConversionUsed', false));
    }
    clearFields() {
        this.service.builderForm.components = [];
        this.builder.builder.instance.setForm(this.service.builderForm);
        this.modalInstance?.hide();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormBuildComponent, selector: "form-build", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }, { propertyName: "modalElement", first: true, predicate: ["warningModal"], descendants: true }], ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n  <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" *ngIf=\"canClearFields()\" class=\"btn btn-outline-secondary me-2\" (click)=\"modalInstance?.show()\" title=\"The fields were recognized automatically. Click here to clear them\"><span class=\"bi bi-eraser\"></span> Clear Fields</a>\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" #warningModal tabindex=\"-1\" aria-labelledby=\"warningModalLabel\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header border-0\">\n        <h5 class=\"modal-title\" id=\"warningModalLabel\">Warning</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        You are going to clear all form fields. Are you sure you want to continue?\n      </div>\n      <div class=\"modal-footer border-0\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFields()\">Clear Fields</button>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i5.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-build', template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n  <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" *ngIf=\"canClearFields()\" class=\"btn btn-outline-secondary me-2\" (click)=\"modalInstance?.show()\" title=\"The fields were recognized automatically. Click here to clear them\"><span class=\"bi bi-eraser\"></span> Clear Fields</a>\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" #warningModal tabindex=\"-1\" aria-labelledby=\"warningModalLabel\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header border-0\">\n        <h5 class=\"modal-title\" id=\"warningModalLabel\">Warning</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        You are going to clear all form fields. Are you sure you want to continue?\n      </div>\n      <div class=\"modal-footer border-0\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFields()\">Clear Fields</button>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }], modalElement: [{
                type: ViewChild,
                args: ['warningModal']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL2J1aWxkL2J1aWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9idWlsZC9idWlsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFRdEQsTUFBTSxPQUFPLGtCQUFrQjtJQVVwQjtJQUNBO0lBQ0E7SUFDQTtJQVppQixPQUFPLENBQWdCO0lBQ3RCLFlBQVksQ0FBYTtJQUM1QyxhQUFhLENBQVE7SUFDdEIsVUFBVSxHQUFRLEVBQUMsSUFBSSxFQUFFO1lBQzlCLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLE1BQU07U0FDaEIsRUFBQyxDQUFBO0lBRUYsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIs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QVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxLQUFLLEtBQUs7ZUFDaEMsR0FBRyxDQUFDLFdBQVcsRUFBRSx3Q0FBd0MsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO3dHQWxKVSxrQkFBa0I7NEZBQWxCLGtCQUFrQiwyRkFDbEIsYUFBYSwrSUNmMUIscWhFQXFDTTs7NEZEdkJPLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxZQUFZO3lLQUtJLE9BQU87c0JBQWhDLFNBQVM7dUJBQUMsYUFBYTtnQkFDRyxZQUFZO3NCQUF0QyxTQUFTO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYm9vdHN0cmFwJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9CdWlsZGVyIH0gZnJvbSAnQGZvcm1pby9hbmd1bGFyL2VtYmVkJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAZm9ybWlvL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWJ1aWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1aWxkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnVpbGQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQnVpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKEZvcm1pb0J1aWxkZXIpIGJ1aWxkZXI6IEZvcm1pb0J1aWxkZXI7XG4gIEBWaWV3Q2hpbGQoJ3dhcm5pbmdNb2RhbCcpIG1vZGFsRWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBtb2RhbEluc3RhbmNlOiBNb2RhbDtcbiAgcHVibGljIGZvcm1Db25maWc6IGFueSA9IHtkYXRhOiB7XG4gICAgdGl0bGU6ICcnLFxuICAgIGRpc3BsYXk6ICdmb3JtJ1xuICB9fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3Jtc1NlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGFsZXJ0czogRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHNcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZXNldEZvcm0oKTtcbiAgICB0aGlzLnNlcnZpY2UuaW5pdGlhbGl6ZUZvcm1Nb2R1bGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubW9kYWxJbnN0YW5jZSA9IG5ldyBNb2RhbCh0aGlzLm1vZGFsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBjb25maWdDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5jaGFuZ2VkICYmXG4gICAgICBldmVudC5jaGFuZ2VkLmNvbXBvbmVudCAmJlxuICAgICAgZXZlbnQuY2hhbmdlZC5jb21wb25lbnQua2V5ID09PSAnZGlzcGxheSdcbiAgICApIHtcbiAgICAgIHRoaXMuc2VydmljZS5mb3JtLmRpc3BsYXkgPSB0aGlzLmZvcm1Db25maWcuZGF0YS5kaXNwbGF5O1xuICAgICAgY29uc3QgYnVpbGRlck9wdGlvbnMgPSB0aGlzLnNlcnZpY2UuaW5pdGlhbGl6ZUZvcm1Nb2R1bGUoKTtcbiAgICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLm9wdGlvbnMgPSB7XG4gICAgICAgIC4uLnRoaXMuc2VydmljZS5idWlsZGVyT3B0aW9ucyxcbiAgICAgICAgYnVpbGRlcjogYnVpbGRlck9wdGlvbnMgPz8gdGhpcy5zZXJ2aWNlLmJ1aWxkZXJPcHRpb25zLmJ1aWxkZXIsXG4gICAgICB9O1xuICAgICAgdGhpcy5idWlsZGVyLmJ1aWxkZXIuc2V0RGlzcGxheSh0aGlzLmZvcm1Db25maWcuZGF0YS5kaXNwbGF5KTtcbiAgICB9XG4gIH1cblxuICBjb25maWdGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbHVtbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJUaXRsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkZvcm0gVGl0bGVcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZUxhYmVsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImFwcGx5TWFza09uXCI6IFwiY2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgICBcInRhYmxlVmlld1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJ2YWxpZGF0ZVdoZW5IaWRkZW5cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcImtleVwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0ZmllbGRcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA4LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgIFwid2lkZ2V0XCI6IFwiY2hvaWNlc2pzXCIsXG4gICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRGlzcGxheSBhc1wiLFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVZpZXdcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwiaGlkZUxhYmVsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJXaXphcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ3aXphcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBERlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcInBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJ2YWxpZGF0ZVdoZW5IaWRkZW5cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcImtleVwiOiBcImRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndpZHRoXCI6IDQsXG4gICAgICAgICAgICAgIFwib2Zmc2V0XCI6IDAsXG4gICAgICAgICAgICAgIFwicHVzaFwiOiAwLFxuICAgICAgICAgICAgICBcInB1bGxcIjogMCxcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwibWRcIixcbiAgICAgICAgICAgICAgXCJjdXJyZW50V2lkdGhcIjogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJrZXlcIjogXCJjb2x1bW5zXCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwiaW5wdXRcIjogZmFsc2UsXG4gICAgICAgICAgXCJ0YWJsZVZpZXdcIjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIG9uU2F2ZShmb3JtOiBGb3JtKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLicsIGZvcm0uX2lkLCAndmlldyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICB9XG5cbiAgc2F2ZUZvcm0oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnRpdGxlID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEudGl0bGU7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLmRpc3BsYXkgPSB0aGlzLmZvcm1Db25maWcuZGF0YS5kaXNwbGF5O1xuICAgIHRoaXMuc2VydmljZS5zYXZlRm9ybSgpLnRoZW4oKGZvcm0pID0+IHRoaXMub25TYXZlKGZvcm0pKTtcbiAgfVxuXG4gIGlzUERGYXR0YWNoZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0gYXMgRm9ybSkuc2V0dGluZ3M/LnBkZjtcbiAgfVxuXG4gIHJlbW92ZVBERigpIHtcbiAgICBkZWxldGUgKHRoaXMuc2VydmljZS5idWlsZGVyRm9ybSBhcyBGb3JtKS5zZXR0aW5ncy5wZGY7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtID0gey4uLnRoaXMuc2VydmljZS5idWlsZGVyRm9ybX07XG4gICAgdGhpcy5idWlsZGVyLmJ1aWxkZXIuc2V0RGlzcGxheSgncGRmJyk7XG4gIH1cblxuICBjYW5DbGVhckZpZWxkcygpIHtcbiAgICBjb25zdCBidWlsZGVyRm9ybSA9IHRoaXMuc2VydmljZS5idWlsZGVyRm9ybTtcbiAgICByZXR1cm4gKGJ1aWxkZXJGb3JtLmRpc3BsYXkgPT09ICdwZGYnXG4gICAgICAmJiBnZXQoYnVpbGRlckZvcm0sICdzZXR0aW5ncy5wZGYubm9uRmlsbGFibGVDb252ZXJzaW9uVXNlZCcsIGZhbHNlKSlcbiAgfVxuXG4gIGNsZWFyRmllbGRzKCkge1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5jb21wb25lbnRzID0gW107XG4gICAgdGhpcy5idWlsZGVyLmJ1aWxkZXIuaW5zdGFuY2Uuc2V0Rm9ybSh0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0pO1xuICAgIHRoaXMubW9kYWxJbnN0YW5jZT8uaGlkZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yIHRleHQtYm9keVwiPlxuICA8aDUgY2xhc3M9XCJteS0yIGQtZmxleCBnYXAtMiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5cbiAgICA8aSBjbGFzcz1cImJpIGZzLTUgYmktY2FyZC1saXN0XCI+PC9pPlxuICAgIDxzcGFuPlxuICAgICAgQ3JlYXRlIE5ldyBGb3JtPC9zcGFuPlxuICA8L2g1PlxuPC9kaXY+XG48aHIgLz5cbjxmb3JtaW8gW2Zvcm1dPVwiY29uZmlnRm9ybSgpXCIgW3N1Ym1pc3Npb25dPVwiZm9ybUNvbmZpZ1wiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlKCRldmVudClcIiBjbGFzcz1cInctMTAwXCI+PC9mb3JtaW8+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiICpuZ0lmPVwic2VydmljZS5idWlsZGVyRm9ybS5kaXNwbGF5ID09PSAncGRmJyAmJiBpc1BERmF0dGFjaGVkKClcIj5cbiAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwicmVtb3ZlUERGKClcIj5SZW1vdmUgUERGPC9hPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYmctYm9keSByb3VuZGVkIHNoYWRvdy1zbSBwLTJcIj5cbiAgPGZvcm1pby1idWlsZGVyIFtmb3JtXT1cInNlcnZpY2UuYnVpbGRlckZvcm1cIiBbb3B0aW9uc109XCJzZXJ2aWNlLmJ1aWxkZXJPcHRpb25zXCIgKGNoYW5nZSk9XCJzZXJ2aWNlLm9uQ2hhbmdlKCRldmVudClcIj48L2Zvcm1pby1idWlsZGVyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXktM1wiPlxuICA8YSB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJjYW5DbGVhckZpZWxkcygpXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG1lLTJcIiAoY2xpY2spPVwibW9kYWxJbnN0YW5jZT8uc2hvdygpXCIgdGl0bGU9XCJUaGUgZmllbGRzIHdlcmUgcmVjb2duaXplZCBhdXRvbWF0aWNhbGx5LiBDbGljayBoZXJlIHRvIGNsZWFyIHRoZW1cIj48c3BhbiBjbGFzcz1cImJpIGJpLWVyYXNlclwiPjwvc3Bhbj4gQ2xlYXIgRmllbGRzPC9hPlxuICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYWxpZ24tc2VsZi1lbmRcIiAoY2xpY2spPVwic2F2ZUZvcm0oKVwiPlNhdmUgRm9ybTwvYT5cbjwvZGl2PlxuXG48IS0tIE1vZGFsIC0tPlxuPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiAjd2FybmluZ01vZGFsIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJ3YXJuaW5nTW9kYWxMYWJlbFwiPlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIgYm9yZGVyLTBcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cIndhcm5pbmdNb2RhbExhYmVsXCI+V2FybmluZzwvaDU+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgWW91IGFyZSBnb2luZyB0byBjbGVhciBhbGwgZm9ybSBmaWVsZHMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjb250aW51ZT9cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlciBib3JkZXItMFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJjbGVhckZpZWxkcygpXCI+Q2xlYXIgRmllbGRzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=