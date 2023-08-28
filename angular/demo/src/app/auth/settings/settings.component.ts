import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioAppConfig, FormioBaseComponent } from '@formio/angular';
import { AlertLevel } from '@formio/enterprise-builder/angular';
import { AppAlertsService } from '../../app.alerts.service';
import { Webform } from '@formio/js';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  form: Webform | undefined;
  codeblock = `import {
  ENTERPRISE_BUILDER_CONFIG,
  EnterpriseBuilderAppConfig 
} from '@formio/enterprise-builder/angular';
...
providers: [
  ...,
  {
    provide: ENTERPRISE_BUILDER_CONFIG,
    useValue: {
      baseUrl: 'https://forms.yoursite.com',
      projectUrl: 'https://forms.yoursite.com/yourproject',
      license: '...',
    }
  },
  {
    provide: FormioAppConfig,
    useClass: EnterpriseBuilderAppConfig
  },
  ...
]`;
  settingsForm = {
    components: [
      {
        "label": "Deployment URL",
        "applyMaskOn": "change",
        "description": "The URL where your Form.io Enterprise API is deployed.",
        "tableView": true,
        "key": "baseUrl",
        "type": "textfield",
        "input": true,
        "placeholder": "https://forms.yoursite.com"
      },
      {
        "label": "Project Endpoint",
        "description": "The endpoint URL for your top-level project hosted in the Deployment URL.",
        "applyMaskOn": "change",
        "tableView": true,
        "key": "projectUrl",
        "type": "textfield",
        "input": true,
        "placeholder": "https://forms.yoursite.com/yourproject"
      },
      {
        "label": "License Key",
        "description": "The license key provided to you from the Form.io Enterprise team.",
        "applyMaskOn": "change",
        "key": "license",
        "type": "textarea",
        "input": true
      }
    ]
  }

  constructor(
    private router: Router,
    public config: FormioAppConfig,
    public alerts: AppAlertsService,
    public route: ActivatedRoute
  ) {
    console.log(this.config);
  }

  onReady(form: FormioBaseComponent) {
    this.form = form.formio;
  }

  saveSettings() {
    const submission: any = this.form?.submission;
    const data = submission?.data || {};
    if (!data.projectUrl || !data.baseUrl) {
      this.alerts.add({
        level: AlertLevel.ERROR, 
        message: 'APP URL and API URL are required'
      });
      return;
    }
    localStorage.setItem('enterpriseBuilderConfig', JSON.stringify(data));
    this.router.navigate(this.route.snapshot.url.length ? ['..', 'login'] : ['auth', 'login'], {
      relativeTo: this.route
    }).then(()=> {
      location.reload();
    });
  }
}
