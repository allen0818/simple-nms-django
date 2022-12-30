import { SharedMaterialModule } from './shared-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    // FlexLayoutModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
  ]
})
export class SharedModule { }
