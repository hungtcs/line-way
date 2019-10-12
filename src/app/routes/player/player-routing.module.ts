import { NgModule } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { LoadingComponent } from './loading/loading.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoadingComponent,
  },
  {
    path: ':level',
    component: PlayerComponent,
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
