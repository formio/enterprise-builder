import { Component } from '@angular/core';
import { FormManagerViewComponent, FormManagerService, FormManagerConfig } from '@formio/angular/manager';
import { FormioAuthService } from '@formio/angular/auth';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'lib-view',
  templateUrl: './view.component.html'
})
export class FormViewComponent extends FormManagerViewComponent {

  constructor(
    public serviceManager: FormManagerService,
    public router: Router,
    public route: ActivatedRoute,
    public config: FormManagerConfig,
    public auth: FormioAuthService
  ) {
    super(serviceManager, router, route, config, auth);
  }

}
