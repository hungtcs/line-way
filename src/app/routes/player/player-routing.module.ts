import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameEntranceComponent } from './game-entrance/game-entrance.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '0',
  },
  {
    path: ':index',
    component: GameEntranceComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class PlayerRoutingModule {

}
