import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderRoutes } from './form-builder.routes';
import { FormBuilderIndexComponent } from './index/index.component';
import { extendRouter, FormioModule} from '@formio/angular';
import { FormBuilderNewBuilderComponent } from './builder/builder.component';
import { FormioFormsComponent } from './forms/forms.component';
import { ToastrModule } from 'ngx-toastr';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormioReportsComponent } from './reports/reports.component';
import { FormioReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    FormBuilderIndexComponent,
    FormBuilderNewBuilderComponent,
    FormioFormsComponent,
    FormioReportsComponent,
    FormioReportComponent
  ],
  imports: [
    CommonModule,
    FormioModule,
    ToastrModule.forRoot(),
    PaginationModule.forRoot()
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
