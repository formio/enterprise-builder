import { Injectable } from "@angular/core";
import { AlertService } from "@formio/enterprise-builder-core";
@Injectable({
    providedIn: 'root'
})
export class EnterpriseBuilderAlerts extends AlertService {}