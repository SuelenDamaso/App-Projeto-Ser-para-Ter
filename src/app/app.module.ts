import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InformaçõesPageModule } from '../pages/informa\u00E7\u00F5es/informa\u00E7\u00F5es.module';
import { InformaçõesPage } from '../pages/informa\u00E7\u00F5es/informa\u00E7\u00F5es';
import { AvisosPageModule } from '../pages/avisos/avisos.module';
import { ContatoPageModule } from '../pages/contato/contato.module';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ColaboradorPageModule } from '../pages/colaborador/colaborador.module';
import { AvisosProvider } from '../providers/avisos/avisos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFireModule.initializeApp(firebaseConfig),
    InformaçõesPageModule,  
    HttpModule,
    HttpClientModule,
    AvisosPageModule,
    ContatoPageModule,
    ColaboradorPageModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyC3cBBagPL3caH-7Il0uGC43BivlUVPRZY",
    authDomain: "projetoser-3bbb1.firebaseapp.com",
    databaseURL: "https://projetoser-3bbb1.firebaseio.com",
    projectId: "projetoser-3bbb1",
    storageBucket: "projetoser-3bbb1.appspot.com",
   messagingSenderId: "685124965588"
    
  }),
  AngularFireDatabaseModule,
  AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    HttpModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMapsProvider,
    Geolocation,
    GoogleMapsProvider,
    AvisosProvider,
    AngularFireAuth,
  
  ]
})
export class AppModule {}

