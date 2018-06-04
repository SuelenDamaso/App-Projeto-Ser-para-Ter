import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'


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
import { NossosPageModule } from '../pages/nossos/nossos.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    InformaçõesPageModule, 
    NossosPageModule, 
    HttpModule,
    HttpClientModule,
    AvisosPageModule,
    ContatoPageModule,
    ColaboradorPageModule,
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
  
  ]
})
export class AppModule {}

