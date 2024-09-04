import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormioModule} from '@formio/angular';
import { FormioGrid } from '@formio/angular/grid';
import { FormEditComponent } from './edit/edit.component';
import { FormViewComponent } from './view/view.component';
import { FormDeleteComponent } from './delete/delete.component';
import { FormSubmissionIndexComponent } from './submission/index/index.component';
import { FormSubmissionComponent } from './submission/submission/submission.component';
import { FormManagerService, FormManagerConfig, SubmissionViewComponent, SubmissionEditComponent, SubmissionDeleteComponent } from '@formio/angular/manager';
import { GridService } from '@formio/angular/grid';
import { ManagerService } from './form.service';
import { FormioFormsComponent } from '../forms/forms.component';

@NgModule({
  declarations: [
    FormComponent,
    FormEditComponent,
    FormViewComponent,
    FormDeleteComponent,
    FormSubmissionIndexComponent,
    FormSubmissionComponent,
  ],
  imports: [
    CommonModule,
    FormioModule,
    FormioGrid,
    RouterModule.forChild([
      {
        path: ':id',
        component: FormComponent,
        children: [
          {
            path: '',
            redirectTo: 'edit',
            pathMatch: 'full'
          },
          {
            path: 'edit',
            component: FormEditComponent
          },
          {
            path: 'view',
            component: FormViewComponent
          },
          {
            path: 'delete',
            component: FormDeleteComponent
          },
          {
            path: 'submission',
            component: FormSubmissionIndexComponent
          },
          {
            path: 'submission/:id',
            component: FormSubmissionComponent,
            children: [
              {
                path: '',
                redirectTo: 'view',
                pathMatch: 'full'
              },
              {
                path: 'view',
                component: SubmissionViewComponent
              },
              {
                path: 'edit',
                component: SubmissionEditComponent
              },
              {
                path: 'delete',
                component: SubmissionDeleteComponent
              }
            ]
          }
        ]
      },
      {
        path: '',
        component: FormioFormsComponent
      }
    ])
  ],
  providers: [
    FormManagerConfig,
    GridService,
    {provide: FormManagerService, useClass: ManagerService },
  ]
})
export class FormModule { }
