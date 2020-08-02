import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopicsComponent } from './topics/topics.component';
import { PeriodComponent } from './period/period.component';
import { LanguageComponent } from './language/language.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
//import { MatGridListModule } from '@angular/material/grid-list'
//import { MatRadioModule } from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    RegisterComponent,
    TopicsComponent,
    PeriodComponent,
    LanguageComponent,
    ProfileComponent,
    ChatComponent,
    HelpComponent,
    HomeComponent,
    RateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    //MatMenuModule,
    //MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatInputModule, MatListModule,
    MatCardModule, MatFormFieldModule, MatDialogModule, ReactiveFormsModule
    //MatGridListModule, MatRadioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
