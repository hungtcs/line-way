import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/public_api';
import { PlayerComponent } from './player/player.component';
import { PlayerRoutingModule } from './player-routing.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlayerRoutingModule,
  ],
  declarations: [
    PlayerComponent,
    LoadingComponent,
  ],
})
export class PlayerModule {

}
