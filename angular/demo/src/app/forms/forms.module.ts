import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioEmbedModule } from '@formio/angular/embed';
import { FormsModule as EnterpriseBuilderFormsModule, FormRoutes } from '@formio/enterprise-builder/angular';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormioEmbedModule,
    EnterpriseBuilderFormsModule,
    RouterModule.forChild(FormRoutes({
      view: ViewComponent
    }))
  ],
  declarations: [
    ViewComponent
  ]
})
export class FormsModule {}
