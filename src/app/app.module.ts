import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurriculumVitaeComponent,
    PersonalInfoComponent,
    ContactMeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
