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
            this.service.builderForm.tags = typeof this.settings.data.tags === 'string'
                ? this.settings.data.tags.split(',').map((tag) => tag.trim())
                : this.settings.data.tags;
        }
        return super.saveForm();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSettingsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSettingsComponent, selector: "form-settings", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n    <div class=\"col col-8\">\n        <h4>Form Settings</h4>\n        <div class=\"bg-body rounded shadow-sm p-2\">\n            <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n        </div>\n    </div>\n    <div class=\"col col-4\">\n        <h4>Danger Zone</h4>\n        <div class=\"bg-body border border-danger rounded shadow-sm p-2\">\n            <a class=\"btn btn-danger\" routerLink=\"../delete\">Delete Form</a>\n        </div>\n    </div>\n</div>\n<div class=\"d-flex my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", dependencies: [{ kind: "component", type: i1.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSettingsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-settings', template: "<div class=\"row\">\n    <div class=\"col col-8\">\n        <h4>Form Settings</h4>\n        <div class=\"bg-body rounded shadow-sm p-2\">\n            <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n        </div>\n    </div>\n    <div class=\"col col-4\">\n        <h4>Danger Zone</h4>\n        <div class=\"bg-body border border-danger rounded shadow-sm p-2\">\n            <a class=\"btn btn-danger\" routerLink=\"../delete\">Delete Form</a>\n        </div>\n    </div>\n</div>\n<div class=\"d-flex my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBTTNELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFDbkQsUUFBUSxHQUFRLEVBQUUsQ0FBQztJQUMxQixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLElBQUksRUFBRTtnQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUs7Z0JBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJO2dCQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUk7YUFDcEMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxVQUFVLEVBQUU7Z0JBQ1Y7b0JBQ0UsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLEdBQUcsRUFBRSxPQUFPO29CQUNaLEtBQUssRUFBRSxPQUFPO29CQUNkLFVBQVUsRUFBRTt3QkFDVixRQUFRLEVBQUUsSUFBSTtxQkFDZjtvQkFDRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsR0FBRyxFQUFFLE1BQU07b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixHQUFHLEVBQUUsTUFBTTtvQkFDWCxLQUFLLEVBQUUsVUFBVTtvQkFDakIsVUFBVSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLEdBQUcsRUFBRSxNQUFNO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBTSxRQUFRO2dCQUM1RSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzt3R0EzRFUscUJBQXFCOzRGQUFyQixxQkFBcUIsNEVDUGxDLGtvQkFnQk07OzRGRFRPLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZXR0aW5nc0NvbXBvbmVudCBleHRlbmRzIEZvcm1FZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHNldHRpbmdzOiBhbnkgPSB7fTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtkYXRhOiB7XG4gICAgICB0aXRsZTogdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnRpdGxlLFxuICAgICAgbmFtZTogdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLm5hbWUsXG4gICAgICBwYXRoOiB0aGlzLnNlcnZpY2UuYnVpbGRlckZvcm0ucGF0aCxcbiAgICAgIHRhZ3M6IHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50YWdzXG4gICAgfX07XG4gIH1cbiAgZ2V0IHNldHRpbmdzRm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXG4gICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHRmaWVsZCcsXG4gICAgICAgICAga2V5OiAnbmFtZScsXG4gICAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0ZmllbGQnLFxuICAgICAgICAgIGtleTogJ3BhdGgnLFxuICAgICAgICAgIGxhYmVsOiAnQVBJIFBhdGgnLFxuICAgICAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RhZ3MnLFxuICAgICAgICAgIGtleTogJ3RhZ3MnLFxuICAgICAgICAgIGxhYmVsOiAnVGFncycsXG4gICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgc2F2ZUZvcm0oKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnRpdGxlID0gdGhpcy5zZXR0aW5ncy5kYXRhLnRpdGxlO1xuICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS5uYW1lID0gdGhpcy5zZXR0aW5ncy5kYXRhLm5hbWU7XG4gICAgdGhpcy5zZXJ2aWNlLmJ1aWxkZXJGb3JtLnBhdGggPSB0aGlzLnNldHRpbmdzLmRhdGEucGF0aDtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5kYXRhLnRhZ3MpIHtcbiAgICAgIHRoaXMuc2VydmljZS5idWlsZGVyRm9ybS50YWdzID0gdHlwZW9mIHRoaXMuc2V0dGluZ3MuZGF0YS50YWdzID09PSAgJ3N0cmluZydcbiAgICAgID8gdGhpcy5zZXR0aW5ncy5kYXRhLnRhZ3Muc3BsaXQoJywnKS5tYXAoKHRhZzogc3RyaW5nKSA9PiB0YWcudHJpbSgpKVxuICAgICAgOiB0aGlzLnNldHRpbmdzLmRhdGEudGFncztcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnNhdmVGb3JtKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC04XCI+XG4gICAgICAgIDxoND5Gb3JtIFNldHRpbmdzPC9oND5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJnLWJvZHkgcm91bmRlZCBzaGFkb3ctc20gcC0yXCI+XG4gICAgICAgICAgICA8Zm9ybWlvIFtmb3JtXT1cInNldHRpbmdzRm9ybVwiIFtzdWJtaXNzaW9uXT1cInNldHRpbmdzXCI+PC9mb3JtaW8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLTRcIj5cbiAgICAgICAgPGg0PkRhbmdlciBab25lPC9oND5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJnLWJvZHkgYm9yZGVyIGJvcmRlci1kYW5nZXIgcm91bmRlZCBzaGFkb3ctc20gcC0yXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgcm91dGVyTGluaz1cIi4uL2RlbGV0ZVwiPkRlbGV0ZSBGb3JtPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImQtZmxleCBteS0zXCI+XG4gICAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGFsaWduLXNlbGYtZW5kXCIgKGNsaWNrKT1cInNhdmVGb3JtKClcIj5TYXZlIEZvcm08L2E+XG48L2Rpdj4iXX0=