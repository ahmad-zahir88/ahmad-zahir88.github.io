import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';



@NgModule({
  declarations: [
    PersonalInfoComponent,
    CurriculumVitaeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalInfoComponent,
    CurriculumVitaeComponent
  ]
})
export class ComponentsModule { }
