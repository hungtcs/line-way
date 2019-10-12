import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { LocalStorageModule } from './local-storage/public_api';
import { ProgressBarsModule } from './progress-bars/public_api';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    LocalStorageModule,
    ProgressBarsModule,
  ],
  exports: [
    IconsModule,
    LocalStorageModule,
    ProgressBarsModule,
  ]
})
export class SharedModule {

}
