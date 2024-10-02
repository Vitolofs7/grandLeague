import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.page.html',
  styleUrls: ['./team-list.page.scss'],
})
export class TeamListPage implements OnInit {

  teams: any = []; 

  constructor(private teamService: TeamService,
    private router: Router
  ) { } 

  ngOnInit() {
    this.getAllTeams();
  }

  ionViewWillEnter() {
    console.log("Página de lista de tiendas activada. Actualizando lista...");
    this.getAllTeams(); 
  }

  getAllTeams() {
    this.teamService.getAll().subscribe(data => {
      console.log("Llegaron los datos.")
      console.log(data)
      this.teams = data;
    })
  }

  deleteThis(id: any) {
    this.teamService.delete(id).subscribe(res => {
      this.getAllTeams();
      console.log("Se ha borrado.")
    })
  }

  updateThis(id: any) {
    this.router.navigate(['/update-team', id]);
  }
  goHome() {
    this.router.navigateByUrl("/");
  }

}
