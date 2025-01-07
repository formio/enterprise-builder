import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../forms.service';

@Component({
  selector: 'form-form',
  templateUrl: './form.component.html',
  standalone: false
})
export class FormComponent {
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
}
