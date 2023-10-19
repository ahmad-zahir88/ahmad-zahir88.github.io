import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';



@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalInfoComponent
  ]
})
export class ComponentsModule { }
