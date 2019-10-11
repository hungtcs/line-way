import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

@Injectable()
export class SvgIconService {
  private cacheMap: Map<string, SVGSVGElement | Observable<SVGSVGElement>> = new Map();

  constructor(
      private readonly http: HttpClient) {

  }

  public getSvgElement(name: string) {
    const cache = this.cacheMap.get(name);
    if(cache instanceof SVGElement) {
      return of(cache);
    } else if(cache instanceof Observable) {
      return cache;
    } else {
      const observable = this.http.get(`/assets/icons/${ name }.svg`, { responseType: 'text' })
        .pipe(map(svgSource => new DOMParser().parseFromString(svgSource, 'image/svg+xml')))
        .pipe(map(document => document.querySelector('svg')))
        .pipe(tap(svgElement => this.cacheMap.set(name, svgElement)))
        .pipe(share());
      this.cacheMap.set(name, observable);
      return observable;
    }
  }


}
