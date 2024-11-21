import { Component } from '@angular/core';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
import * as i1 from "@formio/angular/embed";
import * as i2 from "@angular/router";
export class FormSettingsComponent extends FormEditComponent {
    settings = {};
    ngOnInit() {
        this.settings = { data: {
                title: this.service.builderForm.title,
                name: this.service.builderForm.name,
                path: this.service.builderForm.path,
                tags: this.service.builderForm.tags
            } };
    }
    get settingsForm() {
        return {
            components: [
                {
                    type: 'textfield',
                    key: 'title',
                    label: 'Title',
                    validation: {
                        required: true
                    },
                    input: true
                },
                {
                    type: 'textfield',
                    key: 'name',
                    label: 'Name',
                    validation: {
                        required: true
                    },
                    input: true
                },
                {
                    type: 'textfield',
                    key: 'path',
                    label: 'API Path',
                    validation: {
                        required: true
                    },
                    input: true
                },
                {
                    type: 'tags',
                    key: 'tags',
                    label: 'Tags',
                    input: true
                }
            ]
        };
    }
    saveForm() {
        this.service.builderForm.title = this.settings.data.title;
        this.service.builderForm.name = this.settings.data.name;
        this.service.builderForm.path = this.settings.data.path;
        if (this.settings.data.tags) {
            this.service.builderForm.tags = this.settings.data.tags.split(',').map((tag) => tag.trim());
        }
        return super.saveForm();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormSettingsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.3", type: FormSettingsComponent, selector: "form-settings", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n    <div class=\"col col-8\">\n        <h4>Form Settings</h4>\n        <div class=\"bg-body rounded shadow-sm p-2\">\n            <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n        </div>\n    </div>\n    <div class=\"col col-4\">\n        <h4>Danger Zone</h4>\n        <div class=\"bg-body border border-danger rounded shadow-sm p-2\">\n            <a class=\"btn btn-danger\" routerLink=\"../delete\">Delete Form</a>\n        </div>\n    </div>\n</div>\n<div class=\"d-flex my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", dependencies: [{ kind: "component", type: i1.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormSettingsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-settings', template: "<div class=\"row\">\n    <div class=\"col col-8\">\n        <h4>Form Settings</h4>\n        <div class=\"bg-body rounded shadow-sm p-2\">\n            <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n        </div>\n    </div>\n    <div class=\"col col-4\">\n        <h4>Danger Zone</h4>\n        <div class=\"bg-body border border-danger rounded shadow-sm p-2\">\n            <a class=\"btn btn-danger\" routerLink=\"../delete\">Delete Form</a>\n        </div>\n    </div>\n</div>\n<div class=\"d-flex my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBTTNELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFDbkQsUUFBUSxHQUFRLEVBQUUsQ0FBQztJQUMxQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLElBQUksRUFBRTtnQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUs7Z0JBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJO2dCQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUk7YUFDcEMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLEdBQUcsRUFBRSxPQUFPO29CQUNaLEtBQUssRUFBRSxPQUFPO29CQUNkLFVBQVUsRUFBRTt3QkFDVixRQUFRLEVBQUUsSUFBSTtxQkFDZjtvQkFDRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsR0FBRyxFQUFFLE1BQU07b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixHQUFHLEVBQUUsTUFBTTtvQkFDWCxLQUFLLEVBQUUsVUFBVTtvQkFDakIsVUFBVSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLEdBQUcsRUFBRSxNQUFNO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdEcsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7dUdBekRVLHFCQUFxQjsyRkFBckIscUJBQXFCLDRFQ1BsQyxrb0JBZ0JNOzsyRkRUTyxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtRWRpdENvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBGb3JtRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBzZXR0aW5nczogYW55ID0ge307XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7ZGF0YToge1xuICAgICAgdGl0bGU6IHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50aXRsZSxcbiAgICAgIG5hbWU6IHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5uYW1lLFxuICAgICAgcGF0aDogdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnBhdGgsXG4gICAgICB0YWdzOiB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0udGFnc1xuICAgIH19O1xuICB9XG4gIGdldCBzZXR0aW5nc0Zvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxuICAgICAgICAgIGtleTogJ3RpdGxlJyxcbiAgICAgICAgICBsYWJlbDogJ1RpdGxlJyxcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxuICAgICAgICAgIGtleTogJ25hbWUnLFxuICAgICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcbiAgICAgICAgICBrZXk6ICdwYXRoJyxcbiAgICAgICAgICBsYWJlbDogJ0FQSSBQYXRoJyxcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0YWdzJyxcbiAgICAgICAgICBrZXk6ICd0YWdzJyxcbiAgICAgICAgICBsYWJlbDogJ1RhZ3MnLFxuICAgICAgICAgIGlucHV0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHNhdmVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50aXRsZSA9IHRoaXMuc2V0dGluZ3MuZGF0YS50aXRsZTtcbiAgICB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0ubmFtZSA9IHRoaXMuc2V0dGluZ3MuZGF0YS5uYW1lO1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5wYXRoID0gdGhpcy5zZXR0aW5ncy5kYXRhLnBhdGg7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZGF0YS50YWdzKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0udGFncyA9IHRoaXMuc2V0dGluZ3MuZGF0YS50YWdzLnNwbGl0KCcsJykubWFwKCh0YWc6IHN0cmluZykgPT4gdGFnLnRyaW0oKSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5zYXZlRm9ybSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtOFwiPlxuICAgICAgICA8aDQ+Rm9ybSBTZXR0aW5nczwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ib2R5IHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICAgICAgICAgICAgPGZvcm1pbyBbZm9ybV09XCJzZXR0aW5nc0Zvcm1cIiBbc3VibWlzc2lvbl09XCJzZXR0aW5nc1wiPjwvZm9ybWlvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC00XCI+XG4gICAgICAgIDxoND5EYW5nZXIgWm9uZTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ib2R5IGJvcmRlciBib3JkZXItZGFuZ2VyIHJvdW5kZWQgc2hhZG93LXNtIHAtMlwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHJvdXRlckxpbms9XCIuLi9kZWxldGVcIj5EZWxldGUgRm9ybTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkLWZsZXggbXktM1wiPlxuICAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBhbGlnbi1zZWxmLWVuZFwiIChjbGljayk9XCJzYXZlRm9ybSgpXCI+U2F2ZSBGb3JtPC9hPlxuPC9kaXY+Il19