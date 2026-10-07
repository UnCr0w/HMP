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
  constructor(
    private product: Product,
    private transaction: Transaction,
  ) {}

  isDarkMode: boolean = false;
  products = this.product.products;
  transactionHistory = this.transaction.getHistory();
  todayDate = new Date("2026-10-04T13:25:00");

  todayTransaction = this.transactionHistory.filter((transaction) => {
    return (
      transaction.tanggal.getFullYear() === this.todayDate.getFullYear() &&
      transaction.tanggal.getMonth() === this.todayDate.getMonth() &&
      transaction.tanggal.getDate() === this.todayDate.getDate()
    );
  });

  changeMode() {
    if (this.isDarkMode)
      document.documentElement.classList.add('ion-palette-dark');
    else document.documentElement.classList.remove('ion-palette-dark');
  }
}
