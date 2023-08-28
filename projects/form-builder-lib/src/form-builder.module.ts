import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderRoutes } from './form-builder.routes';
import { FormBuilderIndexComponent } from './index/index.component';
import { extendRouter, FormioAppConfig , FormioModule} from '@formio/angular';
import { FormBuilderNewBuilderComponent } from './builder/builder.component';
import { FormioFormsComponent } from './forms/forms.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    FormBuilderIndexComponent,
    FormBuilderNewBuilderComponent,
    FormioFormsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormioModule,
    ToastrModule.forRoot(),
  ]
})
export class FormBuilderModule { 
  static forRoot(config?: any): any {
    return extendRouter(FormBuilderModule, config, FormBuilderRoutes);
  }
  static forChild(config?: any): any {
    return extendRouter(FormBuilderModule, config, FormBuilderRoutes);
  }
}
