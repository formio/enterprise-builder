import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { FormsService } from './forms.service';
export const formResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: FormsService = inject(FormsService),
  router: Router = inject(Router)
) => {
  return service.app.loadProject().then(() => service.loadForm(route.paramMap.get('formId')).catch(() => {
    router.navigate(['..']);
  }));
};
