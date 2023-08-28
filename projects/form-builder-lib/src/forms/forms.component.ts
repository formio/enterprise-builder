import { AfterViewInit, Component } from '@angular/core';
import { FormioAppConfig } from '@formio/angular';
import { FormBuilderService } from '../form-builder.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormioFormsComponent implements AfterViewInit{
  public _forms: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public forms: Observable<Array<any>> = this._forms.asObservable();
  constructor( 
    public service: FormBuilderService,
    public config: FormioAppConfig
  ) { };

  ngAfterViewInit(): void {
    if (this.service.currentTenant) {
      this.loadForms(this.service.currentTenant)
    } else {
      this.service.onTenant.subscribe((tenant) => {
        this.loadForms(tenant)
      })
    }
    
  }

  async setForms(tenants) {
    let forms = [];
    for (let i = 0; i < tenants.length; i++) {
      const tenant = tenants[i];
      const formio = new Formio(`${this.config.apiUrl}/${tenant.name}`);
      try {
        const tenantForms = await formio.loadForms({params: {limit: 1000}});
        forms = forms.concat(tenantForms.map((form)=> {
          form.tenant = tenant;
          return form;
        }))
      } catch (error) {
        console.warn(error);
      }
      
    }
    this._forms.next(forms);
  }

  loadForms(tenant = null) {
    const query = {type: 'tenant'};
    if (tenant) {
      query['_id'] = tenant._id;
    }
    this.service.loadTenants({params: query}).then(async (tenants) => this.setForms(tenants))
  }
}
