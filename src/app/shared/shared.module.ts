import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
  ],
  exports: [
    IconsModule,
  ]
})
export class SharedModule {

}
