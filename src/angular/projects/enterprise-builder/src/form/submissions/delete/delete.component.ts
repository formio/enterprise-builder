import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import { AlertLevel } from '@formio/enterprise-builder-core';
import { EnterpriseBuilderAlerts } from '../../../enterprise-builder.alerts';

@Component({
  selector: 'form-submission-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class FormSubmissionDeleteComponent {
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  cancel() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }

  deleteSubmission() {
    this.service.deleteSubmission().then(() => {
      this.router.navigate(['../..'], {relativeTo: this.route});
    });
  }
}
