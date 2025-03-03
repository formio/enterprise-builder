import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../../forms.service';

@Component({
  selector: 'form-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss'],
  standalone: false
})
export class FormSubmissionComponent {
  pdfDownload: string = '';
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.service.getDownloadUrl().then((url: string) => (this.pdfDownload = url));
  }

  isChildRoute(path: string) {
    return this.route.children.some((child) => child.snapshot.routeConfig?.path === path);
  }
}
