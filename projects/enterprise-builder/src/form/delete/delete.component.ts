import { Component } from '@angular/core';
import { FormioAlerts } from '@formio/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormManagerDeleteComponent, FormManagerService } from '@formio/angular/manager';
import { GridService } from '@formio/angular/grid';


@Component({
  selector: 'lib-delete',
  templateUrl: './delete.component.html'
})

export class FormDeleteComponent extends FormManagerDeleteComponent {
  constructor(
    public serviceManager: FormManagerService,
    public router: Router,
    public route: ActivatedRoute,
    public alerts: FormioAlerts,
    public gridService: GridService,
  ) {
    super(serviceManager, router, route, alerts, gridService);
  }
}