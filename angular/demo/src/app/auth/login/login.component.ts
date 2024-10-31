import { Component } from '@angular/core';
import { FormioAuthLoginComponent, FormioAuthService } from '@formio/angular/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAlertsService } from '../../app.alerts.service';
import { AlertLevel, EnterpriseBuilderService } from '@formio/enterprise-builder/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends FormioAuthLoginComponent {
  constructor(
    service: FormioAuthService,
    public appService: EnterpriseBuilderService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: AppAlertsService
  ) {
    super(service);
    if (
      !this.appService.config.baseUrl || 
      !this.appService.config.projectUrl
    ) {
      this.alerts.add({
        level: AlertLevel.INFO,
        title: 'Welcome to the Form.io Enterprise Builder',
        message: 'Please configure your Formio Enterprise settings to continue.'
      });
      this.router.navigate(['..', 'settings'], { relativeTo: this.route });
    }
  }
}

