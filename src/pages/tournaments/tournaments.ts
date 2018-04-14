import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
// LoadingController in charge of displaying content which tell user data is Loading
//  before data loaded 
import { MyTeamsPage, TeamsPage } from '../pages';
import { ELiteApi } from '../../shared/shared'
/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
 tournaments:any;
  constructor(public eliteApi:ELiteApi, public navCtrl: NavController, 
    public loaderingControl:LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let loader=this.loaderingControl.create({
      content:"data is loading..."
    })
   

   loader.present().then(()=>{
    this.eliteApi.getTournaments().then(data=>{
      this.tournaments=data;
      loader.dismiss();
    })
   })
  

  }

  // ionViemWillEnter(){
  //   console.log(" ionViemWillEnter")
  // }

  // ionViewWillLeave(){
  //   console.log(" ionViewWillLeave")
  // }

  // ionViewDidUnload(){
  //   console.log(" ionViewDidUnload")
  // }
  itemSelected($event,tournament) {
    this.navCtrl.push(TeamsPage,tournament)
  }
}
