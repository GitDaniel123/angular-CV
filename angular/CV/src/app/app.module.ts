import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescriptionComponent } from './views/description/description.component';
import { ExpirencesComponent } from './views/expirences/expirences.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DescriptionComponent,
    ExpirencesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
