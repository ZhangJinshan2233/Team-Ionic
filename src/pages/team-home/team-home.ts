import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{StandingPage,TeamDetailsPage,MyTeamsPage}from '../pages'
/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
    team:any
    teamDetailTab=TeamDetailsPage;
    standingTab=StandingPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
      this.team=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }
    goHome():void{
        //this.navCtrl.push(MyTeamsPage) if use this way, the root page will display back arrow
        this.navCtrl.popToRoot();
      }
}
