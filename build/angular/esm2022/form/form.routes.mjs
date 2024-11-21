import { FormBuildComponent } from './build/build.component';
import { FormViewComponent } from './view/view.component';
import { FormEditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './forms.component';
import { formResolver } from './form.resolver';
import { formsResolver } from './forms.resolver';
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
            component: config.build || FormBuildComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vZm9ybS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBeUIsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBa0J0RSxNQUFNLFVBQVUsVUFBVSxDQUFDLFNBQTBCLEVBQUU7SUFDckQsT0FBTztRQUNMO1lBQ0UsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxjQUFjO1lBQ3pDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDakM7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksa0JBQWtCO1NBQzlDO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWE7WUFDdkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUMvQixhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDMUIsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLGlCQUFpQjtpQkFDNUM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksaUJBQWlCO2lCQUM1QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxtQkFBbUI7aUJBQ2hEO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUFJLG9CQUFvQjtpQkFDbEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLHFCQUFxQjtpQkFDcEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLHFCQUFxQjtpQkFDcEQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksa0JBQWtCO2lCQUM5QztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUkscUJBQXFCO2lCQUNwRDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsUUFBUSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7aUJBQzlDO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1CdWlsZENvbXBvbmVudCB9IGZyb20gJy4vYnVpbGQvYnVpbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1FZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmb3JtUmVzb2x2ZXIgfSBmcm9tICcuL2Zvcm0ucmVzb2x2ZXInO1xuaW1wb3J0IHsgZm9ybXNSZXNvbHZlciB9IGZyb20gJy4vZm9ybXMucmVzb2x2ZXInO1xuaW1wb3J0IHsgRm9ybURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvblJvdXRlQ29uZmlnLCBTdWJtaXNzaW9uUm91dGVzIH0gZnJvbSAnLi9zdWJtaXNzaW9ucy9zdWJtaXNzaW9uLnJvdXRlcyc7XG5pbXBvcnQgeyBmb3JtR3VhcmQgfSBmcm9tICcuL2Zvcm0uZ3VhcmQnO1xuaW1wb3J0IHsgRm9ybVNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNoYW5nZXNDb21wb25lbnQgfSBmcm9tICcuL2NoYW5nZXMvY2hhbmdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbmZsaWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb25mbGljdC9jb25mbGljdC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Sb3V0ZUNvbmZpZyB7XG4gICAgaW5kZXg/OiBhbnk7XG4gICAgYnVpbGQ/OiBhbnk7XG4gICAgZm9ybT86IGFueTtcbiAgICB2aWV3PzogYW55O1xuICAgIGVkaXQ/OiBhbnk7XG4gICAgZGVsZXRlPzogYW55O1xuICAgIGNoYW5nZXM/OiBhbnk7XG4gICAgY29uZmxpY3Q/OiBhbnk7XG4gICAgc2V0dGluZ3M/OiBhbnk7XG4gICAgYWNjZXNzPzogYW55O1xuICAgIGNvbXBsZXRlPzogYW55O1xuICAgIGVycm9yPzogYW55O1xuICAgIHN1Ym1pc3Npb24/OiBTdWJtaXNzaW9uUm91dGVDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtUm91dGVzKGNvbmZpZzogRm9ybVJvdXRlQ29uZmlnID0ge30pOiBSb3V0ZXMge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBjb25maWcuaW5kZXggfHwgRm9ybXNDb21wb25lbnQsXG4gICAgICByZXNvbHZlOiB7IGZvcm06IGZvcm1zUmVzb2x2ZXIgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdidWlsZCcsXG4gICAgICBjb21wb25lbnQ6IGNvbmZpZy5idWlsZCB8fCBGb3JtQnVpbGRDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICc6Zm9ybUlkJyxcbiAgICAgIGNvbXBvbmVudDogY29uZmlnLmZvcm0gfHwgRm9ybUNvbXBvbmVudCxcbiAgICAgIHJlc29sdmU6IHsgZm9ybTogZm9ybVJlc29sdmVyIH0sXG4gICAgICBjYW5EZWFjdGl2YXRlOiBbZm9ybUd1YXJkXSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAndmlldycsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcudmlldyB8fCBGb3JtVmlld0NvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ2VkaXQnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnLmVkaXQgfHwgRm9ybUVkaXRDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdkZWxldGUnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnLmRlbGV0ZSB8fCBGb3JtRGVsZXRlQ29tcG9uZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnY2hhbmdlcycsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcuY2hhbmdlcyB8fCBGb3JtQ2hhbmdlc0NvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ2NvbmZsaWN0JyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZy5jb25mbGljdCB8fCBGb3JtQ29uZmxpY3RDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdjb21wbGV0ZScsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWcuY29tcGxldGUgfHwgRm9ybUNvbXBsZXRlQ29tcG9uZW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAnZXJyb3InLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnLmVycm9yIHx8IEZvcm1FcnJvckNvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJ3NldHRpbmdzJyxcbiAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZy5zZXR0aW5ncyB8fCBGb3JtU2V0dGluZ3NDb21wb25lbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdzdWJtaXNzaW9uJyxcbiAgICAgICAgICBjaGlsZHJlbjogU3VibWlzc2lvblJvdXRlcyhjb25maWcuc3VibWlzc2lvbilcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcbn0iXX0=