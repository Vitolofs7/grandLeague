import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationTeamPage } from './creation-team.page';

const routes: Routes = [
  {
    path: '',
    component: CreationTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationTeamPageRoutingModule {}
