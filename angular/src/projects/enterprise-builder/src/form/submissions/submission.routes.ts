import { Routes } from "@angular/router";
import { FormSubmissionDeleteComponent } from "./delete/delete.component";
import { FormSubmissionEditComponent } from "./edit/edit.component";
import { submissionResolver } from "./submission.resolver";
import { FormSubmissionComponent } from "./submission/submission.component";
import { FormSubmissionsComponent } from "./submissions/submissions.component";
import { FormSubmissionViewComponent } from "./view/view.component";
import { submissionGuard } from "./submission.guard";

export interface SubmissionRouteConfig {
    index?: any;
    submission?: any;
    view?: any;
    edit?: any;
    delete?: any;
}

export function SubmissionRoutes(config?: SubmissionRouteConfig): Routes {
    return [
        {
          path: '',
          component: config?.index || FormSubmissionsComponent
        },
        {
          path: ':submissionId',
          component: config?.submission || FormSubmissionComponent,
          resolve: { submission: submissionResolver },
          canDeactivate: [submissionGuard],
          children: [
            {
              path: '',
              component: config?.view || FormSubmissionViewComponent
            },
            {
              path: 'edit',
              component: config?.edit || FormSubmissionEditComponent
            },
            {
              path: 'delete',
              component: config?.delete || FormSubmissionDeleteComponent
            }
          ]
        }
    ];
}