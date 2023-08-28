import { Component } from '@angular/core';
import { FormBuilderService } from '../../form-builder.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(
    public service: FormBuilderService
    ) {};
}
