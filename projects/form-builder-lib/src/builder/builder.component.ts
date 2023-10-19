import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormioAppConfig, FormBuilderComponent, FormioAlerts } from '@formio/angular';
import { Router } from '@angular/router';
import { FormBuilderService } from '../form-builder.service';
import { Formio } from 'formiojs';
import _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class FormBuilderNewBuilderComponent implements OnInit{
  @ViewChild(FormBuilderComponent, {static: false}) builder: FormBuilderComponent;
  @ViewChild('title', {static: false}) formTitle: ElementRef;
  public form: any = {};
  public newForm: any = {components: []};
  public updatedForm: {components} = {components: []};
  private tenantName: String = '';
  public options: any = {};

  constructor(
    public service: FormBuilderService,
    public config: FormioAppConfig,
    private router: Router,
    public toastr: ToastrService,
    public alerts: FormioAlerts
  ) {
    this.alerts = new FormioAlerts();
  }

  ngOnInit(): void {
    const currentTenant = this.service.currentTenant;
    if (!currentTenant) {
      this.service.onTenant.subscribe((tenant) => {
        this.tenantName = tenant.name;
      })
    } else {
      this.form = currentTenant;
      this.tenantName = currentTenant.name;
    }
  }

  onChange(event) {
    this.updatedForm = event.form;
    this.alerts.setAlerts([]);
  }

  onSaveForm() {
    this.newForm.title = this.formTitle.nativeElement.value;
    if (!this.newForm.title) {
      this.alerts.setAlert({type: 'danger', message: 'Title is required'});
      return;
    }
    this.newForm.name = _.camelCase(this.newForm.title ).toLowerCase();
    this.newForm.path = this.newForm.name;
    this.newForm.components = this.updatedForm.components;
    const formio = new Formio(`${this.config.apiUrl}/${this.tenantName}`);
    formio.saveForm(this.newForm).then((newForm) => {
      this.toastr.success('Successfully created form!');
      this.router.navigate([`/forms`]);
    })
    .catch((err) => {
      if (err === 'Unauthorized') {
        this.alerts.setAlert({type: 'danger', message: "You don't have permissions to create a form"});
      }
      else {
        this.alerts.setAlert({type: 'danger', message: `Could not create the form: ${err}`});
      }
    })
  }
}
