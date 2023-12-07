# Enterprise-Builder

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0. 

## Build

Run `ng build formBuilder-lib` to build the project. The build artifacts will be stored in the `dist/` directory.



## Running Demo

To run a demo of the Enterprise Builder, please follow these steps.
 
 1. Make sure you have the [Angular CLI](https://angular.io) installed on your machine.
 2. Create a new application and add all dependencies into the application as described in the [documentation](https://help.form.io/developers/introduction/application#create-an-application)
 3. Add as a dependency `@formio/enterprise-builder`
 4. Add the Form Builder Configuration. To do this, create new editFormOptions.ts and formBuilderOptions.ts files as follows.
    **src/app/editFormOptions.ts**
    ```js
    export const editFormOptions =  {
        showTabs: [
            // Tere is a list of general tabs that are offered for the components. To hide a tab, comment it below.
            'Display', 
            'Data', 
            // 'Validation', 
            'Conditional', 
            // 'API', 
            // 'Logic',
            'Layout'
        ],

        hiddenFields: {
            // Every tab contains different fields which can be hidden. All fields are shown by default. 
            // To hide the fields, uncomment them below
            display: [
                //'label',
                'labelPosition',
                // 'labelWidth',
                //'labelMargin',
                // 'placeholder',
                //'description',
                //'tooltip',
                //'prefix',
                //'suffix',
                //'widget.type',
                //'widget',
                //'inputMask',
                //'inputMaskPlaceholderChar',
                //'allowMultipleMasks',
                //'inputMasks',
                'customClass',
                //'tabindex',
                //'autocomplete',
                //'hidden',
                //'hideLabel',
                //'showWordCount',
                //'showCharCount',
                //'mask',
                //'autofocus',
                //'spellcheck',
                //'dataGridLabel',
                //'disabled',
                //'tableView',
                //'modalEdit'
            ],
            data: [
                'multiple',
                //'defaultValue',
                //'urlParameter',
                //'persistent',
                //'inputFormat',
                //'protected',
                //'dbIndex',
                //'case',
                //'encrypted',
                //'redrawOn',
                //'clearOnHide',
                //'customDefaultValuePanel',
                //'calculateValuePanel',
                //'calculateServer',
                //'allowCalculateOverride'
            ],
            validation: [
                //'validateOn',
                'validate.required',
                //'unique',
                //'validate.minLength',
                //'validate.maxLength',
                //'validate.minWords',
                //'validate.maxWords',
                //'validate.pattern',
                //'errorLabel',
                //'validate.customMessage',
                //'custom-validation-js',
                //'json-validation-json'
            ],
            api: [
                //'key',
                //'tags',
                //'properties'
            ],
            conditional: [
                //'simple-conditional',
                //'customConditionalPanel'
            ],
            logic: [
                // 'logic'
            ],
            layout: [
                // 'attributes',
                //'overlay'
            ]
        }
    }
    ```

    **src/app/formBuilderOptions.ts**
    ```js
    export const formBuilderOptions = {
        basic: false,
        premium: false,
        data: false,
        resource: false,
        standard: {
            title: 'Standard',
            weight: -10,
            default: true,
            components: {
                firstName: {
                    title: 'Company Name',
                    key: 'company',
                    icon: 'terminal',
                    schema: {
                        label: 'Company Name',
                        type: 'textfield',
                        key: 'company',
                        input: true
                    }
                },
                lastName: {
                    title: 'Job Title',
                    key: 'jobTitle',
                    icon: 'terminal',
                    schema: {
                        label: 'Job Title',
                        type: 'textfield',
                        key: 'jobTitle',
                        input: true
                    }
                },
                email: {
                    title: 'LinkedIn URL',
                    key: 'linkedInURL',
                    icon: 'linkedin',
                    schema: {
                        label: 'LinkedIn URL',
                        type: 'textfield',
                        key: 'linkedInURL',
                        input: true
                    }
                },
                phoneNumber: {
                    title: 'Mobile Phone',
                    key: 'mobilePhone',
                    icon: 'phone-square',
                    schema: {
                        label: 'Mobile Phone',
                        type: 'phoneNumber',
                        key: 'mobilePhone',
                        input: true
                    }
                }
            }
        }
    }
    ```

 5. Add the following to the routes.
    *src/app/app-routing.module.ts*
    ```js
    ...
    import { FormBuilderIndexComponent } from '@formio/enterprise-builder';

    const routes: Routes = [
        {
            path: '',
            component: FormBuilderIndexComponent
        }
    ];

    ...
    ```
 6. Register enterprise-builder and bilder configuration within the main module by adding the following to the app.module.ts file.
    *src/app/app-routing.module.ts*
    ```js
    ...
    import { FormBuilderModule, FormBuilderRoutes, FormBuilderService, FormBuilderConfig } from '@formio/enterprise-builder';
    import { formBuilderOptions } from './formBuilderOptions';
    import { editFormOptions } from './editFormOptions';

    ... 
    @NgModule({
        declarations: [
            ...
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormBuilderModule,
            RouterModule.forChild(FormBuilderRoutes()),
        ],
        providers: [
            ...
            FormBuilderService,
            {provide: FormBuilderConfig, useValue: {
                editFormOptions,
                formBuilderOptions
            }}
        ],
        ...
    })
    ...
    ```
    
 7. Run the application, type ```ng serve```
 

