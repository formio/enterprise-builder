import { NgModule } from "@angular/core";
import { EnterpriseBuilderAlerts } from "./enterprise-builder.alerts";
import { EnterpriseBuilderService } from "./enterprise-builder.service";
@NgModule({
    providers: [
        EnterpriseBuilderService,
        EnterpriseBuilderAlerts
    ]
})
export class EnterpriseBuilderModule {}