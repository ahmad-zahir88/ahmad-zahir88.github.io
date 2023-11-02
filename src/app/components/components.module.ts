import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [
    PersonalInfoComponent,
    CurriculumVitaeComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalInfoComponent,
    CurriculumVitaeComponent,
    ContactMeComponent
  ]
})
export class ComponentsModule { }
