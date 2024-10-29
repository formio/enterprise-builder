import { Injectable } from '@angular/core';
import { FormService } from '@formio/enterprise-builder-core';
import { EnterpriseBuilderService } from '../enterprise-builder.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService extends FormService {
  constructor(public appService: EnterpriseBuilderService) {
    super(appService);
  }
}