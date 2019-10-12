import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../shared/public_api';

@Component({
  selector: 'lw-player-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  constructor(
      private readonly router: Router,
      private readonly localStorageService: LocalStorageService) {

  }

  public ngOnInit() {
    const level = this.localStorageService.getItem<number>('level');
    if(level) {
      this.router.navigate(['/player', level]);
    } else {
      this.router.navigate(['/player', 0]);
    }
  }

}
