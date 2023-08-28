import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { FormsService } from './forms.service';
import { inject } from '@angular/core';
import { FormComponent } from './form/form.component';
import { EnterpriseBuilderAlerts } from '../enterprise-builder.alerts';
export const formGuard: CanDeactivateFn<unknown> = (
  component: FormComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot,
  service: FormsService = inject(FormsService),
  router: Router = inject(Router)
) => {
  if (service.changed) {
    router.navigate([currentState.url.split('/').slice(0, -1).join('/'), 'changes'], {
      state: { intendedRoute: nextState.url }
    });
    return false;
  }
  service.unloadForm();
  return true;
};
