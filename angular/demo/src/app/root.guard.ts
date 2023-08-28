import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { FormioAuthService } from '@formio/angular/auth';
import { ENTERPRISE_BUILDER_CONFIG, EnterpriseBuilderConfig } from '@formio/enterprise-builder/angular';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate {
  constructor(
    private auth: FormioAuthService,
    private router: Router,
    @Inject(ENTERPRISE_BUILDER_CONFIG) public config: EnterpriseBuilderConfig,
    public route: ActivatedRoute
  ) { }

  async canActivate() {
    return this.auth.ready.then(() => {
      if (this.auth.authenticated) {
        this.router.navigate(['/forms']);
        return false;
      } else {
        if (!this.config.projectUrl || !this.config.baseUrl) {
          return true;
        }
        else {
          this.router.navigate(['/auth/login']);
        }
        return false;
      }
    });
  }
}
