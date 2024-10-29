import { Routes } from '@angular/router';
import { SubmissionRouteConfig } from './submissions/submission.routes';
export interface FormRouteConfig {
    index?: any;
    build?: any;
    form?: any;
    view?: any;
    edit?: any;
    delete?: any;
    changes?: any;
    conflict?: any;
    settings?: any;
    access?: any;
    complete?: any;
    error?: any;
    submission?: SubmissionRouteConfig;
}
export declare function FormRoutes(config?: FormRouteConfig): Routes;
