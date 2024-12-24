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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: i3.EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormBuildComponent, selector: "form-build", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }], ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"], dependencies: [{ kind: "component", type: i4.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i4.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-build', template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL2J1aWxkL2J1aWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9idWlsZC9idWlsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQVF0RCxNQUFNLE9BQU8sa0JBQWtCO0lBT3BCO0lBQ0E7SUFDQTtJQUNBO0lBVGlCLE9BQU8sQ0FBZ0I7SUFDMUMsVUFBVSxHQUFRLEVBQUMsSUFBSSxFQUFFO1lBQzlCLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLE1BQU07U0FDaEIsRUFBQyxDQUFBO0lBQ0YsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDckMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNoQixJQUNFLEtB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QyxDQUFDO0lBQzVELENBQUM7d0dBNUdVLGtCQUFrQjs0RkFBbEIsa0JBQWtCLDJGQUNsQixhQUFhLGdEQ2IxQiwrdUJBY007OzRGREZPLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxZQUFZO3lLQUtJLE9BQU87c0JBQWhDLFNBQVM7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNTZXJ2aWNlIH0gZnJvbSAnLi4vZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4uLy4uL2VudGVycHJpc2UtYnVpbGRlci5hbGVydHMnO1xuaW1wb3J0IHsgRm9ybWlvQnVpbGRlciB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhci9lbWJlZCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQGZvcm1pby9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1idWlsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWlsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1aWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChGb3JtaW9CdWlsZGVyKSBidWlsZGVyOiBGb3JtaW9CdWlsZGVyO1xuICBwdWJsaWMgZm9ybUNvbmZpZzogYW55ID0ge2RhdGE6IHtcbiAgICB0aXRsZTogJycsXG4gICAgZGlzcGxheTogJ2Zvcm0nXG4gIH19XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBGb3Jtc1NlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIGFsZXJ0czogRW50ZXJwcmlzZUJ1aWxkZXJBbGVydHNcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5yZXNldEZvcm0oKTtcbiAgfVxuXG4gIGNvbmZpZ0NoYW5nZShldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmNoYW5nZWQgJiYgXG4gICAgICBldmVudC5jaGFuZ2VkLmNvbXBvbmVudCAmJlxuICAgICAgZXZlbnQuY2hhbmdlZC5jb21wb25lbnQua2V5ID09PSAnZGlzcGxheSdcbiAgICApIHtcbiAgICAgIHRoaXMuYnVpbGRlci5idWlsZGVyLnNldERpc3BsYXkodGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheSk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlnRm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2x1bW5zXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiVGl0bGVcIixcbiAgICAgICAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJGb3JtIFRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBcImhpZGVMYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJhcHBseU1hc2tPblwiOiBcImNoYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVZpZXdcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGVXaGVuSGlkZGVuXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dGZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwid2lkdGhcIjogOCxcbiAgICAgICAgICAgICAgXCJvZmZzZXRcIjogMCxcbiAgICAgICAgICAgICAgXCJwdXNoXCI6IDAsXG4gICAgICAgICAgICAgIFwicHVsbFwiOiAwLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCJtZFwiLFxuICAgICAgICAgICAgICBcImN1cnJlbnRXaWR0aFwiOiA4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJEaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcIndpZGdldFwiOiBcImNob2ljZXNqc1wiLFxuICAgICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRpc3BsYXkgYXNcIixcbiAgICAgICAgICAgICAgICAgIFwidGFibGVWaWV3XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcImhpZGVMYWJlbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiV2l6YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwid2l6YXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJQREZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJwZGZcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidmFsaWRhdGVXaGVuSGlkZGVuXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJrZXlcIjogXCJkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0LFxuICAgICAgICAgICAgICBcIm9mZnNldFwiOiAwLFxuICAgICAgICAgICAgICBcInB1c2hcIjogMCxcbiAgICAgICAgICAgICAgXCJwdWxsXCI6IDAsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm1kXCIsXG4gICAgICAgICAgICAgIFwiY3VycmVudFdpZHRoXCI6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwia2V5XCI6IFwiY29sdW1uc1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcImNvbHVtbnNcIixcbiAgICAgICAgICBcImlucHV0XCI6IGZhbHNlLFxuICAgICAgICAgIFwidGFibGVWaWV3XCI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBvblNhdmUoZm9ybTogRm9ybSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4nLCBmb3JtLl9pZCwgJ3ZpZXcnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcbiAgfVxuXG4gIHNhdmVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50aXRsZSA9IHRoaXMuZm9ybUNvbmZpZy5kYXRhLnRpdGxlO1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29uZmlnLmRhdGEuZGlzcGxheTtcbiAgICB0aGlzLnNlcnZpY2Uuc2F2ZUZvcm0oKS50aGVuKChmb3JtKSA9PiB0aGlzLm9uU2F2ZShmb3JtKSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1iLTIgdGV4dC1ib2R5XCI+XG4gIDxoNSBjbGFzcz1cIm15LTIgZC1mbGV4IGdhcC0yIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPlxuICAgIDxpIGNsYXNzPVwiYmkgZnMtNSBiaS1jYXJkLWxpc3RcIj48L2k+XG4gICAgPHNwYW4+XG4gICAgICBDcmVhdGUgTmV3IEZvcm08L3NwYW4+XG4gIDwvaDU+XG48L2Rpdj5cbjxociAvPlxuPGZvcm1pbyBbZm9ybV09XCJjb25maWdGb3JtKClcIiBbc3VibWlzc2lvbl09XCJmb3JtQ29uZmlnXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwidy0xMDBcIj48L2Zvcm1pbz5cbjxkaXYgY2xhc3M9XCJiZy1ib2R5IHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICA8Zm9ybWlvLWJ1aWxkZXIgW2Zvcm1dPVwic2VydmljZS5idWlsZGVyRm9ybVwiIFtvcHRpb25zXT1cInNlcnZpY2UuYnVpbGRlck9wdGlvbnNcIiAoY2hhbmdlKT1cInNlcnZpY2Uub25DaGFuZ2UoJGV2ZW50KVwiPjwvZm9ybWlvLWJ1aWxkZXI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBteS0zXCI+XG4gIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBhbGlnbi1zZWxmLWVuZFwiIChjbGljayk9XCJzYXZlRm9ybSgpXCI+U2F2ZSBGb3JtPC9hPlxuPC9kaXY+Il19