import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../../form-builder.service';
import { FormManagerService } from '@formio/angular/manager';
import { Formio } from 'formiojs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  constructor(
    public service: FormBuilderService,
    public serviceManager: FormManagerService,
    public route: ActivatedRoute,
  ) {};

  ngOnInit(): void {
    if (!this.service.currentTenant) {
      this.service.onTenant.subscribe((tenant) => {
        this.loadCurrentForm();
      })
    } else {
      this.loadCurrentForm();
    }
  }

  loadCurrentForm() {
    const formId = this.route.snapshot.params['id'];
    this.serviceManager.formio = new Formio(`${this.service.formio.projectUrl}/form/${formId}`);
    this.serviceManager.loadForm().then(form => {
      this.serviceManager.formSrc = `${this.service.formio.projectUrl}/form/${formId}`;
      this.service.currentForm = form;
    });
  }
}
