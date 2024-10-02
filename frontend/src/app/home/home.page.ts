import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  teams: Array<any> = [
    {
      teamName: "Manchester City",
      coach: "Pep Guardiola",
      league: "Premier League",
      numberOfPlayers: 25,
    },
    {
      teamName: "Real Madrid",
      coach: "Carlo Ancelotti",
      league: "La Liga",
      numberOfPlayers: 24,
    },
    {
      teamName: "Atletico de Madrid",
      coach: "Diego Simeone",
      league: "La Liga",
      numberOfPlayers: 22,
    },
    {
      teamName: "Bayern Munich",
      coach: "Thomas Tuchel",
      league: "Bundesliga",
      numberOfPlayers: 23,
    },
    {
      teamName: "Liverpool",
      coach: "Jürgen Klopp",
      league: "Premier League",
      numberOfPlayers: 25,
    },
  ];

  constructor(private router:Router) {} 

  goToTeamList(){
    this.router.navigateByUrl("/team-list"); 
  }

  goToCreateTeam(){
    this.router.navigateByUrl("/creation-team");
  }
}
