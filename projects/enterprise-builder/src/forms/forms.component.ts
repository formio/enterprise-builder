import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioAppConfig } from '@formio/angular';
import { FormBuilderService } from '../form-builder.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormioFormsComponent implements AfterViewInit{
  public _forms: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public forms: Observable<Array<any>> = this._forms.asObservable();
  public totalItems:Number = 0;
  public currentPage = 1;
  public limit = 10;
  constructor( 
    public service: FormBuilderService,
    public config: FormioAppConfig,
    public route: ActivatedRoute
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

  async setForms(tenants): Promise<void> {
    let forms = [];
    for (let i = 0; i < tenants.length; i++) {
      const tenant = tenants[i];
      try {
        const params = {
          limit: this.limit,
          skip: (this.currentPage * this.limit - 10),
          type: 'form'
        }
        const tenantForms = await this.service.formio.loadForms({params});
        this.totalItems = tenantForms.serverCount;
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

  loadForms(tenant = null): void {
    const query = {type: 'tenant'};
    if (tenant) {
      query['_id'] = tenant._id;
    }
    this.service.loadTenants({params: query}).then(async (tenants) => this.setForms(tenants))
  }
  
  pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.loadForms(this.service.currentTenant);
  }
}
