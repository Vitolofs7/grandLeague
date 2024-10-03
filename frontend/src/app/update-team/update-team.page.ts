import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.page.html',
  styleUrls: ['./update-team.page.scss'],
})
export class UpdateTeamPage implements OnInit {

  team: any = {};

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID del equipo:', id);
    if (id) {
      this.loadTeam(id);
    } else {
      console.error("ID no válido o no proporcionado.");
    }
  }

  loadTeam(id: string) {
    this.teamService.getTeamById(id).subscribe(
      (data: any) => {
        this.team = data;
      },
      (error: any) => {
        console.error('Error al cargar los datos del equipo:', error);
      }
    );
  }

  updateTeam() {
    console.log('Datos del equipo a actualizar:', this.team);
    this.teamService.update(this.team.id, this.team).subscribe(
      (response: any) => {
        console.log('Equipo actualizado exitosamente:', response);
        this.router.navigate(['/team-list']);
      },
      (error: any) => {
        console.error('Error al actualizar el equipo:', error);
      }
    );
  }

  goHome() {
    this.router.navigateByUrl("/");
  }
}
