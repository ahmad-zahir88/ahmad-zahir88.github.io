import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-curriculum-vitae',
    templateUrl: './curriculum-vitae.component.html',
    styleUrls: ['./curriculum-vitae.component.scss'],
    imports: [NgClass]
})
export class CurriculumVitaeComponent {
  is1Rotated: boolean = false;
  is2Rotated: boolean = false;
  is3Rotated: boolean = false;

  get scrollPosition(){
    return window.innerHeight * 1.5;
  }
}
