import { OnInit } from '@angular/core';
import { FormEditComponent } from '../edit/edit.component';
import * as i0 from "@angular/core";
export declare class FormSettingsComponent extends FormEditComponent implements OnInit {
    settings: any;
    ngOnInit(): void;
    get settingsForm(): {
        components: ({
            type: string;
            key: string;
            label: string;
            validation: {
                required: boolean;
            };
            input: boolean;
        } | {
            type: string;
            key: string;
            label: string;
            input: boolean;
            validation?: undefined;
        })[];
    };
    saveForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormSettingsComponent, "form-settings", never, {}, {}, never, never, false, never>;
}
