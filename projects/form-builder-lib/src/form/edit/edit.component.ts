import { Component, OnInit } from '@angular/core';
import { FormioAppConfig, FormioAlerts} from '@formio/angular';
import { FormBuilderService } from '../../form-builder.service';
import { Formio } from 'formiojs';
import { Router } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class FormEditComponent implements OnInit {
  public form: any = {components: []};
  private isChanged: Boolean = false;
  private tenantName: String = '';
  public updatedForm: Object = {components: []};
  public options: any = {};

  constructor(
    public service: FormBuilderService,
    public router: Router,
    public config: FormioAppConfig,
    public alerts: FormioAlerts
  ) {
    this.alerts = new FormioAlerts();
  }

  onChange(event) {
    this.isChanged = true;
    this.updatedForm = event.form;
    this.alerts.setAlerts([]);
  }

  async ngOnInit(): Promise<void> {
    const currentForm = this.service.currentForm;
    if (!currentForm) {
      this.tenantName = this.service.currentTenant.name;
      const formio = new Formio(`${this.config.apiUrl}/${this.tenantName}/form/${this.router.url.split('/')[2]}`);
      formio.loadForm().then((form) => {
        this.form = form;
      })
    } else {
      this.form = currentForm;
      this.tenantName = currentForm.tenant.name;
    }
  }

  onSaveForm() {
    if (this.isChanged) {
      const formio = new Formio(`${this.config.apiUrl}/${this.tenantName}/${this.form.name}`);
      formio.saveForm(this.updatedForm).then((newForm) => {
        this.alerts.setAlert({type: 'success', message: 'Successfully updated form'});
      })
    }
  }
}
