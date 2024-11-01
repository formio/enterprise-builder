import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { ReportService } from './report.service';
export const reportResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: ReportService = inject(ReportService),
  router: Router = inject(Router)
) => {
  return service.loadReport(route.paramMap.get('reportId')).catch(() => router.navigate(['..']));
};
