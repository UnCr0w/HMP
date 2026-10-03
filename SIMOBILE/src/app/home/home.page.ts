import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  isChecked: boolean = false
  mode: string = "light-mode";

  toggleDarkMode() {
    if (this.isChecked)
      document.documentElement.classList.add('ion-palette-dark')
    else
      document.documentElement.classList.remove('ion-palette-dark')
  }

}
