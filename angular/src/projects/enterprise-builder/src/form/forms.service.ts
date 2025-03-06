import { Injectable } from '@angular/core';
import { FormService } from '@formio/enterprise-builder-core';
import { Formio } from '@formio/js/sdk';
import { EnterpriseBuilderService } from '../enterprise-builder.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService extends FormService {
  constructor(public appService: EnterpriseBuilderService) {
    super(appService);
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
}
