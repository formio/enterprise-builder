import { Injectable } from '@angular/core';
import { FormService } from '@formio/enterprise-builder-core';
import { Formio } from '@formio/js/sdk';
import { EnterpriseBuilderService } from '../enterprise-builder.service';
import * as i0 from "@angular/core";
import * as i1 from "../enterprise-builder.service";
export class FormsService extends FormService {
    appService;
    constructor(appService) {
        super(appService);
        this.appService = appService;
    }
    initializeFormModule() {
        const currentProject = this.app.currentProject;
        if (!currentProject.public.formModule) {
            return null;
        }
        let formModule = null;
        let builderOptions = null;
        try {
            formModule = Formio.Evaluator.evaluate(`return ${currentProject.public.formModule}`);
        }
        catch (err) {
            console.warn(err);
        }
        if (formModule && formModule.options?.builder) {
            if (this.builderOptions?.builder) {
                builderOptions = {
                    ...(formModule.options?.builder?.builder ?? {}),
                    ...this.builderOptions.builder,
                };
                formModule.options.builder.builder = builderOptions;
            }
            Formio.use(formModule);
        }
        return builderOptions;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsService, deps: [{ token: i1.EnterpriseBuilderService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.EnterpriseBuilderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBS3pFLE1BQU0sT0FBTyxZQUFhLFNBQVEsV0FBVztJQUN4QjtJQUFuQixZQUFtQixVQUFvQztRQUNyRCxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFERCxlQUFVLEdBQVYsVUFBVSxDQUEwQjtJQUV2RCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQztZQUNELFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBQ0QsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDNUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUMvQixjQUFjLEdBQUc7b0JBQ2IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7b0JBQy9DLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPO2lCQUNqQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7WUFDeEQsQ0FBQztZQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7d0dBaENVLFlBQVk7NEdBQVosWUFBWSxjQUZYLE1BQU07OzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICdAZm9ybWlvL2VudGVycHJpc2UtYnVpbGRlci1jb3JlJztcbmltcG9ydCB7IEZvcm1pbyB9IGZyb20gJ0Bmb3JtaW8vanMvc2RrJztcbmltcG9ydCB7IEVudGVycHJpc2VCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uL2VudGVycHJpc2UtYnVpbGRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybXNTZXJ2aWNlIGV4dGVuZHMgRm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTogRW50ZXJwcmlzZUJ1aWxkZXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoYXBwU2VydmljZSk7XG4gIH1cblxuICBpbml0aWFsaXplRm9ybU1vZHVsZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHRoaXMuYXBwLmN1cnJlbnRQcm9qZWN0O1xuICAgIGlmICghY3VycmVudFByb2plY3QucHVibGljLmZvcm1Nb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGZvcm1Nb2R1bGUgPSBudWxsO1xuICAgIGxldCBidWlsZGVyT3B0aW9ucyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9ybU1vZHVsZSA9IEZvcm1pby5FdmFsdWF0b3IuZXZhbHVhdGUoYHJldHVybiAke2N1cnJlbnRQcm9qZWN0LnB1YmxpYy5mb3JtTW9kdWxlfWApO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgIH1cbiAgICBpZiAoZm9ybU1vZHVsZSAmJiBmb3JtTW9kdWxlLm9wdGlvbnM/LmJ1aWxkZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVpbGRlck9wdGlvbnM/LmJ1aWxkZXIpIHtcbiAgICAgICAgICAgIGJ1aWxkZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIC4uLihmb3JtTW9kdWxlLm9wdGlvbnM/LmJ1aWxkZXI/LmJ1aWxkZXIgPz8ge30pLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuYnVpbGRlck9wdGlvbnMuYnVpbGRlcixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3JtTW9kdWxlLm9wdGlvbnMuYnVpbGRlci5idWlsZGVyID0gYnVpbGRlck9wdGlvbnM7XG4gICAgICAgIH1cblxuICAgICAgICBGb3JtaW8udXNlKGZvcm1Nb2R1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBidWlsZGVyT3B0aW9ucztcbiAgfVxufVxuIl19