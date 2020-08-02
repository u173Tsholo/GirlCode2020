import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from '../app/splash/splash.component';
import {LoginComponent} from '../app/login/login.component';
import {RegisterComponent} from '../app/register/register.component';
import { from } from 'rxjs';
import { TopicsComponent } from '../app/topics/topics.component';
import { PeriodComponent } from '../app/period/period.component';
import { LanguageComponent } from '../app/language/language.component';
import { ProfileComponent } from '../app/profile/profile.component';
import {ChatComponent} from '../app/chat/chat.component';
import {HelpComponent} from '../app/help/help.component';
import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
  {path: 'splash', component: SplashComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'topics', component: TopicsComponent},
  {path: 'period', component: PeriodComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'help', component: HelpComponent},
  {path: 'home', component: HomeComponent},

  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: '**', component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
