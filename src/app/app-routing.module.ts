import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from "./pages/chat/chat.component";
import { HelpComponent } from "./pages/help/help.component";
import { TopicsComponent } from "./pages/topics/topics.component";
import { LanguageComponent } from "./pages/mental health/language.component";
import { PeriodComponent } from "./pages/period/period.component";
import { ProfileComponent } from "./pages/gbv/profile.component";


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'help', component: HelpComponent},
  {path: 'topics', component: TopicsComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'period', component: PeriodComponent},
  {path: 'profile', component: ProfileComponent},


    // otherwise redirect to index
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
