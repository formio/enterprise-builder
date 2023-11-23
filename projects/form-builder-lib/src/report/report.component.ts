import { OnInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Formio } from '@formio/angular';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-reports',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class FormioReportComponent implements OnInit{
  @ViewChild('report', { static: true }) declare formioElement?: ElementRef<any>;
  public reportName: String = '';
  constructor( 
    public service: FormBuilderService,
    public router: Router,
    public route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    if (this.formioElement) {
      if (this.service.currentReport) {
        this.reportName = this.service.currentReport.data.title;
        (Formio as any).Report.create(this.formioElement.nativeElement, `${this.service.formio.projectUrl}/reportingui/submission/${this.service.currentReport._id}`)
      } else {
        this.service.onTenant.subscribe((tenant) => {
          const reportId = this.route.snapshot.params['id'];
          const formio = new Formio(`${this.service.formio.projectUrl}/reportingui/submission/${reportId}`);
          const params = {
              select: 'data'
          }
          formio.loadSubmission({params})
            .then((report) => this.reportName = report.data.title)
            .catch((error) => {
              console.warn(error)
          });
          (Formio as any).Report.create(this.formioElement.nativeElement, `${this.service.formio.projectUrl}/reportingui/submission/${reportId}`)
        })
      }
    }
  }

  goToReports(): void {
    this.router.navigate(['/reports']);
  }
}
