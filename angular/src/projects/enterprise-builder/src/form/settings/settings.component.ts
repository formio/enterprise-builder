import { Component, OnInit } from '@angular/core';
import { FormEditComponent } from '../edit/edit.component';

@Component({
  selector: 'form-settings',
  templateUrl: './settings.component.html'
})
export class FormSettingsComponent extends FormEditComponent implements OnInit {
  public settings: any = {};
  ngOnInit(): void {
    this.settings = {data: {
      title: this.service.builderForm.title,
      name: this.service.builderForm.name,
      path: this.service.builderForm.path,
      tags: this.service.builderForm.tags
    }};
  }
  get settingsForm() {
    return {
      components: [
        {
          type: 'textfield',
          key: 'title',
          label: 'Title',
          validation: {
            required: true
          },
          input: true
        },
        {
          type: 'textfield',
          key: 'name',
          label: 'Name',
          validation: {
            required: true
          },
          input: true
        },
        {
          type: 'textfield',
          key: 'path',
          label: 'API Path',
          validation: {
            required: true
          },
          input: true
        },
        {
          type: 'tags',
          key: 'tags',
          label: 'Tags',
          input: true
        }
      ]
    };
  }
  saveForm() {
    this.service.builderForm.title = this.settings.data.title;
    this.service.builderForm.name = this.settings.data.name;
    this.service.builderForm.path = this.settings.data.path;
    if (this.settings.data.tags) {
      this.service.builderForm.tags = typeof this.settings.data.tags ===  'string'
      ? this.settings.data.tags.split(',').map((tag: string) => tag.trim())
      : this.settings.data.tagss;
    }
    return super.saveForm();
  }
}
