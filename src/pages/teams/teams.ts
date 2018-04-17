import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{TeamDetailsPage,TeamHomePage}from '../pages'
import{ELiteApi}from '../../shared/shared'
import 'rxjs'
 import{Observable}from 'rxjs/Observable';
 import * as _ from 'lodash';
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
  private allTeams:any;
  private allTeamsDivisions:any;

  teams=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController:LoadingController, public eliteApp:ELiteApi) { }

  ionViewDidLoad() {
    let selectedTournament=this.navParams.data;
   let loader=this.loadingController.create({
     content:"loading teams ..."
   })

   loader.present().then(()=>{
    this.eliteApp.getTournamentData(selectedTournament.id).subscribe(data=>{
      this.allTeams=data.teams;
      this.allTeamsDivisions=_.chain(data.teams)
                              .groupBy('division')
                              .toPairs()
                              .map(item=>_.zipObject(['divisionName','divisionTeams'],item))
                              .value();

      this.teams=this.allTeamsDivisions;
     console.log('division name',this.teams)
      
      loader.dismiss();
    })
   })
   
  }

  itemSelected($event,team):void{
    this.navCtrl.push(TeamHomePage,team)
  }


}
