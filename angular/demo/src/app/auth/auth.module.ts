import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from '@formio/angular/auth';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { FormioModule } from '@formio/angular';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = FormioAuthRoutes({
  auth: AuthComponent,
  login: LoginComponent
});
routes[0].children?.push({
  path: 'settings',
  component: SettingsComponent
});

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormioModule,
    FormioAuth,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
