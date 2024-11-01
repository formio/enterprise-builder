import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { reportResolver } from './report.resolver';
import { ReportComponent } from './report/report.component';
import { Formio } from '@formio/js';
import Reporting from '@formio/reporting';
Formio.use(Reporting);
@NgModule({
  declarations: [
    ReportsComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportsComponent
      },
      {
        path: ':reportId',
        resolve: { report: reportResolver },
        component: ReportComponent
      }
    ])
  ]
})
export class ReportModule { }
