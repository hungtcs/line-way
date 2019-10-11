import { tap, map } from 'rxjs/operators';
import { SvgIconService } from './svg-icon.service';
import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'lw-svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  templateUrl: './svg-icon.component.html',
})
export class SvgIconComponent {
  private _name: string;

  @Input()
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
    this.renderSvgElement(this.name);
  }

  constructor(
      private readonly elementRef: ElementRef<HTMLElement>,
      private readonly svgIconService: SvgIconService) {

  }

  private renderSvgElement(name: string) {
    this.svgIconService.getSvgElement(name)
      .pipe(map(svgElement => svgElement.cloneNode(true)))
      .pipe(tap(() => this.elementRef.nativeElement.innerHTML = ''))
      .pipe(tap(svgElement => this.elementRef.nativeElement.appendChild(svgElement)))
      .subscribe();
  }

}
