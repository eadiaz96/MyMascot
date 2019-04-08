import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NuevaMascotaPage } from '../pages/nueva-mascota/nueva-mascota';
import { MascotasRegistradasPage } from '../pages/mascotas-registradas/mascotas-registradas';
import { SignInPage } from '../pages/sign-in/sign-in';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyBmy6xxqGcGKFWaf36zOZdmlCEtK5WpU6Q",
    authDomain: "mymascot-5644c.firebaseapp.com",
    databaseURL: "https://mymascot-5644c.firebaseio.com",
    projectId: "mymascot-5644c",
    storageBucket: "mymascot-5644c.appspot.com",
    messagingSenderId: "974807305567"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NuevaMascotaPage,
    MascotasRegistradasPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'mymascot'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NuevaMascotaPage,
    MascotasRegistradasPage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
