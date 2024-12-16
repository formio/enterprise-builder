import { Injectable } from '@angular/core';
import { AppService } from '@formio/enterprise-builder-core';
import { Router } from '@angular/router';
import { EnterpriseBuilderAlerts } from './enterprise-builder.alerts';
import { FormioAppConfig } from '@formio/angular';
import * as i0 from "@angular/core";
import * as i1 from "@formio/angular";
import * as i2 from "./enterprise-builder.alerts";
import * as i3 from "@angular/router";
export class EnterpriseBuilderService extends AppService {
    formioConfig;
    alerts;
    router;
    constructor(formioConfig, alerts, router) {
        const config = { ...formioConfig, ...{
                license: formioConfig.license || '',
                projectUrl: formioConfig.projectUrl || formioConfig.appUrl || '',
                baseUrl: formioConfig.baseUrl || formioConfig.apiUrl || '',
            } };
        super(config, alerts);
        this.formioConfig = formioConfig;
        this.alerts = alerts;
        this.router = router;
    }
    async authenticate() {
        try {
            await super.authenticate();
        }
        catch (err) {
            if (err === 'Unauthorized') {
                this.router.navigate([`/auth/login`]);
            }
        }
        return this.currentUser;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderService, deps: [{ token: i1.FormioAppConfig }, { token: i2.EnterpriseBuilderAlerts }, { token: i3.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EnterpriseBuilderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.FormioAppConfig }, { type: i2.EnterpriseBuilderAlerts }, { type: i3.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS1idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9lbnRlcnByaXNlLWJ1aWxkZXIvc3JjL2VudGVycHJpc2UtYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBMkIsTUFBTSxpQ0FBaUMsQ0FBQztBQUV0RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUlsRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsVUFBVTtJQUV6QztJQUNBO0lBQ0E7SUFIWCxZQUNXLFlBQTZCLEVBQzdCLE1BQStCLEVBQy9CLE1BQWM7UUFFckIsTUFBTSxNQUFNLEdBQTRCLEVBQUMsR0FBRyxZQUFZLEVBQUUsR0FBRztnQkFDekQsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPLElBQUksRUFBRTtnQkFDbkMsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxFQUFFO2dCQUNoRSxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLEVBQUU7YUFDN0QsRUFBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQVRmLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBUXpCLENBQUM7SUFFTSxLQUFLLENBQUMsWUFBWTtRQUNyQixJQUFJLENBQUM7WUFDRCxNQUFNLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBQ0QsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNULElBQUksR0FBRyxLQUFLLGNBQWMsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQzt3R0F4QlEsd0JBQXdCOzRHQUF4Qix3QkFBd0IsY0FGckIsTUFBTTs7NEZBRVQsd0JBQXdCO2tCQUhwQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UsIEVudGVycHJpc2VCdWlsZGVyQ29uZmlnIH0gZnJvbSAnQGZvcm1pby9lbnRlcnByaXNlLWJ1aWxkZXItY29yZSc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnQGZvcm1pby9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyB9IGZyb20gJy4vZW50ZXJwcmlzZS1idWlsZGVyLmFsZXJ0cyc7XG5pbXBvcnQgeyBGb3JtaW9BcHBDb25maWcgfSBmcm9tICdAZm9ybWlvL2FuZ3VsYXInO1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRlcnByaXNlQnVpbGRlclNlcnZpY2UgZXh0ZW5kcyBBcHBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGZvcm1pb0NvbmZpZzogRm9ybWlvQXBwQ29uZmlnLFxuICAgICAgICBwdWJsaWMgYWxlcnRzOiBFbnRlcnByaXNlQnVpbGRlckFsZXJ0cyxcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZzogRW50ZXJwcmlzZUJ1aWxkZXJDb25maWcgPSB7Li4uZm9ybWlvQ29uZmlnLCAuLi57XG4gICAgICAgICAgICBsaWNlbnNlOiBmb3JtaW9Db25maWcubGljZW5zZSB8fCAnJyxcbiAgICAgICAgICAgIHByb2plY3RVcmw6IGZvcm1pb0NvbmZpZy5wcm9qZWN0VXJsIHx8IGZvcm1pb0NvbmZpZy5hcHBVcmwgfHwgJycsXG4gICAgICAgICAgICBiYXNlVXJsOiBmb3JtaW9Db25maWcuYmFzZVVybCB8fCBmb3JtaW9Db25maWcuYXBpVXJsIHx8ICcnLFxuICAgICAgICB9fTtcbiAgICAgICAgc3VwZXIoY29uZmlnLCBhbGVydHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTxTdWJtaXNzaW9uPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBzdXBlci5hdXRoZW50aWNhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyID09PSAnVW5hdXRob3JpemVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2F1dGgvbG9naW5gXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXI7XG4gICAgfVxufSJdfQ==