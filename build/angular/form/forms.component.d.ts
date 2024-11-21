import { FormsService } from './forms.service';
import { Webform } from '@formio/js';
import * as i0 from "@angular/core";
export declare class FormsComponent {
    service: FormsService;
    constructor(service: FormsService);
    get searchForm(): {
        components: {
            type: string;
            columns: ({
                width: number;
                offset: number;
                push: number;
                pull: number;
                size: string;
                components: {
                    type: string;
                    label: string;
                    input: boolean;
                    prefix: string;
                    hideLabel: boolean;
                    placeholder: string;
                    key: string;
                }[];
            } | {
                width: number;
                offset: number;
                push: number;
                pull: number;
                size: string;
                components: {
                    type: string;
                    label: string;
                    input: boolean;
                    hideLabel: boolean;
                    placeholder: string;
                    key: string;
                }[];
            } | {
                width: number;
                offset: number;
                push: number;
                pull: number;
                size: string;
                components: {
                    type: string;
                    label: string;
                    action: string;
                    event: string;
                    leftIcon: string;
                    block: boolean;
                    input: boolean;
                    saveOnEnter: boolean;
                    key: string;
                }[];
            })[];
        }[];
    };
    get search(): {
        data: Record<string, string>;
    };
    enableSearch(form: Webform): void;
    get pageNumbers(): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FormsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormsComponent, "enterprise-builder-forms", never, {}, {}, never, never, false, never>;
}
