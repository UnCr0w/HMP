import { Component } from '@angular/core';
import { Product } from '../services/product';
import { Transaction } from '../services/transaction';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private product:Product, private transaction:Transaction) { }

  isDarkMode: boolean = false
  products: any[] = this.product.products
  transactionHistory: any[] = this.transaction.getHistory()
  todayDate: string = new Date().toLocaleTimeString()

  changeMode() {
    if (this.isDarkMode)
      document.documentElement.classList.add('ion-palette-dark')
    else
      document.documentElement.classList.remove('ion-palette-dark')
  }


}
