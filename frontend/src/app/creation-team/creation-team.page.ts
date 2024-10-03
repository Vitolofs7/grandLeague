import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-creation-team',
  templateUrl: './creation-team.page.html',
  styleUrls: ['./creation-team.page.scss'],
})
export class CreationTeamPage implements OnInit {
  teamForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private teamService: TeamService,
    private route: Router
  ) {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      coach: ['', Validators.required],
      category: ['', Validators.required],
      numberOfPlayers: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {}

  createTeam() {
    if (this.teamForm.valid) {
      console.log('Valid Form: ', this.teamForm.value);
      this.teamService.create(this.teamForm.value).subscribe(response => {
        this.route.navigateByUrl("/team-list");
      });
    } else {
      console.log('Invalid Form');
    }
  }

  getFormControl(field: string) {
    return this.teamForm.get(field);
  }

  goHome() {
    this.route.navigateByUrl("/");
  }

  goToTeamList(){
    this.route.navigateByUrl("/team-list"); 
  }
}
