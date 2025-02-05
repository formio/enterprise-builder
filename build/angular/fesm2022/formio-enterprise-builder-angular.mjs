import * as i5 from '@formio/angular/embed';
import { FormioBuilder, FormioEmbedModule, Formio as Formio$1 } from '@formio/angular/embed';
import PremiumModule from '@formio/premium';
import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, inject, NgModule, InjectionToken, Inject } from '@angular/core';
import { AlertService, AppService, FormService, AlertType, AlertLevel } from '@formio/enterprise-builder-core';
export { AlertLevel, AlertService, AlertType, AppService, FormService } from '@formio/enterprise-builder-core';
import * as i2 from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import * as i1 from '@formio/angular';
import { FormioAppConfig } from '@formio/angular';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Utils } from '@formio/js/utils';
import { Formio } from '@formio/js';

class EnterpriseBuilderAlerts extends AlertService {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderAlerts, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderAlerts, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderAlerts, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class EnterpriseBuilderService extends AppService {
    formioConfig;
    alerts;
    router;
    constructor(formioConfig, alerts, router) {
        const config = { ...formioConfig, ...{
                license: formioConfig.license || '',
                projectUrl: formioConfig.projectUrl || formioConfig.appUrl || '',
                baseUrl: formioConfig.baseUrl || formioConfig.apiUrl || '',
            } };
        super(config, alerts);
        this.formioConfig = formioConfig;
        this.alerts = alerts;
        this.router = router;
    }
    async authenticate() {
        try {
            await super.authenticate();
        }
        catch (err) {
            if (err === 'Unauthorized') {
                this.router.navigate([`/auth/login`]);
            }
        }
        return this.currentUser;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderService, deps: [{ token: i1.FormioAppConfig }, { token: EnterpriseBuilderAlerts }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.FormioAppConfig }, { type: EnterpriseBuilderAlerts }, { type: i2.Router }] });

class FormsService extends FormService {
    appService;
    constructor(appService) {
        super(appService);
        this.appService = appService;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsService, deps: [{ token: EnterpriseBuilderService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: EnterpriseBuilderService }] });

class FormBuildComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormBuildComponent, selector: "form-build", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }], ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n  <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i5.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormBuildComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-build', template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n  <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n    <i class=\"bi fs-5 bi-card-list\"></i>\n    <span>\n      Create New Form</span>\n  </h5>\n</div>\n<hr />\n<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"configChange($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n  <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n  <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n  <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}\n"] }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }] } });

class FormViewComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    ngOnInit() {
        this.service.resetSubmission();
    }
    onFormError(err) {
        this.alerts.error(AlertType.FORM_VIEW, err);
    }
    onSubmitError(err) {
        this.router.navigate(['../error'], { relativeTo: this.route });
    }
    onSubmitDone(submission) {
        this.router.navigate([`../submission/${submission._id}`], { relativeTo: this.route });
    }
    onSubmitLoadError(err) {
        this.router.navigate(['../complete'], { relativeTo: this.route });
    }
    onSubmit(submission) {
        return this.submit(submission);
    }
    submit(submission) {
        this.service.createSubmission(submission).then((result) => {
            this.service.loadSubmission(result._id)
                .then((submission) => this.onSubmitDone(submission))
                .catch((err) => this.onSubmitLoadError(err));
        }).catch((err) => this.onSubmitError(err));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormViewComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormViewComponent, selector: "form-view", ngImport: i0, template: "<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio [url]=\"service.formUrl()\" [form]=\"service.form\" (submit)=\"onSubmit($event)\" (error)=\"onFormError($event)\"></formio>\n</div>", dependencies: [{ kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-view', template: "<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio [url]=\"service.formUrl()\" [form]=\"service.form\" (submit)=\"onSubmit($event)\" (error)=\"onFormError($event)\"></formio>\n</div>" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }] });

class FormEditComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormEditComponent, selector: "form-edit", viewQueries: [{ propertyName: "builder", first: true, predicate: FormioBuilder, descendants: true }], ngImport: i0, template: "<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"onDisplaySelect($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n    <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: i5.FormioBuilder, selector: "formio-builder", inputs: ["form", "options"], outputs: ["change", "ready", "error"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-edit', template: "<formio [form]=\"configForm()\" [submission]=\"formConfig\" (change)=\"onDisplaySelect($event)\" class=\"w-100\"></formio>\n<div class=\"d-flex justify-content-end my-3\" *ngIf=\"service.builderForm.display === 'pdf' && isPDFattached()\">\n    <a type=\"button\" class=\"btn btn-danger\" (click)=\"removePDF()\">Remove PDF</a>\n</div>\n<div class=\"bg-body rounded shadow-sm p-2\">\n    <formio-builder [form]=\"service.builderForm\" [options]=\"service.builderOptions\" (change)=\"service.onChange($event)\" (ready)=\"onBuilder($event)\"></formio-builder>\n</div>\n<div class=\"d-flex justify-content-end my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>\n", styles: [".formbuilder{display:flex;flex-direction:row;justify-content:space-between;gap:10px}.formbuilder .formarea{width:80%;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#fff}.formbuilder .formcomponents{padding:10px;width:18%;border:1px solid #ccc;border-radius:5px;background-color:#fff}.mobileView .formbuilder{display:flex;gap:30px}.mobileView .formbuilder .formarea{width:30%!important;margin:0 auto!important}\n"] }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }], propDecorators: { builder: [{
                type: ViewChild,
                args: [FormioBuilder]
            }] } });

class FormComponent {
    service;
    router;
    route;
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormComponent, selector: "form-form", ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n    <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n        <i class=\"bi fs-5 bi-card-list\"></i>\n        <span><a class=\"nav-link\" routerLink=\"..\">Forms</a></span> / <span class=\"text-primary\">{{service.form?.title || 'Form'}}</span>\n    </h5>\n    <ul aria-label=\"Form\" role=\"navigation\" class=\"nav nav-pills\">\n        <li class=\"nav-item\">\n            <a routerLinkActive=\"bg-primary-subtle\" class=\"nav-link text-primary\" routerLink=\"edit\">\n                <i class=\"bi bi-pencil fs-xs\"></i> Edit\n            </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link text-primary\" routerLink=\"view\" routerLinkActive=\"bg-primary-subtle\">\n                <i class=\"bi bi-eye fs-xs\"></i> Use\n            </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"service.app.config?.showData\">\n            <a class=\"nav-link text-primary\" routerLink=\"submission\" routerLinkActive=\"bg-primary-subtle\">\n                <i class=\"bi bi-table fs-xs\"></i> Data\n            </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link text-primary\" routerLink=\"settings\" routerLinkActive=\"bg-primary-subtle\">\n                <i class=\"bi bi-gear fs-xs\"></i> Settings\n            </a>\n        </li>\n    </ul>\n</div>\n<router-outlet></router-outlet>\n", dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-form', template: "<div class=\"d-flex justify-content-between align-items-center mb-2 text-body\">\n    <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n        <i class=\"bi fs-5 bi-card-list\"></i>\n        <span><a class=\"nav-link\" routerLink=\"..\">Forms</a></span> / <span class=\"text-primary\">{{service.form?.title || 'Form'}}</span>\n    </h5>\n    <ul aria-label=\"Form\" role=\"navigation\" class=\"nav nav-pills\">\n        <li class=\"nav-item\">\n            <a routerLinkActive=\"bg-primary-subtle\" class=\"nav-link text-primary\" routerLink=\"edit\">\n                <i class=\"bi bi-pencil fs-xs\"></i> Edit\n            </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link text-primary\" routerLink=\"view\" routerLinkActive=\"bg-primary-subtle\">\n                <i class=\"bi bi-eye fs-xs\"></i> Use\n            </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"service.app.config?.showData\">\n            <a class=\"nav-link text-primary\" routerLink=\"submission\" routerLinkActive=\"bg-primary-subtle\">\n                <i class=\"bi bi-table fs-xs\"></i> Data\n            </a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link text-primary\" routerLink=\"settings\" routerLinkActive=\"bg-primary-subtle\">\n                <i class=\"bi bi-gear fs-xs\"></i> Settings\n            </a>\n        </li>\n    </ul>\n</div>\n<router-outlet></router-outlet>\n" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }] });

class EnterpriseBuilderLoaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: EnterpriseBuilderLoaderComponent, selector: "loader", ngImport: i0, template: "<div class=\"formio-loader\">\n    <div class=\"loader-wrapper\">\n        <div class=\"loader text-center\"></div>\n    </div>\n</div>", styles: [".formio-loader{position:relative;min-height:100px}.loader-wrapper{z-index:1000;position:absolute;inset:0;background-color:#0000}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderLoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loader', template: "<div class=\"formio-loader\">\n    <div class=\"loader-wrapper\">\n        <div class=\"loader text-center\"></div>\n    </div>\n</div>", styles: [".formio-loader{position:relative;min-height:100px}.loader-wrapper{z-index:1000;position:absolute;inset:0;background-color:#0000}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }] });

class FormsComponent {
    service;
    constructor(service) {
        this.service = service;
    }
    get searchForm() {
        return {
            components: [
                {
                    type: 'columns',
                    columns: [
                        {
                            width: 6,
                            offset: 0,
                            push: 0,
                            pull: 0,
                            size: 'md',
                            components: [
                                {
                                    type: 'textfield',
                                    label: 'Search by Title',
                                    input: true,
                                    prefix: '<i class="bi bi-search"></i>',
                                    hideLabel: true,
                                    placeholder: 'Search by Title',
                                    key: 'title'
                                }
                            ]
                        },
                        {
                            width: 4,
                            offset: 0,
                            push: 0,
                            pull: 0,
                            size: 'md',
                            components: [
                                {
                                    type: 'tags',
                                    label: 'Search by Tags',
                                    input: true,
                                    hideLabel: true,
                                    placeholder: 'Search by Tags',
                                    key: 'tags'
                                }
                            ]
                        },
                        {
                            width: 2,
                            offset: 0,
                            push: 0,
                            pull: 0,
                            size: 'md',
                            components: [
                                {
                                    type: 'button',
                                    label: 'Search',
                                    action: 'event',
                                    event: 'search',
                                    leftIcon: 'bi bi-search',
                                    block: true,
                                    input: true,
                                    saveOnEnter: true,
                                    key: 'search'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
    get search() {
        return { data: this.service.searchQuery };
    }
    enableSearch(form) {
        form.on('search', (data) => this.service.loadForms(data));
    }
    get pageNumbers() {
        return Array.from({ length: this.service.totalPages }, (_, i) => i + 1);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsComponent, deps: [{ token: FormsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormsComponent, selector: "enterprise-builder-forms", ngImport: i0, template: "<div class=\"d-flex justify-content-between align-items-center mb-3\">\n    <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n        <i class=\"bi bi-list-check fs-5\"></i>\n        Forms\n    </h5>\n    <a routerLink=\"build\" class=\"btn btn-primary\">Create Form</a>\n</div>\n<div class=\"bg-body p-2 mb-3\">\n    <formio [form]=\"searchForm\" [submission]=\"search\" (ready)=\"enableSearch($event)\"></formio>\n</div>\n<div class=\"form-list-header list-group-flush d-flex flex-row justify-content-between align-items-center mb-2\">\n    <div class=\"col-8 ps-3 fw-3 text-muted\">Title</div>\n    <div class=\"col-2 ps-3 fw-3 text-muted\">Actions</div>\n    <div class=\"col-2 ps-3 fw-3 text-muted\">Tags</div>\n</div>\n<hr />\n<loader *ngIf=\"service.formsLoading\"></loader>\n<ul *ngIf=\"!service.formsLoading\" class=\"list-group list-group-flush list-group-light\">\n    <a class=\"list-group-item list-group-item-action d-flex flex-row  align-items-center py-4 mb-2 rounded shadow-sm\"\n        *ngFor=\"let form of (service.forms | async)\">\n        <!-- <i class=\"bi bi-file-medical fs-4 text-muted\"></i> -->\n        <div class=\"col-8 ms-3 mr-auto d-flex flex-row gap-4 justify-content-start align-items-center cursor-pointer\"\n            routerLink=\"{{ form._id }}/view\">\n            <div class=\"ms-3 me-auto\">\n                <div class=\"fs-4 fw-3 text-muted\">{{ form.title }}</div>\n                <div class=\"fs-6 fw-lighter text-muted\">created {{ form.created | date: 'short' }}</div>\n                <div class=\"fs-6 fw-lighter text-muted\">modified {{ form.modified | date: 'short' }}</div>\n            </div>\n        </div>\n        <div class=\"col-2 form-actions d-flex flex-row  align-items-start gap-2 text-center ml-auto\">\n            <a routerLink=\"{{ form._id }}/edit\" class=\"btn btn-outline-secondary btn-icon btn-xs rounded-circle\">\n                <i class=\"bi bi-pencil fs-xs\"></i>\n            </a>\n            <a routerLink=\"{{ form._id }}/submission\"\n                class=\"btn btn-outline-secondary btn-icon btn-xs rounded-circle\">\n                <i class=\"bi bi-table fs-xs\"></i>\n            </a>\n        </div>\n        <div class=\"col-2 form-tags d-flex flex-row align-items-center\">\n            <span class=\"badge text-bg-secondary me-1\" *ngFor=\"let tag of form.tags\">{{tag}}</span>\n        </div>\n    </a>\n</ul>\n<div *ngIf=\"!service.formsLoading\" class=\"d-flex justify-content-center\">\n    <nav aria-label=\"Forms Navigation\">\n        <ul class=\"pagination\" *ngIf=\"!service.formsLoading\">\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"service.prevPage()\"><i class=\"bi bi-chevron-left\"></i></button></li>\n            <li class=\"page-item\" *ngFor=\"let i of pageNumbers;\">\n                <button class=\"page-link\" [attr.aria-current]=\"i===service.page\" [ngClass]=\"{active: (i === service.page)}\" (click)=\"service.goto(i)\">{{ i }}</button>\n            </li>\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"service.nextPage()\"><i class=\"bi bi-chevron-right\"></i></button></li>\n        </ul>\n    </nav>\n</div>\n", dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "component", type: EnterpriseBuilderLoaderComponent, selector: "loader" }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }, { kind: "pipe", type: i2$1.DatePipe, name: "date" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'enterprise-builder-forms', template: "<div class=\"d-flex justify-content-between align-items-center mb-3\">\n    <h5 class=\"my-2 d-flex gap-2 align-items-center\" style=\"font-size: 16px;\">\n        <i class=\"bi bi-list-check fs-5\"></i>\n        Forms\n    </h5>\n    <a routerLink=\"build\" class=\"btn btn-primary\">Create Form</a>\n</div>\n<div class=\"bg-body p-2 mb-3\">\n    <formio [form]=\"searchForm\" [submission]=\"search\" (ready)=\"enableSearch($event)\"></formio>\n</div>\n<div class=\"form-list-header list-group-flush d-flex flex-row justify-content-between align-items-center mb-2\">\n    <div class=\"col-8 ps-3 fw-3 text-muted\">Title</div>\n    <div class=\"col-2 ps-3 fw-3 text-muted\">Actions</div>\n    <div class=\"col-2 ps-3 fw-3 text-muted\">Tags</div>\n</div>\n<hr />\n<loader *ngIf=\"service.formsLoading\"></loader>\n<ul *ngIf=\"!service.formsLoading\" class=\"list-group list-group-flush list-group-light\">\n    <a class=\"list-group-item list-group-item-action d-flex flex-row  align-items-center py-4 mb-2 rounded shadow-sm\"\n        *ngFor=\"let form of (service.forms | async)\">\n        <!-- <i class=\"bi bi-file-medical fs-4 text-muted\"></i> -->\n        <div class=\"col-8 ms-3 mr-auto d-flex flex-row gap-4 justify-content-start align-items-center cursor-pointer\"\n            routerLink=\"{{ form._id }}/view\">\n            <div class=\"ms-3 me-auto\">\n                <div class=\"fs-4 fw-3 text-muted\">{{ form.title }}</div>\n                <div class=\"fs-6 fw-lighter text-muted\">created {{ form.created | date: 'short' }}</div>\n                <div class=\"fs-6 fw-lighter text-muted\">modified {{ form.modified | date: 'short' }}</div>\n            </div>\n        </div>\n        <div class=\"col-2 form-actions d-flex flex-row  align-items-start gap-2 text-center ml-auto\">\n            <a routerLink=\"{{ form._id }}/edit\" class=\"btn btn-outline-secondary btn-icon btn-xs rounded-circle\">\n                <i class=\"bi bi-pencil fs-xs\"></i>\n            </a>\n            <a routerLink=\"{{ form._id }}/submission\"\n                class=\"btn btn-outline-secondary btn-icon btn-xs rounded-circle\">\n                <i class=\"bi bi-table fs-xs\"></i>\n            </a>\n        </div>\n        <div class=\"col-2 form-tags d-flex flex-row align-items-center\">\n            <span class=\"badge text-bg-secondary me-1\" *ngFor=\"let tag of form.tags\">{{tag}}</span>\n        </div>\n    </a>\n</ul>\n<div *ngIf=\"!service.formsLoading\" class=\"d-flex justify-content-center\">\n    <nav aria-label=\"Forms Navigation\">\n        <ul class=\"pagination\" *ngIf=\"!service.formsLoading\">\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"service.prevPage()\"><i class=\"bi bi-chevron-left\"></i></button></li>\n            <li class=\"page-item\" *ngFor=\"let i of pageNumbers;\">\n                <button class=\"page-link\" [attr.aria-current]=\"i===service.page\" [ngClass]=\"{active: (i === service.page)}\" (click)=\"service.goto(i)\">{{ i }}</button>\n            </li>\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"service.nextPage()\"><i class=\"bi bi-chevron-right\"></i></button></li>\n        </ul>\n    </nav>\n</div>\n" }]
        }], ctorParameters: () => [{ type: FormsService }] });

const formResolver = (route, state, service = inject(FormsService), router = inject(Router)) => {
    return service.app.loadProject().then(() => service.loadForm(route.paramMap.get('formId')).catch(() => {
        router.navigate(['..']);
    }));
};

const formsResolver = (route, state, service = inject(FormsService)) => {
    return service.app.loadProject().then(() => service.loadForms());
};

const projectResolver = (route, state, service = inject(FormsService)) => {
    return service.app.loadProject();
};

class FormDeleteComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onCancel() {
        this.router.navigate(['../view'], { relativeTo: this.route });
    }
    onDeleteDone() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
    onDeleteError(err) {
        // Do nothing and allow extended classes to override.
    }
    onDelete() {
        this.service.deleteForm()
            .then(() => this.onDeleteDone())
            .catch((err) => this.onDeleteError(err));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormDeleteComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormDeleteComponent, selector: "form-delete", ngImport: i0, template: "<div class=\"p-3\">\n    <h3>Are you sure you wish to delete {{service.form?.title}} form?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger me-2\">Yes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormDeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-delete', template: "<div class=\"p-3\">\n    <h3>Are you sure you wish to delete {{service.form?.title}} form?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger me-2\">Yes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }] });

class FormCompleteComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormCompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormCompleteComponent, selector: "form-complete", ngImport: i0, template: "<div class=\"alert alert-success\">Submission Complete!</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormCompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-complete', template: "<div class=\"alert alert-success\">Submission Complete!</div>" }]
        }] });

class FormErrorComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormErrorComponent, selector: "form-error", ngImport: i0, template: "<div class=\"alert alert-danger\">Unable to submit form. Please contact the administrator.</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-error', template: "<div class=\"alert alert-danger\">Unable to submit form. Please contact the administrator.</div>" }]
        }] });

class FormSubmissionDeleteComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    cancel() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
    deleteSubmission() {
        this.service.deleteSubmission().then(() => {
            this.router.navigate(['../..'], { relativeTo: this.route });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionDeleteComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionDeleteComponent, selector: "form-submission-delete", ngImport: i0, template: "<h3>Are you sure you wish to delete this record?</h3>\n<div class=\"btn-toolbar\">\n  <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-primary me-3 px-3 py-2\">No</button>\n  <button type=\"button\" (click)=\"deleteSubmission()\" class=\"btn btn-light px-3 py-2\" style=\"margin-right: 10px;\">Yes, delete this submission</button>\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionDeleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission-delete', template: "<h3>Are you sure you wish to delete this record?</h3>\n<div class=\"btn-toolbar\">\n  <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-primary me-3 px-3 py-2\">No</button>\n  <button type=\"button\" (click)=\"deleteSubmission()\" class=\"btn btn-light px-3 py-2\" style=\"margin-right: 10px;\">Yes, delete this submission</button>\n</div>" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }] });

class FormSubmissionEditComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    saveSubmission(submission) {
        return this.service.saveSubmission(submission).then(() => {
            this.router.navigate(['..'], { relativeTo: this.route });
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionEditComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionEditComponent, selector: "form-submission-edit", ngImport: i0, template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" (submit)=\"saveSubmission($event)\"></formio>", styles: [""], dependencies: [{ kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission-edit', template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" (submit)=\"saveSubmission($event)\"></formio>" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }] });

const submissionResolver = (route, state, service = inject(FormsService), alerts = inject(EnterpriseBuilderAlerts), router = inject(Router)) => {
    return service.loadSubmission(route.paramMap.get('submissionId')).catch((err) => {
        router.navigate(['..']);
    });
};

class FormSubmissionComponent {
    service;
    router;
    route;
    pdfDownload = '';
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.service.getDownloadUrl().then((url) => (this.pdfDownload = url));
    }
    isChildRoute(path) {
        return this.route.children.some((child) => child.snapshot.routeConfig?.path === path);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionComponent, selector: "form-submission", ngImport: i0, template: "<div class=\"p-3\">\n    <div class=\"d-flex align-items-start justify-content-between mb-3\">\n        <a *ngIf=\"service.app.user && !isChildRoute('')\" routerLink=\"./\" routerLinkActive=\"border-secondary bg-light\" class=\"py-1 px-2 border border-1 rounded-circle me-1\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-eye text-muted m-0\"></i></a>\n        <a *ngIf=\"service.app.user && !isChildRoute('edit')\" routerLink=\"./edit\" routerLinkActive=\"border-secondary bg-light\" class=\"py-1 px-2 border border-1 rounded-circle me-1\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-pencil text-muted m-0\"></i></a>\n        <a *ngIf=\"service.app.user && pdfDownload\" [href]=\"pdfDownload\" target=\"_blank\" class=\"py-1 px-2 border border-1 rounded-circle me-auto\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-file-pdf-fill text-muted m-0\"></i></a>\n        <a *ngIf=\"service.app.user\" routerLink=\"./delete\" routerLinkActive=\"border-secondary bg-light\" class=\"py-1 px-2 border border-1 rounded-circle me-1\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-trash text-muted m-0\"></i></a>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n  ", styles: [""], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission', template: "<div class=\"p-3\">\n    <div class=\"d-flex align-items-start justify-content-between mb-3\">\n        <a *ngIf=\"service.app.user && !isChildRoute('')\" routerLink=\"./\" routerLinkActive=\"border-secondary bg-light\" class=\"py-1 px-2 border border-1 rounded-circle me-1\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-eye text-muted m-0\"></i></a>\n        <a *ngIf=\"service.app.user && !isChildRoute('edit')\" routerLink=\"./edit\" routerLinkActive=\"border-secondary bg-light\" class=\"py-1 px-2 border border-1 rounded-circle me-1\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-pencil text-muted m-0\"></i></a>\n        <a *ngIf=\"service.app.user && pdfDownload\" [href]=\"pdfDownload\" target=\"_blank\" class=\"py-1 px-2 border border-1 rounded-circle me-auto\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-file-pdf-fill text-muted m-0\"></i></a>\n        <a *ngIf=\"service.app.user\" routerLink=\"./delete\" routerLinkActive=\"border-secondary bg-light\" class=\"py-1 px-2 border border-1 rounded-circle me-1\" style=\"width: 2em; height: 2em;\"><i class=\"bi bi-trash text-muted m-0\"></i></a>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n  " }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }] });

class FormSubmissionsComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionsComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionsComponent, selector: "form-submissions", ngImport: i0, template: "<div class=\"p-3\">\n    <formio [form]=\"submissionForm\" (ready)=\"onFormio($event)\"></formio>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submissions', template: "<div class=\"p-3\">\n    <formio [form]=\"submissionForm\" (ready)=\"onFormio($event)\"></formio>\n</div>\n" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }] });

class FormSubmissionViewComponent {
    service;
    constructor(service) {
        this.service = service;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionViewComponent, deps: [{ token: FormsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSubmissionViewComponent, selector: "form-submission-view", ngImport: i0, template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" [options]=\"{readOnly: true}\"></formio>", styles: [""], dependencies: [{ kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSubmissionViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-submission-view', template: "<formio [form]=\"service.form\" [submission]=\"service.submission\" [options]=\"{readOnly: true}\"></formio>" }]
        }], ctorParameters: () => [{ type: FormsService }] });

const submissionGuard = (component, currentRoute, currentState, nextState, service = inject(FormsService)) => {
    service.unloadSubmission();
    return true;
};

function SubmissionRoutes(config) {
    return [
        {
            path: '',
            component: config?.index || FormSubmissionsComponent
        },
        {
            path: ':submissionId',
            component: config?.submission || FormSubmissionComponent,
            resolve: { submission: submissionResolver },
            canDeactivate: [submissionGuard],
            children: [
                {
                    path: '',
                    component: config?.view || FormSubmissionViewComponent
                },
                {
                    path: 'edit',
                    component: config?.edit || FormSubmissionEditComponent
                },
                {
                    path: 'delete',
                    component: config?.delete || FormSubmissionDeleteComponent
                }
            ]
        }
    ];
}

const formGuard = (component, currentRoute, currentState, nextState, service = inject(FormsService), router = inject(Router)) => {
    if (service.changed) {
        router.navigate([currentState.url.split('/').slice(0, -1).join('/'), 'changes'], {
            state: { intendedRoute: nextState.url }
        });
        return false;
    }
    service.unloadForm();
    return true;
};

class FormSettingsComponent extends FormEditComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSettingsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormSettingsComponent, selector: "form-settings", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n    <div class=\"col col-8\">\n        <h4>Form Settings</h4>\n        <div class=\"bg-body rounded shadow-sm p-2\">\n            <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n        </div>\n    </div>\n    <div class=\"col col-4\">\n        <h4>Danger Zone</h4>\n        <div class=\"bg-body border border-danger rounded shadow-sm p-2\">\n            <a class=\"btn btn-danger\" routerLink=\"../delete\">Delete Form</a>\n        </div>\n    </div>\n</div>\n<div class=\"d-flex my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>", dependencies: [{ kind: "component", type: i5.FormioComponent, selector: "formio", inputs: ["src", "form", "submission", "url", "options"], outputs: ["ready", "submit", "error", "change"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormSettingsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-settings', template: "<div class=\"row\">\n    <div class=\"col col-8\">\n        <h4>Form Settings</h4>\n        <div class=\"bg-body rounded shadow-sm p-2\">\n            <formio [form]=\"settingsForm\" [submission]=\"settings\"></formio>\n        </div>\n    </div>\n    <div class=\"col col-4\">\n        <h4>Danger Zone</h4>\n        <div class=\"bg-body border border-danger rounded shadow-sm p-2\">\n            <a class=\"btn btn-danger\" routerLink=\"../delete\">Delete Form</a>\n        </div>\n    </div>\n</div>\n<div class=\"d-flex my-3\">\n    <a type=\"button\" class=\"btn btn-success align-self-end\" (click)=\"saveForm()\">Save Form</a>\n</div>" }]
        }] });

class FormChangesComponent extends FormEditComponent {
    service;
    router;
    route;
    alerts;
    intendedRoute = null;
    constructor(service, router, route, alerts) {
        super(service, router, route, alerts);
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
        this.intendedRoute = this.router.getCurrentNavigation()?.extras.state?.intendedRoute || null;
    }
    afterCancel() {
        if (this.intendedRoute) {
            this.router.navigate([this.intendedRoute]);
            return;
        }
        super.afterCancel();
    }
    afterSave() {
        if (this.intendedRoute) {
            this.router.navigate([this.intendedRoute]);
            return;
        }
        super.afterSave();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormChangesComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormChangesComponent, selector: "form-changes", usesInheritance: true, ngImport: i0, template: "<div class=\"p-3\">\n    <h3>You have made some changes to this form. Would you like to save your changes?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"saveForm()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormChangesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-changes', template: "<div class=\"p-3\">\n    <h3>You have made some changes to this form. Would you like to save your changes?</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"saveForm()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }] });

class FormConflictComponent extends FormEditComponent {
    service;
    router;
    route;
    alerts;
    constructor(service, router, route, alerts) {
        super(service, router, route, alerts);
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    onMergeConflict(err) {
        this.alerts.add({
            level: AlertLevel.ERROR,
            message: 'There is still a conflict with this form. Please try again.'
        });
    }
    merge() {
        this.service.mergeAndSaveChanges().then(() => {
            this.afterSave();
        }).catch((err) => {
            if (err._id === this.service.form._id) {
                this.onMergeConflict(err);
            }
        });
    }
    onCancel() {
        this.service.cancelFormUpdate();
        this.afterCancel();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormConflictComponent, deps: [{ token: FormsService }, { token: i2.Router }, { token: i2.ActivatedRoute }, { token: EnterpriseBuilderAlerts }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FormConflictComponent, selector: "form-conflict", usesInheritance: true, ngImport: i0, template: "<div class=\"p-3\">\n    <h3>A newer version of this form has been saved to the server. The following changes will be merged with with this version.</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"merge()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormConflictComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-conflict', template: "<div class=\"p-3\">\n    <h3>A newer version of this form has been saved to the server. The following changes will be merged with with this version.</h3>\n    <div class=\"btn-toolbar\">\n        <button type=\"button\" (click)=\"merge()\" class=\"btn btn-primary me-2\">Yes, save my changes</button>\n        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-default\">No</button>\n    </div>\n</div>" }]
        }], ctorParameters: () => [{ type: FormsService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: EnterpriseBuilderAlerts }] });

function FormRoutes(config = {}) {
    return [
        {
            path: '',
            component: config.index || FormsComponent,
            resolve: { form: formsResolver },
        },
        {
            path: 'build',
            component: config.build || FormBuildComponent,
            resolve: { project: projectResolver }
        },
        {
            path: ':formId',
            component: config.form || FormComponent,
            resolve: { form: formResolver },
            canDeactivate: [formGuard],
            children: [
                {
                    path: 'view',
                    component: config.view || FormViewComponent
                },
                {
                    path: 'edit',
                    component: config.edit || FormEditComponent
                },
                {
                    path: 'delete',
                    component: config.delete || FormDeleteComponent
                },
                {
                    path: 'changes',
                    component: config.changes || FormChangesComponent
                },
                {
                    path: 'conflict',
                    component: config.conflict || FormConflictComponent
                },
                {
                    path: 'complete',
                    component: config.complete || FormCompleteComponent
                },
                {
                    path: 'error',
                    component: config.error || FormErrorComponent
                },
                {
                    path: 'settings',
                    component: config.settings || FormSettingsComponent
                },
                {
                    path: 'submission',
                    children: SubmissionRoutes(config.submission)
                }
            ]
        }
    ];
}

class EnterpriseBuilderLoaderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderLoaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderLoaderModule, declarations: [EnterpriseBuilderLoaderComponent], imports: [CommonModule], exports: [EnterpriseBuilderLoaderComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderLoaderModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderLoaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EnterpriseBuilderLoaderComponent
                    ],
                    exports: [
                        EnterpriseBuilderLoaderComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class FormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: FormsModule, declarations: [FormsComponent,
            FormBuildComponent,
            FormViewComponent,
            FormEditComponent,
            FormComponent,
            FormDeleteComponent,
            FormChangesComponent,
            FormConflictComponent,
            FormSettingsComponent,
            FormSubmissionComponent,
            FormSubmissionViewComponent,
            FormSubmissionEditComponent,
            FormSubmissionDeleteComponent,
            FormSubmissionsComponent,
            FormCompleteComponent,
            FormErrorComponent], imports: [CommonModule,
            FormioEmbedModule,
            EnterpriseBuilderLoaderModule,
            RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsModule, providers: [
            FormsService,
        ], imports: [CommonModule,
            FormioEmbedModule,
            EnterpriseBuilderLoaderModule,
            RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FormsComponent,
                        FormBuildComponent,
                        FormViewComponent,
                        FormEditComponent,
                        FormComponent,
                        FormDeleteComponent,
                        FormChangesComponent,
                        FormConflictComponent,
                        FormSettingsComponent,
                        FormSubmissionComponent,
                        FormSubmissionViewComponent,
                        FormSubmissionEditComponent,
                        FormSubmissionDeleteComponent,
                        FormSubmissionsComponent,
                        FormCompleteComponent,
                        FormErrorComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormioEmbedModule,
                        EnterpriseBuilderLoaderModule,
                        RouterModule
                    ],
                    providers: [
                        FormsService,
                    ]
                }]
        }] });

class EnterpriseBuilderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderModule });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderModule, providers: [
            EnterpriseBuilderService,
            EnterpriseBuilderAlerts
        ] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        EnterpriseBuilderService,
                        EnterpriseBuilderAlerts
                    ]
                }]
        }] });

const ENTERPRISE_BUILDER_CONFIG = new InjectionToken('ENTERPRISE_BUILDER_CONFIG');
class EnterpriseBuilderAppConfig extends FormioAppConfig {
    license = '';
    projectUrl = '';
    baseUrl = '';
    tag = '';
    icons = '';
    config = {};
    showData = false;
    constructor(config) {
        super({
            appUrl: config.projectUrl,
            apiUrl: config.baseUrl
        });
        Formio.license = config.license;
        this.license = config.license;
        this.projectUrl = config.projectUrl;
        this.baseUrl = config.baseUrl;
        this.tag = config.tag;
        this.icons = config.icons;
        this.config = config.config;
        this.showData = config.showData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderAppConfig, deps: [{ token: ENTERPRISE_BUILDER_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderAppConfig });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderAppConfig, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ENTERPRISE_BUILDER_CONFIG]
                }] }] });

Formio$1.use(PremiumModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ENTERPRISE_BUILDER_CONFIG, EnterpriseBuilderAlerts, EnterpriseBuilderAppConfig, EnterpriseBuilderLoaderComponent, EnterpriseBuilderLoaderModule, EnterpriseBuilderModule, EnterpriseBuilderService, FormBuildComponent, FormCompleteComponent, FormComponent, FormDeleteComponent, FormEditComponent, FormErrorComponent, FormRoutes, FormSubmissionComponent, FormSubmissionDeleteComponent, FormSubmissionEditComponent, FormSubmissionViewComponent, FormSubmissionsComponent, FormViewComponent, FormsComponent, FormsModule, FormsService, SubmissionRoutes, formResolver, submissionResolver };
//# sourceMappingURL=formio-enterprise-builder-angular.mjs.map
