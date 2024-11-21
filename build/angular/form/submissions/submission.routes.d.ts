import { Routes } from "@angular/router";
export interface SubmissionRouteConfig {
    index?: any;
    submission?: any;
    view?: any;
    edit?: any;
    delete?: any;
}
export declare function SubmissionRoutes(config?: SubmissionRouteConfig): Routes;
