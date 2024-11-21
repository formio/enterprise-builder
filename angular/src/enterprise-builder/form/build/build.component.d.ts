import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';
import { Form } from '@formio/core/types';
import * as i0 from "@angular/core";
export declare class FormBuildComponent implements OnInit {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    builder: FormioBuilder;
    formConfig: any;
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    ngOnInit(): void;
    configChange(event: any): void;
    configForm(): {
        components: {
            columns: ({
                components: {
                    label: string;
                    placeholder: string;
                    hideLabel: boolean;
                    applyMaskOn: string;
                    tableView: boolean;
                    validateWhenHidden: boolean;
                    key: string;
                    type: string;
                    input: boolean;
                }[];
                width: number;
                offset: number;
                push: number;
                pull: number;
                size: string;
                currentWidth: number;
            } | {
                components: {
                    label: string;
                    widget: string;
                    placeholder: string;
                    tableView: boolean;
                    hideLabel: boolean;
                    data: {
                        values: {
                            label: string;
                            value: string;
                        }[];
                    };
                    validateWhenHidden: boolean;
                    key: string;
                    type: string;
                    input: boolean;
                }[];
                width: number;
                offset: number;
                push: number;
                pull: number;
                size: string;
                currentWidth: number;
            })[];
            key: string;
            type: string;
            input: boolean;
            tableView: boolean;
        }[];
    };
    onSave(form: Form): void;
    saveForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormBuildComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormBuildComponent, "form-build", never, {}, {}, never, never, false, never>;
}
