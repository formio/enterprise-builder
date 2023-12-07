import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubmissionIndexComponent, FormManagerService } from '@formio/angular/manager';

@Component({
  selector: 'lib-index',
  templateUrl: './index.component.html'
})
export class FormSubmissionIndexComponent extends SubmissionIndexComponent {

  constructor(
    public serviceManager: FormManagerService,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    super(serviceManager, route, router)
  }
}