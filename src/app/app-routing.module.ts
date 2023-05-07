import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BoxComponent } from './pages/box/box.component';
import { EventComponent } from './pages/event/event.component';
import { MembresComponent } from './pages/membres/membres.component';
import { PublicationComponent } from './pages/publication/publication.component';
import {CommencerComponent} from "./forms/commencer/commencer.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  //write path for


  { path: '', component: AccueilComponent },
  { path: 'box', component: BoxComponent },
  { path: 'event', component: EventComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'login', component: LoginComponent },
  {path:'commencer', component: CommencerComponent},
  {path:'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
