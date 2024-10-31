import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthService } from '@formio/angular/auth';
import { intersection } from 'lodash';
import { EnterpriseBuilderService } from '@formio/enterprise-builder/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Form Builder Demo';
  version: string = VERSION.full;
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
      window.location.reload();
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
