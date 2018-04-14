import {Injectable} from '@angular/core';

import{HttpModule, Http}from '@angular/http';
 import 'rxjs'
 import { map } from 'rxjs/operators';
 import{Observable}from 'rxjs/Observable';
@Injectable()
export class ELiteApi{
    currentTournament:any={};
    public baseUrl="https://elite-schedule-app-9de93.firebaseio.com"
    constructor(private http :Http){}
    getTournaments(){
        return new Promise(resolve=>{
            this.http.get(`${this.baseUrl}/tournaments.json`) //use `` not''
            .subscribe(res=>resolve(res.json()))
        })
    }

    getTournamentData(tournamentId):Observable<any>{
            return this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}.json`)
                        .map((response)=>{
                                this.currentTournament=response.json();//json()not json
                            return this.currentTournament;
                            
                        })
    }
}