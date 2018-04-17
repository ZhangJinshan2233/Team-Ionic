import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage } from "../tournaments/tournaments";
import { ELiteApi } from '../../shared/shared';
import { TeamHomePage } from '../pages';

/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {
  favourites: any = [
    {
      team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
      tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hoops Chanllenge'
    }
  ]

  constructor(private navCtrl: NavController, 
    public loaderContrl:LoadingController,
    public eliteApp:ELiteApi, public navParams: NavParams) {

    console.log(this.favourites[0].team.name)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  gotoTournaments() {
    this.navCtrl.push(TournamentsPage)
  }

  favouriteTapped($event, favourite) {
  let loader=this.loaderContrl.create({
  content:"Getting data ...",
  dismissOnPageChange:true
  });

  loader.present();
  this.eliteApp.getTournamentData(favourite.tournamentId).subscribe(data=>{
    this.navCtrl.push(TeamHomePage,favourite.team)
  })
  }
}
