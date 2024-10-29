import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormBuildComponent } from './build/build.component';
import { FormViewComponent } from './view/view.component';
import { FormEditComponent } from './edit/edit.component';
import { FormioEmbedModule } from '@formio/angular/embed';
import { FormComponent } from './form/form.component';
import { FormsService } from './forms.service';
import { FormDeleteComponent } from './delete/delete.component';
import { FormCompleteComponent } from './complete/complete.component';
import { FormErrorComponent } from './error/error.component';
import { EnterpriseBuilderLoaderModule } from '../loader/loader.module';
import { RouterModule } from '@angular/router';
import { FormSubmissionComponent, FormSubmissionDeleteComponent, FormSubmissionEditComponent, FormSubmissionsComponent, FormSubmissionViewComponent } from './submissions';
import { FormSettingsComponent } from './settings/settings.component';
import { FormChangesComponent } from './changes/changes.component';
import { FormConflictComponent } from './conflict/conflict.component';

@NgModule({
  declarations: [
    FormsComponent,
    FormBuildComponent,
    FormViewComponent,
    FormEditComponent,
    FormComponent,
    FormDeleteComponent,
    FormChangesComponent,
    FormConflictComponent,
    FormSettingsComponent,
    FormSubmissionComponent,
    FormSubmissionViewComponent,
    FormSubmissionEditComponent,
    FormSubmissionDeleteComponent,
    FormSubmissionsComponent,
    FormCompleteComponent,
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    FormioEmbedModule,
    EnterpriseBuilderLoaderModule,
    RouterModule
  ],
  providers: [
    FormsService,
  ]
})
export class FormsModule {}
