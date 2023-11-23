import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmissionComponent, FormManagerService } from '@formio/angular/manager';

@Component({
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class FormSubmissionComponent extends SubmissionComponent {
  constructor(
    public serviceManager: FormManagerService,
    public route: ActivatedRoute,
  ) {
    super(serviceManager, route)
  }
}
