import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { MyTeamsPage, TournamentsPage,TeamsPage,GamesPage,TeamDetailsPage,TeamHomePage,StandingPage } from '../pages/pages'
import{ELiteApi}from '../shared/shared'
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    GamesPage,
    TeamDetailsPage,
    TeamHomePage,
    StandingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    GamesPage,
    TeamDetailsPage,
    TeamHomePage,
    StandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ELiteApi,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
