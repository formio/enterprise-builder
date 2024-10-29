import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { FormSubmissionComponent } from './submission/submission.component';
import { FormsService } from '../forms.service';
import { inject } from '@angular/core';
export const submissionGuard: CanDeactivateFn<unknown> = (
  component: FormSubmissionComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot,
  service: FormsService = inject(FormsService),
) => {
  service.unloadSubmission();
  return true;
};
