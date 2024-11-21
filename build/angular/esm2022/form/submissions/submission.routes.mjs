import { FormSubmissionDeleteComponent } from "./delete/delete.component";
import { FormSubmissionEditComponent } from "./edit/edit.component";
import { submissionResolver } from "./submission.resolver";
import { FormSubmissionComponent } from "./submission/submission.component";
import { FormSubmissionsComponent } from "./submissions/submissions.component";
import { FormSubmissionViewComponent } from "./view/view.component";
import { submissionGuard } from "./submission.guard";
export function SubmissionRoutes(config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWlzc2lvbi5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2Zvcm0vc3VibWlzc2lvbnMvc3VibWlzc2lvbi5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVXJELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUE4QjtJQUMzRCxPQUFPO1FBQ0g7WUFDRSxJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxJQUFJLHdCQUF3QjtTQUNyRDtRQUNEO1lBQ0UsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLElBQUksdUJBQXVCO1lBQ3hELE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTtZQUMzQyxhQUFhLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDaEMsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLDJCQUEyQjtpQkFDdkQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLElBQUksMkJBQTJCO2lCQUN2RDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSw2QkFBNkI7aUJBQzNEO2FBQ0Y7U0FDRjtLQUNKLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRm9ybVN1Ym1pc3Npb25EZWxldGVDb21wb25lbnQgfSBmcm9tIFwiLi9kZWxldGUvZGVsZXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRm9ybVN1Ym1pc3Npb25FZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgc3VibWlzc2lvblJlc29sdmVyIH0gZnJvbSBcIi4vc3VibWlzc2lvbi5yZXNvbHZlclwiO1xuaW1wb3J0IHsgRm9ybVN1Ym1pc3Npb25Db21wb25lbnQgfSBmcm9tIFwiLi9zdWJtaXNzaW9uL3N1Ym1pc3Npb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3JtU3VibWlzc2lvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9zdWJtaXNzaW9ucy9zdWJtaXNzaW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZvcm1TdWJtaXNzaW9uVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvdmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IHN1Ym1pc3Npb25HdWFyZCB9IGZyb20gXCIuL3N1Ym1pc3Npb24uZ3VhcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdWJtaXNzaW9uUm91dGVDb25maWcge1xuICAgIGluZGV4PzogYW55O1xuICAgIHN1Ym1pc3Npb24/OiBhbnk7XG4gICAgdmlldz86IGFueTtcbiAgICBlZGl0PzogYW55O1xuICAgIGRlbGV0ZT86IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1Ym1pc3Npb25Sb3V0ZXMoY29uZmlnPzogU3VibWlzc2lvblJvdXRlQ29uZmlnKTogUm91dGVzIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgY29tcG9uZW50OiBjb25maWc/LmluZGV4IHx8IEZvcm1TdWJtaXNzaW9uc0NvbXBvbmVudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJzpzdWJtaXNzaW9uSWQnLFxuICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnPy5zdWJtaXNzaW9uIHx8IEZvcm1TdWJtaXNzaW9uQ29tcG9uZW50LFxuICAgICAgICAgIHJlc29sdmU6IHsgc3VibWlzc2lvbjogc3VibWlzc2lvblJlc29sdmVyIH0sXG4gICAgICAgICAgY2FuRGVhY3RpdmF0ZTogW3N1Ym1pc3Npb25HdWFyZF0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogY29uZmlnPy52aWV3IHx8IEZvcm1TdWJtaXNzaW9uVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogJ2VkaXQnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZz8uZWRpdCB8fCBGb3JtU3VibWlzc2lvbkVkaXRDb21wb25lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IGNvbmZpZz8uZGVsZXRlIHx8IEZvcm1TdWJtaXNzaW9uRGVsZXRlQ29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXTtcbn0iXX0=