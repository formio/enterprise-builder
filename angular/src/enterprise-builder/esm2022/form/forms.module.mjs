import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormBuildComponent } from './build/build.component';
import { FormViewComponent } from './view/view.component';
import { FormEditComponent } from './edit/edit.component';
import { FormioEmbedModule } from '@formio/angular/embed';
import { FormComponent } from './form/form.component';
import { FormsService } from './forms.service';
import { FormDeleteComponent } from './delete/delete.component';
import { FormCompleteComponent } from './complete/complete.component';
import { FormErrorComponent } from './error/error.component';
import { EnterpriseBuilderLoaderModule } from '../loader/loader.module';
import { RouterModule } from '@angular/router';
import { FormSubmissionComponent, FormSubmissionDeleteComponent, FormSubmissionEditComponent, FormSubmissionsComponent, FormSubmissionViewComponent } from './submissions';
import { FormSettingsComponent } from './settings/settings.component';
import { FormChangesComponent } from './changes/changes.component';
import { FormConflictComponent } from './conflict/conflict.component';
import * as i0 from "@angular/core";
export class FormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.3", ngImport: i0, type: FormsModule, declarations: [FormsComponent,
            FormBuildComponent,
            FormViewComponent,
            FormEditComponent,
            FormComponent,
            FormDeleteComponent,
            FormChangesComponent,
            FormConflictComponent,
            FormSettingsComponent,
            FormSubmissionComponent,
            FormSubmissionViewComponent,
            FormSubmissionEditComponent,
            FormSubmissionDeleteComponent,
            FormSubmissionsComponent,
            FormCompleteComponent,
            FormErrorComponent], imports: [CommonModule,
            FormioEmbedModule,
            EnterpriseBuilderLoaderModule,
            RouterModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormsModule, providers: [
            FormsService,
        ], imports: [CommonModule,
            FormioEmbedModule,
            EnterpriseBuilderLoaderModule,
            RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FormsComponent,
                        FormBuildComponent,
                        FormViewComponent,
                        FormEditComponent,
                        FormComponent,
                        FormDeleteComponent,
                        FormChangesComponent,
                        FormConflictComponent,
                        FormSettingsComponent,
                        FormSubmissionComponent,
                        FormSubmissionViewComponent,
                        FormSubmissionEditComponent,
                        FormSubmissionDeleteComponent,
                        FormSubmissionsComponent,
                        FormCompleteComponent,
                        FormErrorComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormioEmbedModule,
                        EnterpriseBuilderLoaderModule,
                        RouterModule
                    ],
                    providers: [
                        FormsService,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZW50ZXJwcmlzZS1idWlsZGVyL3NyYy9mb3JtL2Zvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDJCQUEyQixFQUFFLHdCQUF3QixFQUFFLDJCQUEyQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNLLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQStCdEUsTUFBTSxPQUFPLFdBQVc7dUdBQVgsV0FBVzt3R0FBWCxXQUFXLGlCQTNCcEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQiwyQkFBMkI7WUFDM0IsNkJBQTZCO1lBQzdCLHdCQUF3QjtZQUN4QixxQkFBcUI7WUFDckIsa0JBQWtCLGFBR2xCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsNkJBQTZCO1lBQzdCLFlBQVk7d0dBTUgsV0FBVyxhQUpYO1lBQ1QsWUFBWTtTQUNiLFlBUEMsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQiw2QkFBNkI7WUFDN0IsWUFBWTs7MkZBTUgsV0FBVztrQkE3QnZCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3dCQUMzQiwyQkFBMkI7d0JBQzNCLDZCQUE2Qjt3QkFDN0Isd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQiw2QkFBNkI7d0JBQzdCLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFlBQVk7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkQ29tcG9uZW50IH0gZnJvbSAnLi9idWlsZC9idWlsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2VkaXQvZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvRW1iZWRNb2R1bGUgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXIvZW1iZWQnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS9mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuL2Zvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZUJ1aWxkZXJMb2FkZXJNb2R1bGUgfSBmcm9tICcuLi9sb2FkZXIvbG9hZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybVN1Ym1pc3Npb25Db21wb25lbnQsIEZvcm1TdWJtaXNzaW9uRGVsZXRlQ29tcG9uZW50LCBGb3JtU3VibWlzc2lvbkVkaXRDb21wb25lbnQsIEZvcm1TdWJtaXNzaW9uc0NvbXBvbmVudCwgRm9ybVN1Ym1pc3Npb25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXNzaW9ucyc7XG5pbXBvcnQgeyBGb3JtU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtQ2hhbmdlc0NvbXBvbmVudCB9IGZyb20gJy4vY2hhbmdlcy9jaGFuZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtQ29uZmxpY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmZsaWN0L2NvbmZsaWN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZvcm1zQ29tcG9uZW50LFxuICAgIEZvcm1CdWlsZENvbXBvbmVudCxcbiAgICBGb3JtVmlld0NvbXBvbmVudCxcbiAgICBGb3JtRWRpdENvbXBvbmVudCxcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIEZvcm1EZWxldGVDb21wb25lbnQsXG4gICAgRm9ybUNoYW5nZXNDb21wb25lbnQsXG4gICAgRm9ybUNvbmZsaWN0Q29tcG9uZW50LFxuICAgIEZvcm1TZXR0aW5nc0NvbXBvbmVudCxcbiAgICBGb3JtU3VibWlzc2lvbkNvbXBvbmVudCxcbiAgICBGb3JtU3VibWlzc2lvblZpZXdDb21wb25lbnQsXG4gICAgRm9ybVN1Ym1pc3Npb25FZGl0Q29tcG9uZW50LFxuICAgIEZvcm1TdWJtaXNzaW9uRGVsZXRlQ29tcG9uZW50LFxuICAgIEZvcm1TdWJtaXNzaW9uc0NvbXBvbmVudCxcbiAgICBGb3JtQ29tcGxldGVDb21wb25lbnQsXG4gICAgRm9ybUVycm9yQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1pb0VtYmVkTW9kdWxlLFxuICAgIEVudGVycHJpc2VCdWlsZGVyTG9hZGVyTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBGb3Jtc1NlcnZpY2UsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybXNNb2R1bGUge31cbiJdfQ==