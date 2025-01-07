import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertLevel } from '@formio/enterprise-builder-core'
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormEditComponent } from '../edit/edit.component';

@Component({
  selector: 'form-conflict',
  templateUrl: './conflict.component.html',
  standalone: false
})
export class FormConflictComponent extends FormEditComponent {
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {
    super(service, router, route, alerts);
  }

  onMergeConflict(err: any) {
    this.alerts.add({
      level: AlertLevel.ERROR,
      message: 'There is still a conflict with this form. Please try again.'
    });
  }

  merge() {
    this.service.mergeAndSaveChanges().then(() => {
      this.afterSave();
    }).catch((err: any) => {
      if (err._id === this.service.form._id) {
        this.onMergeConflict(err);
      }
    });
  }

  onCancel() {
    this.service.cancelFormUpdate();
    this.afterCancel();
  }
}
