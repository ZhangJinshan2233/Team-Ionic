import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../pages'
/**
 * Generated class for the TeamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {
  team: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log(this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailsPage');
  }
  
  // goHome() {
    //   this.navCtrl.push(MyTeamsPage)//header will display wrong message
    //   this.navCtrl.popToRoot() this method will not work because this page
    //   is a inner page 

    //  this.navCtrl.parent.parent.popToRoot() this is the right way
   //}
}
