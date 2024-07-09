import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
    ) { 
      service.init()
    };

  navigateTo(path) {
    this.router.navigate([`./${path}`], { relativeTo: this.route});
  }
}
