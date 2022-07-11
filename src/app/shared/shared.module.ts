import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    NgbModule,
    MaterialModule
  ]
})
export class SharedModule { }
