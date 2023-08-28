import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { FormBuilder } from '@formio/js';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';

@Component({
  selector: 'form-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class FormEditComponent {
  public builder: FormBuilder;
  public mobileView: boolean = false;
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  cancel() {
    this.service.cancelFormUpdate();
    this.afterCancel();
  }

  afterCancel() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }

  afterSave() {
    this.router.navigate(['../view'], {relativeTo: this.route});
  }

  onFormConflict(err: any) {
    this.router.navigate(['../conflict'], {relativeTo: this.route});
  }

  onBuilder(builder: FormBuilder) {
    this.builder = builder;
  }

  onDisplaySelect(event) {
    this.builder.setDisplay(event.target.value);
  }

  saveForm() {
    this.service.saveForm().then(() => {
      this.afterSave();
    }).catch((err: any) => {
      if (err._id === this.service.form._id) {
        this.onFormConflict(err);
      }
    });
  }
}
