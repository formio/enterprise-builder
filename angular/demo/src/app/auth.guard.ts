import {
  ActivatedRoute,
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { FormioAuthService } from '@formio/angular/auth';
import { AppAlertsService } from './app.alerts.service';
import { AlertLevel, ENTERPRISE_BUILDER_CONFIG, EnterpriseBuilderConfig } from '@formio/enterprise-builder/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: FormioAuthService,
    private router: Router,
    @Inject(ENTERPRISE_BUILDER_CONFIG) public config: EnterpriseBuilderConfig,
    public route: ActivatedRoute,
    public alerts: AppAlertsService
  ) { }

  async canActivate() {
    return this.auth.ready.then(() => {
      if (this.auth.authenticated) {
        return true;
      } else {
        if (!this.config.projectUrl || !this.config.baseUrl) {
          this.alerts.add({
            level: AlertLevel.INFO,
            title: 'Welcome to the Form.io Enterprise Builder',
            message: 'Please configure your Formio Enterprise settings to continue.'
          });
          this.router.navigate(['/auth/settings']);
        }
        else {
          this.router.navigate(['/auth/login']);
        }
        return false;
      }
    });
  }
  async canActivateChild() {
    return await this.canActivate();
  }
}
