import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BoxComponent } from './pages/box/box.component';
import { EventComponent } from './pages/event/event.component';
import { PublicationComponent } from './pages/publication/publication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { MembresComponent } from './pages/membres/membres.component';

const routes: Routes = [
  //write path for
  { path: 'box', component: BoxComponent },
  { path: 'event', component: EventComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'sign-in', component: SignInComponent },
  {path: 'register-user',component: SignUpComponent,},
  {path: 'membres',component: MembresComponent,},
  {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],},
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
