import { OnInit, Component } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { Router } from '@angular/router';
import { FormBuilderService } from '../form-builder.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Formio } from 'formiojs';
// import { Formio } from '@formio/js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class FormioReportsComponent implements OnInit{
  public _reports: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public reports: Observable<Array<any>> = this._reports.asObservable();
  // public totalItems:Number = 0;
  // public currentPage = 1;
  // public limit = 10;
  constructor( 
    public service: FormBuilderService,
    public config: FormioAppConfig,
    public router: Router,
  ) { };

  ngOnInit(): void {
    if (this.service.currentTenant) {
      this.loadReports(this.service.currentTenant);
    } else {
      this.service.onTenant.subscribe((tenant) => {
        this.loadReports(tenant)
      })
    }
  }

  loadReports(tenant) {
    const formio = new Formio(`${this.config.apiUrl}/${tenant.name}/reportingui/submission`);
    formio.loadSubmissions()
      .then((reports) => this._reports.next(reports))
      .catch((error) => {
        console.log(error)
      });
  }

  setReport(report) {
    this.service.setReport(report);
    this.router.navigate([`/reports/${report._id}`]);
  }

}
