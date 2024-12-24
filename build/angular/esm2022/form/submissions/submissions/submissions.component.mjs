import { Component } from '@angular/core';
import { FormsService } from '../../forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '@formio/js/utils';
import * as i0 from "@angular/core";
import * as i1 from "../../forms.service";
import * as i2 from "@angular/router";
import * as i3 from "@formio/angular/embed";
export class FormSubmissionsComponent {
    service;
    router;
    route;
    submissionForm;
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        const submissionFields = [];
        this.service.resetSubmission();
        Utils.eachComponent(Utils.fastCloneDeep(this.service.form.components), function (component, path) {
            if (path.indexOf('.') === -1 && component.input && component.tableView) {
                component.key = 'data.' + component.key;
                submissionFields.push(component);
            }
        }, false);
        this.submissionForm = {
            components: [
                {
                    fetch: {
                        sort: {
                            defaultQuery: "created",
                            descending: true
                        },
                        url: this.service.submissionUrl(),
                        authenticate: true,
                        enableFetch: true
                    },
                    components: submissionFields,
                    type: "datatable",
                    key: "submissionDataTab",
                    label: "Submission Data Tab",
                    itemsPerPage: 25,
                    filterable: true,
                    sortable: true,
                    hideLabel: true,
                    enableRowSelect: false
                }
            ]
        };
    }
    onFormio(formio) {
        formio.on('rowClick', (row) => {
            this.router.navigate([row._id], { relativeTo: this.route });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionsComponent, deps: [{ token: i1.FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionsComponent, selector: "form-submissions", ngImport: i0, template: "<div class=\"p-3\">\n    <formio [form]=\"submissionForm\" (ready)=\"onFormio($event)\"></formio>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: i3.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submissions', template: "<div class=\"p-3\">\n    <formio [form]=\"submissionForm\" (ready)=\"onFormio($event)\"></formio>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWlzc2lvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL3N1Ym1pc3Npb25zL3N1Ym1pc3Npb25zL3N1Ym1pc3Npb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9zdWJtaXNzaW9ucy9zdWJtaXNzaW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFPekMsTUFBTSxPQUFPLHdCQUF3QjtJQUcxQjtJQUNBO0lBQ0E7SUFKRixjQUFjLENBQU07SUFDM0IsWUFDUyxPQUFxQixFQUNyQixNQUFjLEVBQ2QsS0FBcUI7UUFGckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDM0IsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLGdCQUFnQixHQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFTLFNBQWMsRUFBRSxJQUFZO1lBQzFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkUsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDeEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDSCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ3BCLFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxLQUFLLEVBQUc7d0JBQ04sSUFBSSxFQUFFOzRCQUNKLFlBQVksRUFBRSxTQUFTOzRCQUN2QixVQUFVLEVBQUUsSUFBSTt5QkFDakI7d0JBQ0QsR0FBRyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO3dCQUNsQyxZQUFZLEVBQUcsSUFBSTt3QkFDbkIsV0FBVyxFQUFHLElBQUk7cUJBQ25CO29CQUNELFVBQVUsRUFBRyxnQkFBZ0I7b0JBQzdCLElBQUksRUFBRyxXQUFXO29CQUNsQixHQUFHLEVBQUcsbUJBQW1CO29CQUN6QixLQUFLLEVBQUUscUJBQXFCO29CQUM1QixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsVUFBVSxFQUFHLElBQUk7b0JBQ2pCLFFBQVEsRUFBRyxJQUFJO29CQUNmLFNBQVMsRUFBRSxJQUFJO29CQUNmLGVBQWUsRUFBRSxLQUFLO2lCQUN2QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt3R0EvQ1Usd0JBQXdCOzRGQUF4Qix3QkFBd0Isd0RDVnJDLDZHQUdBOzs0RkRPYSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0Usa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zU2VydmljZSB9IGZyb20gJy4uLy4uL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJ0Bmb3JtaW8vanMvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXN1Ym1pc3Npb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Ym1pc3Npb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VibWlzc2lvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU3VibWlzc2lvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc3VibWlzc2lvbkZvcm06IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEZvcm1zU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHN1Ym1pc3Npb25GaWVsZHM6IGFueVtdID0gW107XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0U3VibWlzc2lvbigpO1xuICAgIFV0aWxzLmVhY2hDb21wb25lbnQoVXRpbHMuZmFzdENsb25lRGVlcCh0aGlzLnNlcnZpY2UuZm9ybS5jb21wb25lbnRzKSwgZnVuY3Rpb24oY29tcG9uZW50OiBhbnksIHBhdGg6IHN0cmluZykge1xuICAgICAgaWYgKHBhdGguaW5kZXhPZignLicpID09PSAtMSAmJiBjb21wb25lbnQuaW5wdXQgJiYgY29tcG9uZW50LnRhYmxlVmlldykge1xuICAgICAgICBjb21wb25lbnQua2V5ID0gJ2RhdGEuJyArIGNvbXBvbmVudC5rZXk7XG4gICAgICAgIHN1Ym1pc3Npb25GaWVsZHMucHVzaChjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgICB0aGlzLnN1Ym1pc3Npb25Gb3JtID0ge1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgZmV0Y2ggOiB7XG4gICAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICAgIGRlZmF1bHRRdWVyeTogXCJjcmVhdGVkXCIsXG4gICAgICAgICAgICAgIGRlc2NlbmRpbmc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmwgOiB0aGlzLnNlcnZpY2Uuc3VibWlzc2lvblVybCgpLFxuICAgICAgICAgICAgYXV0aGVudGljYXRlIDogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZUZldGNoIDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcG9uZW50cyA6IHN1Ym1pc3Npb25GaWVsZHMsXG4gICAgICAgICAgdHlwZSA6IFwiZGF0YXRhYmxlXCIsXG4gICAgICAgICAga2V5IDogXCJzdWJtaXNzaW9uRGF0YVRhYlwiLFxuICAgICAgICAgIGxhYmVsOiBcIlN1Ym1pc3Npb24gRGF0YSBUYWJcIixcbiAgICAgICAgICBpdGVtc1BlclBhZ2U6IDI1LFxuICAgICAgICAgIGZpbHRlcmFibGUgOiB0cnVlLFxuICAgICAgICAgIHNvcnRhYmxlIDogdHJ1ZSxcbiAgICAgICAgICBoaWRlTGFiZWw6IHRydWUsXG4gICAgICAgICAgZW5hYmxlUm93U2VsZWN0OiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIG9uRm9ybWlvKGZvcm1pbzogYW55KSB7XG4gICAgZm9ybWlvLm9uKCdyb3dDbGljaycsIChyb3c6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3Jvdy5faWRdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicC0zXCI+XG4gICAgPGZvcm1pbyBbZm9ybV09XCJzdWJtaXNzaW9uRm9ybVwiIChyZWFkeSk9XCJvbkZvcm1pbygkZXZlbnQpXCI+PC9mb3JtaW8+XG48L2Rpdj5cbiJdfQ==