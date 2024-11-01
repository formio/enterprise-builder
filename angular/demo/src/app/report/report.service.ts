import { Injectable } from '@angular/core';
import { Formio } from '@formio/angular/embed';
import { EnterpriseBuilderService, EnterpriseBuilderAlerts, AlertLevel } from '@formio/enterprise-builder/angular';
import { Submission } from '@formio/core/types';
import { Report } from '@formio/reporting';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  public report?: Submission;
  constructor(
    public app: EnterpriseBuilderService,
    public alerts: EnterpriseBuilderAlerts
  ) { }

  public async loadReports() {
    await this.app.ready;
    let reports = [];
    try {
      reports = (new Formio(`${this.app.projectUrl}/reportingui/submission`)).loadSubmissions();
    }
    catch (err: any) {
      this.alerts.add({
        level: AlertLevel.ERROR,
        message: err.message || err 
      });
    }
    return reports;
  }

  public async loadReport(reportId: string | null) {
      if (!reportId) {
          return null;
      }
      try {
        const formio = (new Formio(`${this.app.projectUrl}/reportingui/submission/${reportId}`));
        this.report = await formio.loadSubmission();
      }
      catch (err: any) {
        this.alerts.add({
          level: AlertLevel.ERROR,
          message: err.message || err 
        });
        throw err;
      }
      return this.report;
  }

  public async createReport(element: HTMLElement, reportId: string, options: any = {}) {
      return Report.create(element, `${this.app.projectUrl}/reportingui/submission/${reportId}`, options);
  }
}
