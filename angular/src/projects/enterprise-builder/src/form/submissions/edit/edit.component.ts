import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';
import { AlertLevel } from '@formio/enterprise-builder-core';
import { EnterpriseBuilderAlerts } from '../../../enterprise-builder.alerts';

@Component({
  selector: 'form-submission-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class FormSubmissionEditComponent {
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  saveSubmission(submission:any) {
    return this.service.saveSubmission(submission).then(() => {
      this.router.navigate(['../view'], {relativeTo: this.route});
    });
  }
}
