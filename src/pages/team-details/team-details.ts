import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage,GamesPage } from '../pages';
import * as _ from "lodash";
import { ELiteApi } from '../../shared/shared'
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
  games:any[];
  team: any;
  private tournamentData:any;
  constructor(public navCtrl: NavController,
    public eliteApi:ELiteApi, public navParams: NavParams) {

    console.log(this.navParams)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailsPage');
    this.team = this.navParams.data;
    this.tournamentData=this.eliteApi.getCurrentTournament();
    console.log(this.tournamentData.games)
    
    this.games=_.chain(this.tournamentData.games)
               .filter(g=>g.team1Id===this.team.id||g.team2Id===this.team.id)
               .map(g=>{
                let isTeam1=(g.team1Id===this.team.id);
                let opponentName=isTeam1?g.team2:g.team1;
                let scoreDisplay=this.getScoreDisplay(isTeam1,g.team1Score,g.team2Score)
               return{
                 gameId:g.id,
                 opponent:opponentName,
                 time:Date.parse(g.time),
                 location:g.location,
                 locationUrl:g.locationUrl,
                 scoreDisplay:scoreDisplay,
                 homeAway:(isTeam1?"vs.":"at")
               }
               })
               .value();

               console.log(this.games)

  }

  getScoreDisplay(isTeam1,team1Score,team2Score){
    if(team1Score&&team2Score){
      var teamScore=(isTeam1?team1Score:team2Score);
      var opponentScore=(isTeam1?team2Score:team1Score);
      var winIndiccator=teamScore>opponentScore?"W":"L";
      return winIndiccator +teamScore+"-"+opponentScore;
    }else{
      return"";
    }
  }


  gameClicked($event,game){
       let  sourceGame=this.tournamentData.games.filter(g=>g.id===game.gameId);
       this.navCtrl.parent.parent.push(GamesPage,sourceGame)
      
  }
  // goHome() {
  //   this.navCtrl.push(MyTeamsPage)//header will display wrong message
  //   this.navCtrl.popToRoot() this method will not work because this page
  //   is a inner page 

  //  this.navCtrl.parent.parent.popToRoot() this is the right way
  //}


}


