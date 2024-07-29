import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormioAlerts, FormBuilderComponent } from '@formio/angular';
import { Formio, Utils } from 'formiojs';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { FormBuilderService } from '../../form-builder.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class FormEditComponent implements OnInit {
  @ViewChild('type', {static: false}) formType: ElementRef;
  @ViewChild(FormBuilderComponent, {static: false}) builder: FormBuilderComponent;
  public form: any = {components: []};
  private isChanged: Boolean = false;
  public updatedForm: any = {components: []};
  private changes: Array<any> = [];
  public options: any = {};

  constructor(
    public service: FormBuilderService,
    public alerts: FormioAlerts,
    public route: ActivatedRoute
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

  ngOnInit(): void {
    const currentForm = this.service.currentForm;
    const formId = this.route.parent.snapshot.params['id'];
    if (!currentForm) {
      const formio = new Formio(`${this.service.formio.projectUrl}/form/${formId}`);
      formio.loadForm().then((form) => {
        this.form = form;
        this.formType.nativeElement.value = form.display || 'form';
      })
    } else {
      this.form = currentForm;
      this.formType.nativeElement.value = this.form.display || 'form';
    }
    this.options = this.service.getBuilderOptions();
  }

  onDisplaySelect(event) {
    this.builder.setDisplay(event.target.value);
  }

  onSaveForm() {
    if (this.isChanged) {
      const formio = new Formio(`${this.service.formio.projectUrl}/${this.form.name}`);
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
