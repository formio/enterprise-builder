import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../forms.service';
import { EnterpriseBuilderAlerts } from '../../enterprise-builder.alerts';
export const submissionResolver = (route, state, service = inject(FormsService), alerts = inject(EnterpriseBuilderAlerts), router = inject(Router)) => {
    return service.loadSubmission(route.paramMap.get('submissionId')).catch((err) => {
        router.navigate(['..']);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWlzc2lvbi5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9zdWJtaXNzaW9ucy9zdWJtaXNzaW9uLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUEwRCxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFMUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQW1CLENBQ2hELEtBQTZCLEVBQzdCLEtBQTBCLEVBQzFCLFVBQXdCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFDNUMsU0FBa0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQ2pFLFNBQWlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFDL0IsRUFBRTtJQUNGLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ25GLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvbHZlRm4sIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc1NlcnZpY2UgfSBmcm9tICcuLi9mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCB7IEFsZXJ0TGV2ZWwgfSBmcm9tICdAZm9ybWlvL2VudGVycHJpc2UtYnVpbGRlci1jb3JlJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzIH0gZnJvbSAnLi4vLi4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5cbmV4cG9ydCBjb25zdCBzdWJtaXNzaW9uUmVzb2x2ZXI6IFJlc29sdmVGbjxhbnk+ID0gKFxuICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXG4gIHNlcnZpY2U6IEZvcm1zU2VydmljZSA9IGluamVjdChGb3Jtc1NlcnZpY2UpLFxuICBhbGVydHM6IEVudGVycHJpc2VCdWlsZGVyQWxlcnRzID0gaW5qZWN0KEVudGVycHJpc2VCdWlsZGVyQWxlcnRzKSxcbiAgcm91dGVyOiBSb3V0ZXIgPSBpbmplY3QoUm91dGVyKVxuKSA9PiB7XG4gIHJldHVybiBzZXJ2aWNlLmxvYWRTdWJtaXNzaW9uKHJvdXRlLnBhcmFtTWFwLmdldCgnc3VibWlzc2lvbklkJykpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgIHJvdXRlci5uYXZpZ2F0ZShbJy4uJ10pO1xuICB9KTtcbn07XG4iXX0=