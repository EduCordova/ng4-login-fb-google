import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthenticationService} from "./services/authentication.service";
export const firebaseConfig = {
  apiKey: "AIzaSyA13EvNhEuLGjYjSFHZ9qY7FepUJTc41HU",
  authDomain: "project-6005624751915120847.firebaseapp.com",
  databaseURL: "https://project-6005624751915120847.firebaseio.com",
  storageBucket: "project-6005624751915120847.appspot.com",
  messagingSenderId: "916238253724"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
