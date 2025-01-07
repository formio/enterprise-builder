import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';

@Component({
  selector: 'form-delete',
  templateUrl: './delete.component.html',
  standalone: false
})
export class FormDeleteComponent {
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  onCancel() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }

  onDeleteDone() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onDeleteError(err: Error) {
    // Do nothing and allow extended classes to override.
  }

  onDelete() {
    this.service.deleteForm()
      .then(() => this.onDeleteDone())
      .catch((err: Error) => this.onDeleteError(err));
  }
}
