import { Form } from '@formio/core/types';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { FormBuilder } from '@formio/js';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormioBuilder } from '@formio/angular/embed';

@Component({
  selector: 'form-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class FormEditComponent {
  @ViewChild(FormioBuilder) builder: FormioBuilder;
  public mobileView: boolean = false;
  public formConfig: {data: {display: 'form' | 'wizard' | 'pdf'}} = {data: {
    display: 'form'
  }}
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {}

  configForm() {
    return {
      components: [
        {
          "columns": [
            {
              "components": [],
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
    this.formConfig.data.display = (builder.form as Form).display;
  }

  onDisplaySelect(event) {
    if (event.target?.value) {
      this.builder.builder.setDisplay(this.formConfig.data.display);
    };
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
