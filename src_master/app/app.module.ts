import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BoxComponent } from './pages/box/box.component';
import { EventComponent } from './pages/event/event.component';
import { MembresComponent } from './pages/membres/membres.component';
import { PublicationComponent } from './pages/publication/publication.component';
import {ReactiveFormsModule} from "@angular/forms";

import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './shared/services/auth.service';


const config = {
  apiKey: "AIzaSyCg0GT1zOm4A01Af8iC6wnvfJQ2UKlT014",
  authDomain: "abpg-canada.firebaseapp.com",
  projectId: "abpg-canada",
  storageBucket: "abpg-canada.appspot.com",
  messagingSenderId: "874035179574",
  appId: "1:874035179574:web:8f79da887545d4b3c46897",
  measurementId: "G-YKJJL5GZ3R"
};
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BoxComponent,
    EventComponent,
    PublicationComponent,
    MembresComponent,

    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
