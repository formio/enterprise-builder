import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormsService } from './forms.service';
export const formsResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  service: FormsService = inject(FormsService)
) => {
  return service.app.loadProject().then(() => service.loadForms());
};
