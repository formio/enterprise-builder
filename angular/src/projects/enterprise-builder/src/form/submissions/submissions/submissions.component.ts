import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../forms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from '@formio/js/utils';

@Component({
  selector: 'form-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
  standalone: false
})
export class FormSubmissionsComponent implements OnInit {
  public submissionForm: any;
  constructor(
    public service: FormsService,
    public router: Router,
    public route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const submissionFields: any[] = [];
    this.service.resetSubmission();
    Utils.eachComponent(Utils.fastCloneDeep(this.service.form.components), function(component: any, path: string) {
      if (path.indexOf('.') === -1 && component.input && component.tableView) {
        component.key = 'data.' + component.key;
        submissionFields.push(component);
      }
    }, false);
    this.submissionForm = {
      components: [
        {
          fetch : {
            sort: {
              defaultQuery: "created",
              descending: true
            },
            url : this.service.submissionUrl(),
            authenticate : true,
            enableFetch : true
          },
          components : submissionFields,
          type : "datatable",
          key : "submissionDataTab",
          label: "Submission Data Tab",
          itemsPerPage: 25,
          filterable : true,
          sortable : true,
          hideLabel: true,
          enableRowSelect: false
        }
      ]
    };
  }

  onFormio(formio: any) {
    formio.on('rowClick', (row: any) => {
      this.router.navigate([row._id], {relativeTo: this.route});
    });
  }
}
