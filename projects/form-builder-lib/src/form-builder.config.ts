import { Injectable } from "@angular/core";

@Injectable()
export class FormBuilderConfig {
    public editFormOptions = {
        showTabs: ['Display', 'Data', 'Validation', 'Conditional', 'API', 'Logic','Layout'],
        hiddenFields: {}
    };
    public formBuilderOptions = {};
    public license = '';
}

export const DefaulConfiguration = new FormBuilderConfig();
