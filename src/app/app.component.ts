import { Component } from '@angular/core';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'Ahmad Zahir Rabbani | Personal Website';
}
