import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAlertsService } from './app.alerts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormioAppConfig } from '@formio/angular';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import {
    EnterpriseBuilderAppConfig,
    ENTERPRISE_BUILDER_CONFIG,
    EnterpriseBuilderAlerts
} from '@formio/enterprise-builder/angular';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideToastr(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: ENTERPRISE_BUILDER_CONFIG, useValue: AppConfig},
    {provide: FormioAppConfig, useClass: EnterpriseBuilderAppConfig},
    {provide: EnterpriseBuilderAlerts, useClass: AppAlertsService},
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }},
    FormioAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
