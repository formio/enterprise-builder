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
  public ready: Promise<boolean>;
  public readyResolve: any;
  public readyReject: any;
  public options: any = {};

  constructor(
    public service: FormBuilderService,
    public router: Router,
    public config: FormioAppConfig,
    public alerts: FormioAlerts
  ) {
    this.alerts = new FormioAlerts();
    this.ready = new Promise((resolve: any, reject: any) => {
      this.readyResolve = resolve;
      this.readyReject = reject;
    });
  }

  onChange(event) {
    this.isChanged = true;
    this.updatedForm = event.form;
    this.alerts.setAlerts([]);
  }

  async ngOnInit(): Promise<void> {
    const currentForm = this.service.currentForm;
    if (!currentForm) {
      this.service.onTenant.subscribe((tenant) => {
        const formio = new Formio(`${this.config.apiUrl}/${tenant.name}/form/${this.router.url.split('/')[2]}`);
        this.tenantName = tenant.name;
        formio.loadForm().then((form) => {
          this.form = form;
          this.readyResolve(true)
        })
      })
      await this.ready
    } else {
      this.form = currentForm;
      this.tenantName = currentForm.tenant.name;
    }
  }

  onSaveForm() {
    console.log('editForm')
    if (this.isChanged) {
      const formio = new Formio(`${this.config.apiUrl}/${this.tenantName}/${this.form.name}`);
      formio.saveForm(this.updatedForm).then((newForm) => {
        this.alerts.setAlert({type: 'success', message: 'Successfully updated form'});
      })
    }
  }
}
