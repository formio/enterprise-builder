import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { AlertLevel } from '@formio/enterprise-builder-core';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';

export const submissionResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: FormsService = inject(FormsService),
  alerts: EnterpriseBuilderAlerts = inject(EnterpriseBuilderAlerts),
  router: Router = inject(Router)
) => {
  return service.loadSubmission(route.paramMap.get('submissionId')).catch((err: any) => {
    router.navigate(['..']);
  });
};
