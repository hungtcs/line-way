import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'player',
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then(module => module.PlayerModule),
  },
  {
    path: '**',
    redirectTo: 'player',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesRoutingModule {

}
