import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { EnterpriseBuilderAlerts, Alert } from '@formio/enterprise-builder/angular';

@Injectable({
    providedIn: 'root'
})
export class AppAlertsService extends EnterpriseBuilderAlerts {
    constructor(public toastr: ToastrService) {
        super();
    }

    override add(alert: Alert) {
        this.toastr[alert.level](alert.message, alert.title);
        super.add(alert);
    }
}