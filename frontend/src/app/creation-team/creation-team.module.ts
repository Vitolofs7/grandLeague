import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationTeamPageRoutingModule } from './creation-team-routing.module';

import { CreationTeamPage } from './creation-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationTeamPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreationTeamPage]
})
export class CreationTeamPageModule {}
