import { Component } from '@angular/core';
import { FormsService } from '../../forms.service';

@Component({
  selector: 'form-submission-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  standalone: false
})
export class FormSubmissionViewComponent {
  constructor(public service: FormsService) {}
}
