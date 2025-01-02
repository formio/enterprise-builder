import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthService } from '@formio/angular/auth';
import { intersection } from 'lodash';
import { EnterpriseBuilderService } from '@formio/enterprise-builder/angular';
import packageJSON from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Form Builder Demo';
  version: string = VERSION.full;
  appVersion: string = packageJSON.version;
  rendererVersion: string = packageJSON.dependencies['@formio/js'].replace(/[\^\~]/g, '');
  angularVersion: string = packageJSON.dependencies['@formio/angular'].replace(/[\^\~]/g, '');;
  builderVersion: string = packageJSON.dependencies['@formio/enterprise-builder'].replace(/[\^\~]/g, '');;
  premiumVersion: string = packageJSON.dependencies['@formio/premium'].replace(/[\^\~]/g, '');;
  reportingVersion: string = packageJSON.dependencies['@formio/reporting'].replace(/[\^\~]/g, '');;
  copyrightYear = new Date().getFullYear();
  constructor(
    public auth: FormioAuthService,
    private router: Router,
    public service: EnterpriseBuilderService
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  shouldDisplayNavbar(): boolean {
    const navbarRoures = ['auth', 'settings'];
    return this.router.url === '/' || !!intersection(navbarRoures, this.router.url.split('/')).length;
  }
}
