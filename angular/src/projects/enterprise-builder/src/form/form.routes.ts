import { Routes } from '@angular/router';
import { FormBuildComponent } from './build/build.component';
import { FormViewComponent } from './view/view.component';
import { FormEditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './forms.component';
import { formResolver } from './form.resolver';
import { formsResolver } from './forms.resolver';
import { FormDeleteComponent } from './delete/delete.component';
import { FormCompleteComponent } from './complete/complete.component';
import { FormErrorComponent } from './error/error.component';
import { SubmissionRouteConfig, SubmissionRoutes } from './submissions/submission.routes';
import { formGuard } from './form.guard';
import { FormSettingsComponent } from './settings/settings.component';
import { FormChangesComponent } from './changes/changes.component';
import { FormConflictComponent } from './conflict/conflict.component';

export interface FormRouteConfig {
    index?: any;
    build?: any;
    form?: any;
    view?: any;
    edit?: any;
    delete?: any;
    changes?: any;
    conflict?: any;
    settings?: any;
    access?: any;
    complete?: any;
    error?: any;
    submission?: SubmissionRouteConfig;
}

export function FormRoutes(config: FormRouteConfig = {}): Routes {
  return [
    {
      path: '',
      component: config.index || FormsComponent,
      resolve: { form: formsResolver },
    },
    {
      path: 'build',
      component: config.build || FormBuildComponent
    },
    {
      path: ':formId',
      component: config.form || FormComponent,
      resolve: { form: formResolver },
      canDeactivate: [formGuard],
      children: [
        {
          path: 'view',
          component: config.view || FormViewComponent
        },
        {
          path: 'edit',
          component: config.edit || FormEditComponent
        },
        {
          path: 'delete',
          component: config.delete || FormDeleteComponent
        },
        {
          path: 'changes',
          component: config.changes || FormChangesComponent
        },
        {
          path: 'conflict',
          component: config.conflict || FormConflictComponent
        },
        {
          path: 'complete',
          component: config.complete || FormCompleteComponent
        },
        {
          path: 'error',
          component: config.error || FormErrorComponent
        },
        {
          path: 'settings',
          component: config.settings || FormSettingsComponent
        },
        {
          path: 'submission',
          children: SubmissionRoutes(config.submission)
        }
      ]
    }
  ];
}