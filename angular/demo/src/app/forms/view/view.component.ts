import { Component } from '@angular/core';
import { FormViewComponent } from '@formio/enterprise-builder/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent extends FormViewComponent {
  public mobileView: boolean = false;
}
