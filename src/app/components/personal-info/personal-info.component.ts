import { NgClass, NgStyle } from '@angular/common';
import { Component, HostListener, AfterViewInit, ViewChild, ElementRef, HostBinding, computed, signal } from '@angular/core';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss'],
    imports: [NgClass, NgStyle]
})
export class PersonalInfoComponent implements AfterViewInit {
    prevScrollY = signal<number>(0);
    window = window;
    @HostBinding('class.out') isOut: boolean = false;
    @HostListener('window:scroll', ['$event'])     
    
    onScroll(event: any){       
        if(this.isAfterViewInit){
            if(window.scrollY > 0 && window.scrollY < 3 * this.earthScrollPosition){
                this.isScrolled = true;
                // going down
                if(this.prevScrollY() < window.scrollY){
                    if(window.scrollY < this.earthScrollPosition){
                        window.scrollTo({top: this.earthScrollPosition, behavior: 'smooth'});
                    }

                    if(this.window.scrollY > this.earthScrollPosition){
                        this.isOut = true;
                    }
                }
                // going up
                else{
                    if(window.scrollY < (this.earthScrollPosition - 10)){
                        this.isOut = false;
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    } else if (window.scrollY > this.earthScrollPosition){
                        window.scrollTo({top: this.earthScrollPosition, behavior: 'smooth'});
                    }
                }
            } else{
                this.isScrolled = false;
            }
        }

        this.prevScrollY.set(window.scrollY);
    }

    get earthScrollPosition(){
        return (window.innerHeight / 2);
    }
    
    isScrolled: boolean = false;
    isAfterViewInit: boolean = false;
    @ViewChild('earth') earthEl!: ElementRef;
    scrollPercentage = computed(()=>Math.min((this.prevScrollY() / this.earthScrollPosition) * 100, 100));
    ngAfterViewInit(): void {
        window.scrollTo({top: 0});      
        this.isAfterViewInit = true;       
    }
}
