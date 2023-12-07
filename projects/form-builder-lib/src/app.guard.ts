import {
    CanActivate,
    CanActivateChild,
    Router,
  } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormioAuthService } from '@formio/angular/auth';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: FormioAuthService,
    private router: Router
    ) {}

  async canActivate() {
    const auth = await this.auth.ready.then(() => {
      if (this.auth.authenticated) {
        return true;
      } else {
        this.router.navigate(['/auth/login']);
        return false;
      }
    });
    return auth;
  }
  async canActivateChild() {
    return await this.canActivate();
  }
}
