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
  ) { }

  isDarkMode: boolean = false;
  products = this.product.products;
  transactionHistory = this.transaction.getHistory()
  todayDate = new Date();


  getTodayTransaction() {
    return this.transactionHistory.filter((transaction) => {
      return (
        transaction.tanggal.getFullYear() === this.todayDate.getFullYear() &&
        transaction.tanggal.getMonth() === this.todayDate.getMonth() &&
        transaction.tanggal.getDate() === this.todayDate.getDate()
      );
    });
  }

  todayTransaction: any[] = []

  // getTodayTransaction() : any[] {
  //   return this.transaction.filterRiwayat(this.todayDate)
  // }

  changeMode() {
    if (this.isDarkMode)
      document.documentElement.classList.add('ion-palette-dark');
    else document.documentElement.classList.remove('ion-palette-dark');
  }

  topItems: any[] = []

  ngOnInit() {
    this.topItems = this.getTopProducts();
    this.todayTransaction = this.getTodayTransaction();
  }

  refreshData() {
    this.transactionHistory = this.transaction.getHistory()
    this.products = this.product.products
    this.topItems = this.getTopProducts()
    this.todayTransaction = this.getTodayTransaction()
  }

  getTopProducts(): any[] {
    const productTotals: any[] = [];

    for (let transaction of this.transactionHistory) {
      for (let item of transaction.items) {
        const existingIndex = productTotals.findIndex(p => p.id === item.id);
        if (existingIndex !== -1) {
          productTotals[existingIndex].qty += item.qty;
        } else {
          productTotals.push({ ...item }); //this copies item
        }
      }
    }
    productTotals.sort((a, b) => b.qty - a.qty);
    return productTotals;
  }
}
