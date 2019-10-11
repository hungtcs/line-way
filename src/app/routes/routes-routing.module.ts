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
    path: 'designer',
    loadChildren: () => import('./designer/designer.module').then(module => module.DesignerModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesRoutingModule {

}
