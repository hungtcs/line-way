import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconService } from './svg-icon/svg-icon.service';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SvgIconComponent,
  ],
  providers: [
    SvgIconService,
  ],
  declarations: [
    SvgIconComponent,
  ],
})
export class IconsModule {

}
