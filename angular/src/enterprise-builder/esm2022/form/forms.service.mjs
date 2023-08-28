import { Injectable } from '@angular/core';
import { FormService } from '@formio/enterprise-builder-core';
import { EnterpriseBuilderService } from '../enterprise-builder.service';
import * as i0 from "@angular/core";
import * as i1 from "../enterprise-builder.service";
export class FormsService extends FormService {
    appService;
    constructor(appService) {
        super(appService);
        this.appService = appService;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormsService, deps: [{ token: i1.EnterpriseBuilderService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: FormsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.EnterpriseBuilderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2VudGVycHJpc2UtYnVpbGRlci9zcmMvZm9ybS9mb3Jtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFLekUsTUFBTSxPQUFPLFlBQWEsU0FBUSxXQUFXO0lBQ3hCO0lBQW5CLFlBQW1CLFVBQW9DO1FBQ3JELEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQURELGVBQVUsR0FBVixVQUFVLENBQTBCO0lBRXZELENBQUM7dUdBSFUsWUFBWTsyR0FBWixZQUFZLGNBRlgsTUFBTTs7MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJ0Bmb3JtaW8vZW50ZXJwcmlzZS1idWlsZGVyLWNvcmUnO1xuaW1wb3J0IHsgRW50ZXJwcmlzZUJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZW50ZXJwcmlzZS1idWlsZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3Jtc1NlcnZpY2UgZXh0ZW5kcyBGb3JtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOiBFbnRlcnByaXNlQnVpbGRlclNlcnZpY2UpIHtcbiAgICBzdXBlcihhcHBTZXJ2aWNlKTtcbiAgfVxufSJdfQ==