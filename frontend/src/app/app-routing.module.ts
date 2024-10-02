import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'team-list',
    loadChildren: () => import('./team-list/team-list.module').then( m => m.TeamListPageModule)
  },
  {
    path: 'creation-team',
    loadChildren: () => import('./creation-team/creation-team.module').then( m => m.CreationTeamPageModule)
  },
  {
    path: 'update-team',
    loadChildren: () => import('./update-team/update-team.module').then( m => m.UpdateTeamPageModule)
  },
  {
    path: 'update-team/:id',  // Nueva ruta añadida
    loadChildren: () => import('./update-team/update-team.module').then(m => m.UpdateTeamPageModule) // Asegúrate de que la ruta del módulo es correcta
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
