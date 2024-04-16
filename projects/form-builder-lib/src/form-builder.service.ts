import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAppConfig, Formio } from '@formio/angular';
import { FormioAuthService } from '@formio/angular/auth';

import { Subject } from 'rxjs';

import { Components } from 'formiojs';

import _ from 'lodash';

import { checkLicense } from './licenseCheck';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  public formio: Formio;
  public onTenant: Subject<any> = new Subject();
  public currentForm: any;
  public currentTenant: any;
  public currentReport: any;

  constructor(
    public config: FormioAppConfig,
    public router: Router,
    private auth: FormioAuthService
  ) {
    this.init();
  }

  async init() {
    try {
      await checkLicense();
    } catch (err) {
      if(!err.softFailLicenseExpiration) {
        return;
      }
    }

    await this.auth.ready.then(() => {
      if (this.auth.authenticated) {
        this.loadTenants({ params: { type: 'tenant' } }).then((tenants) => {
          this.setTenant(tenants[0]);
        });
        return true;
      } else {
        this.router.navigate(['/auth/login']);
        return false;
      }
    });
  }

  loadTenants(...args) {
    return Formio.loadProjects(...args)
      .then((tenants) => {
        return tenants;
      })
      .catch((err) => {
        if (err === 'Unauthorized') {
          this.router.navigate([`/auth/login`]);
        }
        return [];
      });
  }

  setTenant(tenant) {
    this.formio = new Formio(`${this.config.apiUrl}/${tenant.name}`);
    this.formio.loadProject().then((projectTenant) => {
      if (projectTenant.public?.custom?.js) {
        const element = document.createElement('script');
        element.setAttribute('type', 'text/javascript');
        element.setAttribute('src', projectTenant.public.custom.js);
        document.head.appendChild(element);
        this.currentTenant = projectTenant;
      }
      this.onTenant.next(projectTenant);
    });
  }

  setForm(form, mode) {
    this.currentForm = form;
    this.formio = new Formio(
      `${this.config.apiUrl}/${this.currentTenant.name}/form/${form._id}`
    );
    this.router.navigate([`/form/${form._id}/${mode}`]);
  }

  setReport(report) {
    this.currentReport = report;
  }

  getBuilderOptions() {
    const options: { builder?: Object; editForm?: Object } = {};
    const { builder, editForm } = this.currentTenant.builderConfig;
    if (builder) {
      options.builder = builder;
    }
    if (editForm && (editForm.hiddenFields || editForm.hiddenTabs)) {
      const customTabs: any = {};
      const { hiddenTabs, hiddenFields } = editForm;
      Object.keys(Components.components).forEach((componentKey) => {
        const settingsTab = [];
        hiddenTabs.forEach((tab) => {
          settingsTab.push({ key: tab.toLowerCase(), ignore: true });
        });
        Object.keys(hiddenFields).forEach((tab) => {
          settingsTab.push({
            key: tab,
            components: hiddenFields[tab].map((field) => ({
              key: field,
              ignore: true,
            })),
          });
        });
        customTabs[componentKey] = settingsTab;
      });
      options.editForm = customTabs;
    } else if (editForm) {
      options.editForm = editForm;
    }
    return options;
  }
}
