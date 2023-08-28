import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseBuilderLoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    EnterpriseBuilderLoaderComponent
  ],
  exports: [
    EnterpriseBuilderLoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnterpriseBuilderLoaderModule { }
