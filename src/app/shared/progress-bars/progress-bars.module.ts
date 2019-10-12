import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProgressBarComponent,
  ],
  declarations: [
    ProgressBarComponent,
  ],
})
export class ProgressBarsModule {

}
