import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormioModule} from '@formio/angular';
import { FormEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    FormComponent,
    FormEditComponent
  ],
  imports: [
    CommonModule,
    FormioModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: FormComponent,
        children: [
          {
            path: '',
            redirectTo: 'edit',
            pathMatch: 'full'
          },
          {
            path: 'edit',
            component: FormEditComponent
          }
        ]
      }
    ])
  ],
  providers: []
})
export class FormModule { }
