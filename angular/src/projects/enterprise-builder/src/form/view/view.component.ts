import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { Submission } from '@formio/core/types';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { AlertType } from '@formio/enterprise-builder-core';

@Component({
  selector: 'form-view',
  templateUrl: './view.component.html',
  standalone: false
})
export class FormViewComponent implements OnInit {
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  ngOnInit(): void {
    this.service.resetSubmission();
  }

  onFormError(err: Error) {
    this.alerts.error(AlertType.FORM_VIEW, err);
  }

  onSubmitError(err: Error) {
    this.router.navigate(['../error'], {relativeTo: this.route});
  }

  onSubmitDone(submission: Submission) {
    this.router.navigate([`../submission/${submission._id}`], {relativeTo: this.route});
  }

  onSubmitLoadError(err: Error) {
    this.router.navigate(['../complete'], {relativeTo: this.route});
  }

  onSubmit(submission: any) {
    return this.submit(submission as Submission);
  }

  submit(submission: Submission) {
    this.service.createSubmission(submission).then((result: any) => {
      this.service.loadSubmission(result._id)
        .then((submission: Submission) => this.onSubmitDone(submission))
        .catch((err: Error) => this.onSubmitLoadError(err));
    }).catch((err: Error) => this.onSubmitError(err));
  }
}
