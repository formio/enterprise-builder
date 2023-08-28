import { Component } from '@angular/core';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
import * as i1 from "@formio/angular/embed";
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.3", type: FormSettingsComponent, selector: "form-settings", usesInheritance: true, ngImport: i0, template: "<h4>Form Settings</h4>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", dependencies: [{ kind: "component", type: i1.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormSettingsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-settings', template: "<h4>Form Settings</h4>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNM0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjtJQUNuRCxRQUFRLEdBQVEsRUFBRSxDQUFDO0lBQzFCLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsSUFBSSxFQUFFO2dCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSztnQkFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJO2dCQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSTthQUNwQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTztZQUNMLFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsR0FBRyxFQUFFLE9BQU87b0JBQ1osS0FBSyxFQUFFLE9BQU87b0JBQ2QsVUFBVSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixHQUFHLEVBQUUsTUFBTTtvQkFDWCxLQUFLLEVBQUUsTUFBTTtvQkFDYixVQUFVLEVBQUU7d0JBQ1YsUUFBUSxFQUFFLElBQUk7cUJBQ2Y7b0JBQ0QsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLEdBQUcsRUFBRSxNQUFNO29CQUNYLEtBQUssRUFBRSxVQUFVO29CQUNqQixVQUFVLEVBQUU7d0JBQ1YsUUFBUSxFQUFFLElBQUk7cUJBQ2Y7b0JBQ0QsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osR0FBRyxFQUFFLE1BQU07b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RyxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzt1R0F6RFUscUJBQXFCOzJGQUFyQixxQkFBcUIsNEVDUGxDLHVUQU1NOzsyRkRDTyxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtRWRpdENvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBGb3JtRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBzZXR0aW5nczogYW55ID0ge307XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7ZGF0YToge1xuICAgICAgdGl0bGU6IHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50aXRsZSxcbiAgICAgIG5hbWU6IHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5uYW1lLFxuICAgICAgcGF0aDogdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnBhdGgsXG4gICAgICB0YWdzOiB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0udGFnc1xuICAgIH19O1xuICB9XG4gIGdldCBzZXR0aW5nc0Zvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxuICAgICAgICAgIGtleTogJ3RpdGxlJyxcbiAgICAgICAgICBsYWJlbDogJ1RpdGxlJyxcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxuICAgICAgICAgIGtleTogJ25hbWUnLFxuICAgICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dGZpZWxkJyxcbiAgICAgICAgICBrZXk6ICdwYXRoJyxcbiAgICAgICAgICBsYWJlbDogJ0FQSSBQYXRoJyxcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0YWdzJyxcbiAgICAgICAgICBrZXk6ICd0YWdzJyxcbiAgICAgICAgICBsYWJlbDogJ1RhZ3MnLFxuICAgICAgICAgIGlucHV0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHNhdmVGb3JtKCkge1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50aXRsZSA9IHRoaXMuc2V0dGluZ3MuZGF0YS50aXRsZTtcbiAgICB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0ubmFtZSA9IHRoaXMuc2V0dGluZ3MuZGF0YS5uYW1lO1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5wYXRoID0gdGhpcy5zZXR0aW5ncy5kYXRhLnBhdGg7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZGF0YS50YWdzKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0udGFncyA9IHRoaXMuc2V0dGluZ3MuZGF0YS50YWdzLnNwbGl0KCcsJykubWFwKCh0YWc6IHN0cmluZykgPT4gdGFnLnRyaW0oKSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5zYXZlRm9ybSgpO1xuICB9XG59XG4iLCI8aDQ+Rm9ybSBTZXR0aW5nczwvaDQ+XG48ZGl2IGNsYXNzPVwiYmctYm9keSByb3VuZGVkIHNoYWRvdy1zbSBwLTJcIj5cbiAgICA8Zm9ybWlvIFtmb3JtXT1cInNldHRpbmdzRm9ybVwiIFtzdWJtaXNzaW9uXT1cInNldHRpbmdzXCI+PC9mb3JtaW8+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBteS0zXCI+XG4gICAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGFsaWduLXNlbGYtZW5kXCIgKGNsaWNrKT1cInNhdmVGb3JtKClcIj5TYXZlIEZvcm08L2E+XG48L2Rpdj4iXX0=