import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'form-report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements AfterViewInit {
  @ViewChild('report', { static: true }) report: any;
  constructor(
    public service: ReportService,
    public route: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    this.service.createReport(this.report.nativeElement, this.route.snapshot.params['reportId']);
  }
}
