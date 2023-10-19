import { Component, OnInit } from '@angular/core';
import { FormioAppConfig, FormioAlerts } from '@formio/angular';
import { FormBuilderService } from '../../form-builder.service';
import { Formio, Utils } from 'formiojs';
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
  public updatedForm: any = {components: []};
  private changes: Array<any> = [];
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
    let change = null;
    const { component, parent, path, type, index } = event;
    switch(type) {
      case 'addComponent':
        change = Utils.generateFormChange('add', { component, parent, path, index} as any);
        break;
      case 'saveComponent':
        let previousForm = this.updatedForm.components.length ? this.updatedForm : this.form;
        change = Utils.generateFormChange('edit', { component: parent.components[index], originalComponent: previousForm.components[index]} as any);
        break;
      case 'deleteComponent':
        change = Utils.generateFormChange('remove', { component } as any);
    }
    if (change) {
      this.changes.push(change);
    }
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
      formio.saveForm(this.updatedForm).then(() => {
        this.alerts.setAlert({type: 'success', message: 'Successfully updated form'});
      })
      .catch((err) => {
        if (err._id === this.form._id) {
          formio.saveForm(Utils.applyFormChanges(err, this.changes).form).then((newForm) => {
            this.form = newForm;
            this.alerts.setAlert({type: 'info', message: 'This form has been modified by another user. All form changes have been merged and saved'});
          })
        } 
        else if (err === 'Unauthorized') {
          this.alerts.setAlert({type: 'danger', message: "You don't have permission to edit the form"});
        }
        else {
          this.alerts.setAlert({type: 'danger', message: `Could not edit the form: ${err}`});
        }
      })
    }
  }
}
