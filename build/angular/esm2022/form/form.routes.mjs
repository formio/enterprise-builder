import { FormBuildComponent } from './build/build.component';
import { FormViewComponent } from './view/view.component';
import { FormEditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './forms.component';
import { formResolver } from './form.resolver';
import { formsResolver } from './forms.resolver';
import { projectResolver } from './project.resolver';
import { FormDeleteComponent } from './delete/delete.component';
import { FormCompleteComponent } from './complete/complete.component';
import { FormErrorComponent } from './error/error.component';
import { SubmissionRoutes } from './submissions/submission.routes';
import { formGuard } from './form.guard';
import { FormSettingsComponent } from './settings/settings.component';
import { FormChangesComponent } from './changes/changes.component';
import { FormConflictComponent } from './conflict/conflict.component';
export function FormRoutes(config = {}) {
    return [
        {
            path: '',
            component: config.index || FormsComponent,
            resolve: { form: formsResolver },
        },
        {
            path: 'build',
            component: config.build || FormBuildComponent,
            resolve: { project: projectResolver }
        },
        {
            path: ':formId',
            component: config.form || FormComponent,
            resolve: { form: formResolver },
            canDeactivate: [formGuard],
            children: [
                {
                    path: 'view',
                    component: config.view || FormViewComponent
                },
                {
                    path: 'edit',
                    component: config.edit || FormEditComponent
                },
                {
                    path: 'delete',
                    component: config.delete || FormDeleteComponent
                },
                {
                    path: 'changes',
                    component: config.changes || FormChangesComponent
                },
                {
                    path: 'conflict',
                    component: config.conflict || FormConflictComponent
                },
                {
                    path: 'complete',
                    component: config.complete || FormCompleteComponent
                },
                {
                    path: 'error',
                    component: config.error || FormErrorComponent
                },
                {
                    path: 'settings',
                    component: config.settings || FormSettingsComponent
                },
                {
                    path: 'submission',
                    children: SubmissionRoutes(config.submission)
                }
            ]
        }
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vZm9ybS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQXlCLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWtCdEUsTUFBTSxVQUFVLFVBQVUsQ0FBQyxTQUEwQixFQUFFO0lBQ3JELE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksY0FBYztZQUN6QyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO1NBQ2pDO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFJLGtCQUFrQjtZQUM3QyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFO1NBQ3RDO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWE7WUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUMvQixhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLGlCQUFpQjtpQkFDNUM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksaUJBQWlCO2lCQUM1QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxtQkFBbUI7aUJBQ2hEO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFJLG9CQUFvQjtpQkFDbEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLHFCQUFxQjtpQkFDcEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLHFCQUFxQjtpQkFDcEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksa0JBQWtCO2lCQUM5QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUkscUJBQXFCO2lCQUNwRDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7aUJBQzlDO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1CdWlsZENvbXBvbmVudCB9IGZyb20gJy4vYnVpbGQvYnVpbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmb3JtUmVzb2x2ZXIgfSBmcm9tICcuL2Zvcm0ucmVzb2x2ZXInO1xuaW1wb3J0IHsgZm9ybXNSZXNvbHZlciB9IGZyb20gJy4vZm9ybXMucmVzb2x2ZXInO1xuaW1wb3J0IHsgcHJvamVjdFJlc29sdmVyIH0gZnJvbSAnLi9wcm9qZWN0LnJlc29sdmVyJztcbmltcG9ydCB7IEZvcm1EZWxldGVDb21wb25lbnQgfSBmcm9tICcuL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Db21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcGxldGUvY29tcGxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pc3Npb25Sb3V0ZUNvbmZpZywgU3VibWlzc2lvblJvdXRlcyB9IGZyb20gJy4vc3VibWlzc2lvbnMvc3VibWlzc2lvbi5yb3V0ZXMnO1xuaW1wb3J0IHsgZm9ybUd1YXJkIH0gZnJvbSAnLi9mb3JtLmd1YXJkJztcbmltcG9ydCB7IEZvcm1TZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1DaGFuZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFuZ2VzL2NoYW5nZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Db25mbGljdENvbXBvbmVudCB9IGZyb20gJy4vY29uZmxpY3QvY29uZmxpY3QuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtUm91dGVDb25maWcge1xuICAgIGluZGV4PzogYW55O1xuICAgIGJ1aWxkPzogYW55O1xuICAgIGZvcm0/OiBhbnk7XG4gICAgdmlldz86IGFueTtcbiAgICBlZGl0PzogYW55O1xuICAgIGRlbGV0ZT86IGFueTtcbiAgICBjaGFuZ2VzPzogYW55O1xuICAgIGNvbmZsaWN0PzogYW55O1xuICAgIHNldHRpbmdzPzogYW55O1xuICAgIGFjY2Vzcz86IGFueTtcbiAgICBjb21wbGV0ZT86IGFueTtcbiAgICBlcnJvcj86IGFueTtcbiAgICBzdWJtaXNzaW9uPzogU3VibWlzc2lvblJvdXRlQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybVJvdXRlcyhjb25maWc6IEZvcm1Sb3V0ZUNvbmZpZyA9IHt9KTogUm91dGVzIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogY29uZmlnLmluZGV4IHx8IEZvcm1zQ29tcG9uZW50LFxuICAgICAgcmVzb2x2ZTogeyBmb3JtOiBmb3Jtc1Jlc29sdmVyIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnYnVpbGQnLFxuICAgICAgY29tcG9uZW50OiBjb25maWcuYnVpbGQgfHwgRm9ybUJ1aWxkQ29tcG9uZW50LFxuICAgICAgcmVzb2x2ZTogeyBwcm9qZWN0OiBwcm9qZWN0UmVzb2x2ZXIgfVxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJzpmb3JtSWQnLFxuICAgICAgY29tcG9uZW50OiBjb25maWcuZm9ybSB8fCBGb3JtQ29tcG9uZW50LFxuICAgICAgcmVzb2x2ZTogeyBmb3JtOiBmb3JtUmVzb2x2ZXIgfSxcbiAgICAgIGNhbkRlYWN0aXZhdGU6IFtmb3JtR3VhcmRdLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICd2aWV3JyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZy52aWV3IHx8IEZvcm1WaWV3Q29tcG9uZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnZWRpdCcsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcuZWRpdCB8fCBGb3JtRWRpdENvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ2RlbGV0ZScsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcuZGVsZXRlIHx8IEZvcm1EZWxldGVDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdjaGFuZ2VzJyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZy5jaGFuZ2VzIHx8IEZvcm1DaGFuZ2VzQ29tcG9uZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnY29uZmxpY3QnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnLmNvbmZsaWN0IHx8IEZvcm1Db25mbGljdENvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ2NvbXBsZXRlJyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZy5jb21wbGV0ZSB8fCBGb3JtQ29tcGxldGVDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdlcnJvcicsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcuZXJyb3IgfHwgRm9ybUVycm9yQ29tcG9uZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnc2V0dGluZ3MnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnLnNldHRpbmdzIHx8IEZvcm1TZXR0aW5nc0NvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ3N1Ym1pc3Npb24nLFxuICAgICAgICAgIGNoaWxkcmVuOiBTdWJtaXNzaW9uUm91dGVzKGNvbmZpZy5zdWJtaXNzaW9uKVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xufSJdfQ==