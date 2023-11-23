import { Routes } from '@angular/router';
import { FormBuilderNewBuilderComponent } from './builder/builder.component';
import { FormioFormsComponent } from './forms/forms.component';
import { FormBuilderIndexComponent } from './index/index.component';
import { AppGuard } from './app.guard';
import { FormioReportsComponent } from './reports/reports.component';
import { FormioReportComponent } from './report/report.component';

export function FormBuilderRoutes(): Routes {
  return [
    {
      path: '',
      component: FormBuilderIndexComponent,
      canActivate: [AppGuard]
    },
    {
      path: 'builder',
      component: FormBuilderNewBuilderComponent,
      canActivate: [AppGuard]
    },
    {
      path: 'form',
      loadChildren: () => import('./form/form.module').then(m => m.FormModule),
      canActivate: [AppGuard]
    },
    {
      path: 'forms',
      component: FormioFormsComponent,
      canActivate: [AppGuard]
    },
    {
      path: 'reports',
      component: FormioReportsComponent,
      canActivate: [AppGuard]
    },
    {
      path: 'reports/:id',
      component: FormioReportComponent,
      canActivate: [AppGuard]
    }
  ];
}

export class AppRoutingModule { }
