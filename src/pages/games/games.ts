import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ELiteApi } from '../../shared/shared';
import { TeamHomePage } from '../../pages/pages';
/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  game:any;
  constructor(public navCtrl: NavController, 
    public eliteApi:ELiteApi, public navParams: NavParams) {
      this.game = this.navParams.data[0]
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');

   
  }


  teamTapped(teamId) {
      let tournamentData=this.eliteApi.getCurrentTournament();
      let team=tournamentData.teams.find(team=>team.id===teamId)
      this.navCtrl.push(TeamHomePage,team);
  }
}
