import { Inject, Injectable, InjectionToken } from "@angular/core";
import { FormioAppConfig } from "@formio/angular";
import { Formio } from '@formio/js';
import * as i0 from "@angular/core";
export const ENTERPRISE_BUILDER_CONFIG = new InjectionToken('ENTERPRISE_BUILDER_CONFIG');
export class EnterpriseBuilderAppConfig extends FormioAppConfig {
    license = '';
    projectUrl = '';
    baseUrl = '';
    tag = '';
    icons = '';
    config = {};
    showData = false;
    constructor(config) {
        super({
            appUrl: config.projectUrl,
            apiUrl: config.baseUrl
        });
        Formio.license = config.license;
        this.license = config.license;
        this.projectUrl = config.projectUrl;
        this.baseUrl = config.baseUrl;
        this.tag = config.tag;
        this.icons = config.icons;
        this.config = config.config;
        this.showData = config.showData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: EnterpriseBuilderAppConfig, deps: [{ token: ENTERPRISE_BUILDER_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: EnterpriseBuilderAppConfig });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: EnterpriseBuilderAppConfig, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ENTERPRISE_BUILDER_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJwcmlzZS1idWlsZGVyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZW50ZXJwcmlzZS1idWlsZGVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBR3BDLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLElBQUksY0FBYyxDQUEwQiwyQkFBMkIsQ0FBQyxDQUFDO0FBR2xILE1BQU0sT0FBTywwQkFBMkIsU0FBUSxlQUFlO0lBQ3BELE9BQU8sR0FBVyxFQUFFLENBQUM7SUFDckIsVUFBVSxHQUFXLEVBQUUsQ0FBQztJQUN4QixPQUFPLEdBQVcsRUFBRSxDQUFDO0lBQ3JCLEdBQUcsR0FBVyxFQUFFLENBQUM7SUFDakIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixNQUFNLEdBQVEsRUFBRSxDQUFDO0lBQ2pCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDakMsWUFBK0MsTUFBK0I7UUFDMUUsS0FBSyxDQUFDO1lBQ0YsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQ3pCLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7dUdBckJRLDBCQUEwQixrQkFRZix5QkFBeUI7MkdBUnBDLDBCQUEwQjs7MkZBQTFCLDBCQUEwQjtrQkFEdEMsVUFBVTs7MEJBU00sTUFBTTsyQkFBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1pb0FwcENvbmZpZyB9IGZyb20gXCJAZm9ybWlvL2FuZ3VsYXJcIjtcbmltcG9ydCB7IEZvcm1pbyB9IGZyb20gJ0Bmb3JtaW8vanMnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZUJ1aWxkZXJDb25maWcgfSBmcm9tIFwiQGZvcm1pby9lbnRlcnByaXNlLWJ1aWxkZXItY29yZVwiO1xuXG5leHBvcnQgY29uc3QgRU5URVJQUklTRV9CVUlMREVSX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxFbnRlcnByaXNlQnVpbGRlckNvbmZpZz4oJ0VOVEVSUFJJU0VfQlVJTERFUl9DT05GSUcnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudGVycHJpc2VCdWlsZGVyQXBwQ29uZmlnIGV4dGVuZHMgRm9ybWlvQXBwQ29uZmlnIHtcbiAgICBwdWJsaWMgbGljZW5zZTogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHByb2plY3RVcmw6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBiYXNlVXJsOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgaWNvbnM6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICAgIHB1YmxpYyBzaG93RGF0YTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRU5URVJQUklTRV9CVUlMREVSX0NPTkZJRykgY29uZmlnOiBFbnRlcnByaXNlQnVpbGRlckNvbmZpZykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhcHBVcmw6IGNvbmZpZy5wcm9qZWN0VXJsLFxuICAgICAgICAgICAgYXBpVXJsOiBjb25maWcuYmFzZVVybFxuICAgICAgICB9KTtcbiAgICAgICAgRm9ybWlvLmxpY2Vuc2UgPSBjb25maWcubGljZW5zZTtcbiAgICAgICAgdGhpcy5saWNlbnNlID0gY29uZmlnLmxpY2Vuc2U7XG4gICAgICAgIHRoaXMucHJvamVjdFVybCA9IGNvbmZpZy5wcm9qZWN0VXJsO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcuYmFzZVVybDtcbiAgICAgICAgdGhpcy50YWcgPSBjb25maWcudGFnO1xuICAgICAgICB0aGlzLmljb25zID0gY29uZmlnLmljb25zO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZy5jb25maWc7XG4gICAgICAgIHRoaXMuc2hvd0RhdGEgPSBjb25maWcuc2hvd0RhdGE7XG4gICAgfVxufSJdfQ==