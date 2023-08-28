import { Injectable } from "@angular/core";

@Injectable()
export class FormBuilderConfig {
    public editFormOptions = {
        showTabs: ['Display', 'Data', 'Validation', 'Conditional', 'API', 'Logic','Layout'],
        hiddenFields: {}
    };
    public formBuilderOptions = {};
}

export const DefaulConfiguration = new FormBuilderConfig();
