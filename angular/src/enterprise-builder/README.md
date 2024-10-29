# Enterprise-Builder

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Build

Run `ng build enterprise-builder` to build the project. The build artifacts will be stored in the `dist/` directory.

## License
You need to have a valid Library License key to use this package.
If you don't have one yet, please contact sales@form.io.

If you already have the Library License key, please be sure to set it on the Formio variable in your application
```js
Formio.license = 'yourLibraryLicenseKey';
```

## Running Demo

To run a demo of the Enterprise Builder, please follow these steps.

 1. Make sure you have the [Angular CLI](https://angular.io) installed on your machine.
 2. Create a new application and add all dependencies into the application as described in the [documentation](https://help.form.io/developers/introduction/application#create-an-application)
 3. Add as a dependency `@formio/enterprise-builder`

 4. Create Form Builder Configuration in the Builder Creator section of the Developer Portal.

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


