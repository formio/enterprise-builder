import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
import { FormEditComponent } from '../edit/edit.component';

@Component({
  selector: 'form-changes',
  templateUrl: './changes.component.html'
})
export class FormChangesComponent extends FormEditComponent {
  private intendedRoute: string | null = null;
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: EnterpriseBuilderAlerts
  ) {
    super(service, router, route, alerts);
    this.intendedRoute = this.router.getCurrentNavigation()?.extras.state?.intendedRoute || null;
  }

  afterCancel() {
    if (this.intendedRoute) {
      this.router.navigate([this.intendedRoute]);
      return;
    }
    super.afterCancel();
  }

  afterSave() {
    if (this.intendedRoute) {
      this.router.navigate([this.intendedRoute]);
      return;
    }
    super.afterSave();
  }
}
