import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { FormBuilder } from '@formio/js';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';
import * as i0 from "@angular/core";
export declare class FormEditComponent {
    service: FormsService;
    router: Router;
    route: ActivatedRoute;
    alerts: EnterpriseBuilderAlerts;
    builder: FormioBuilder;
    mobileView: boolean;
    formConfig: {
        data: {
            display: 'form' | 'wizard' | 'pdf';
        };
    };
    constructor(service: FormsService, router: Router, route: ActivatedRoute, alerts: EnterpriseBuilderAlerts);
    configForm(): {
        components: {
            columns: {
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
            }[];
            key: string;
            type: string;
            input: boolean;
            tableView: boolean;
        }[];
    };
    cancel(): void;
    afterCancel(): void;
    afterSave(): void;
    onFormConflict(err: any): void;
    onBuilder(builder: FormBuilder): void;
    onDisplaySelect(event: any): void;
    saveForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormEditComponent, "form-edit", never, {}, {}, never, never, false, never>;
}
