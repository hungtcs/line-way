import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { LocalStorageModule } from './local-storage/public_api';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    LocalStorageModule,
  ],
  exports: [
    IconsModule,
    LocalStorageModule,
  ]
})
export class SharedModule {

}
