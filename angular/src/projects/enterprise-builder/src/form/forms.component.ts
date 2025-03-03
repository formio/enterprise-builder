import { Component } from '@angular/core';
import { FormsService } from './forms.service';
import { Webform } from '@formio/js';

@Component({
  selector: 'enterprise-builder-forms',
  templateUrl: './forms.component.html',
  standalone: false
})
export class FormsComponent {
  constructor (public service: FormsService) {}
  get searchForm() {
    return {
      components: [
        {
          type: 'columns',
          columns: [
            {
              width: 6,
              offset: 0,
              push: 0,
              pull: 0,
              size: 'md',
              components: [
                {
                  type: 'textfield',
                  label: 'Search by Title',
                  input: true,
                  prefix: '<i class="bi bi-search"></i>',
                  hideLabel: true,
                  placeholder: 'Search by Title',
                  key: 'title'
                }
              ]
            },
            {
              width: 4,
              offset: 0,
              push: 0,
              pull: 0,
              size: 'md',
              components: [
                {
                  type: 'tags',
                  label: 'Search by Tags',
                  input: true,
                  hideLabel: true,
                  placeholder: 'Search by Tags',
                  key: 'tags'
                }
              ]
            },
            {
              width: 2,
              offset: 0,
              push: 0,
              pull: 0,
              size: 'md',
              components: [
                {
                  type: 'button',
                  label: 'Search',
                  action: 'event',
                  event: 'search',
                  leftIcon: 'bi bi-search',
                  block: true,
                  input: true,
                  saveOnEnter: true,
                  key: 'search'
                }
              ]
            }
          ]
        }
      ]
    };
  }

  get search() {
    return {data: this.service.searchQuery};
  }

  enableSearch(form: Webform) {
    form.on('search', (data) => this.service.loadForms(data));
  }

  get pageNumbers() {
    return Array.from({ length: this.service.totalPages }, (_, i) => i + 1);
  }
}
