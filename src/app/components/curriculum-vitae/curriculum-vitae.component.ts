import { Component, ElementRef, AfterViewInit, signal, ViewChild, computed } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-curriculum-vitae',
    templateUrl: './curriculum-vitae.component.html',
    styleUrls: ['./curriculum-vitae.component.scss'],
    imports: [NgStyle]
})
export class CurriculumVitaeComponent implements AfterViewInit{
  is1Rotated: boolean = false;
  is2Rotated: boolean = false;
  is3Rotated: boolean = false;

  planetWidth = signal<number>(0);
  transformOriginStyle = computed<{'transform-origin' : string }>(
    ()=>({ 'transform-origin' : `center center -${this.planetWidth()/2}px` })
  );
  @ViewChild('planets') planetsGrid!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(){
    const observer = new ResizeObserver((entries)=>{
      this.planetWidth.set(entries[0].contentRect.width / 2);
      console.log(this.planetWidth());
    });

    observer.observe(this.planetsGrid.nativeElement);
  }

}
