import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{Nav} from 'ionic-angular';
import{MyTeamsPage,TournamentsPage}from '../pages/pages'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =  MyTeamsPage;
  @ViewChild(Nav) nav: Nav;//why need Nav 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  }

  goHome():void{
    this.nav.push(MyTeamsPage);
  }

  goTournaments():void{
    this.nav.push(TournamentsPage)
  }
}

