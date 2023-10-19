import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class FormBuilderIndexComponent {
  constructor( 
    public service: FormBuilderService,
    private router: Router,
    ) { 
      service.init()
    };

  navigateTo(path) {
    this.router.navigate([`/${path}`]);
  }
}
