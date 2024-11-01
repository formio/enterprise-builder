import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'form-reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {
  reports?: Promise<any[]>;
  constructor(public service: ReportService) {}
  ngOnInit(): void {
    this.reports = this.service.loadReports();
  }
}
