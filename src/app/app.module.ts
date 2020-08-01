import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//component modules
import { MatButtonModule } from '@angular/material/button';
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
import { ChatComponent } from './pages/chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HelpComponent } from './pages/help/help.component';
import { RateDialogComponent } from './rate-dialog/rate-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ChatComponent,
    HelpComponent,
    RateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
