import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    AddCoursesComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
