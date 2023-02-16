import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BoxComponent } from './pages/box/box.component';
import { EventComponent } from './pages/event/event.component';
import { MembresComponent } from './pages/membres/membres.component';
import { PublicationComponent } from './pages/publication/publication.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BoxComponent,
    EventComponent,
    PublicationComponent,
    MembresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
