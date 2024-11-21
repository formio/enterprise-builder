import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';
import { Form } from '@formio/core/types';

@Component({
  selector: 'form-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class FormBuildComponent implements OnInit {
  @ViewChild(FormioBuilder) builder: FormioBuilder;
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

  configChange(event) {
    if (
      event.changed && 
      event.changed.component &&
      event.changed.component.key === 'display'
    ) {
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
}
