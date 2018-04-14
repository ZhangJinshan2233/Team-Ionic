import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{TeamDetailsPage,TeamHomePage}from '../pages'
import{ELiteApi}from '../../shared/shared'
import 'rxjs'

 import{Observable}from 'rxjs/Observable';
/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController:LoadingController, public eliteApp:ELiteApi) {
   

    
  }

  ionViewDidLoad() {
    let selectedTournament=this.navParams.data;
   let loader=this.loadingController.create({
     content:"loading teams ..."
   })

   loader.present().then(()=>{
    this.eliteApp.getTournamentData(selectedTournament.id).subscribe(data=>{
      this.teams=data.teams;
      loader.dismiss();
    })
   })
   
  }
  itemSelected($event,team):void{
    this.navCtrl.push(TeamHomePage,team)
  }


}
