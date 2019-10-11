import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/public_api';
import { PlayerRoutingModule } from './player-routing.module';
import { GameEntranceComponent } from './game-entrance/game-entrance.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlayerRoutingModule,
  ],
  exports: [
    GameEntranceComponent,
  ],
  declarations: [
    GameEntranceComponent,
  ],
})
export class PlayerModule {

}
