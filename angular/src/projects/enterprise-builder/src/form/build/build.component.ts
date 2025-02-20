import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { get } from 'lodash';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';
import { Form } from '@formio/core/types';

@Component({
  selector: 'form-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class FormBuildComponent implements OnInit, AfterViewInit {
  @ViewChild(FormioBuilder) builder: FormioBuilder;
  @ViewChild('warningModal') modalElement: ElementRef;
  private modalInstance: Modal;
  public formConfig: any = {data: {
    title: '',
    display: 'form'
  }}

  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  ngOnInit(): void {
    this.service.resetForm();
  }

  ngAfterViewInit(): void {
    if (this.modalElement) {
      this.modalInstance = new Modal(this.modalElement.nativeElement);
    }
  }

  configChange(event) {
    if (
      event.changed && 
      event.changed.component &&
      event.changed.component.key === 'display'
    ) {
      this.service.form.display = this.formConfig.data.display;
      this.builder.builder.options = this.service.builderOptions;
      this.builder.builder.setDisplay(this.formConfig.data.display);
    }
  }

  configForm() {
    return {
      components: [
        {
          "columns": [
            {
              "components": [
                {
                  "label": "Title",
                  "placeholder": "Form Title",
                  "hideLabel": true,
                  "applyMaskOn": "change",
                  "tableView": true,
                  "validateWhenHidden": false,
                  "key": "title",
                  "type": "textfield",
                  "input": true
                }
              ],
              "width": 8,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 8
            },
            {
              "components": [
                {
                  "label": "Display",
                  "widget": "choicesjs",
                  "placeholder": "Display as",
                  "tableView": true,
                  "hideLabel": true,
                  "data": {
                    "values": [
                      {
                        "label": "Form",
                        "value": "form"
                      },
                      {
                        "label": "Wizard",
                        "value": "wizard"
                      },
                      {
                        "label": "PDF",
                        "value": "pdf"
                      }
                    ]
                  },
                  "validateWhenHidden": false,
                  "key": "display",
                  "type": "select",
                  "input": true
                }
              ],
              "width": 4,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "size": "md",
              "currentWidth": 4
            }
          ],
          "key": "columns",
          "type": "columns",
          "input": false,
          "tableView": false
        }
      ]
    }
  }

  onSave(form: Form) {
    this.router.navigate(['..', form._id, 'view'], {relativeTo: this.route});
  }

  saveForm() {
    this.service.builderForm.title = this.formConfig.data.title;
    this.service.builderForm.display = this.formConfig.data.display;
    this.service.saveForm().then((form) => this.onSave(form));
  }

  isPDFattached() {
    return (this.service.builderForm as Form).settings?.pdf;
  }

  removePDF() {
    delete (this.service.builderForm as Form).settings.pdf;
    this.service.builderForm = {...this.service.builderForm};
    this.builder.builder.setDisplay('pdf');
  }

  canClearFields() {
    const builderForm = this.service.builderForm;
    return (builderForm.display === 'pdf'
      && get(builderForm, 'settings.pdf.nonFillableConversionUsed', false))
  }

  clearFields() {
    this.service.builderForm.components = [];
    this.builder.builder.instance.setForm(this.service.builderForm);
    this.modalInstance?.hide();
  }
}
