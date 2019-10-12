import { Component, Input, HostBinding } from '@angular/core';
import Color from 'color';

@Component({
  selector: 'lw-progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {

  @Input()
  public value: number;

  @Input()
  public color: string = '#FFFFFF';

  @HostBinding('style.background-color')
  get backgroundColor() {
    return Color(this.color).fade(0.8).toString();
  }

  constructor() {

  }

}
