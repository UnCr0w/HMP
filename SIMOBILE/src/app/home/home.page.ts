import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  isDarkMode: boolean = false

  changeMode() {
    if (this.isDarkMode)
      document.documentElement.classList.add('ion-palette-dark')
    else
      document.documentElement.classList.remove('ion-palette-dark')
  }
}
