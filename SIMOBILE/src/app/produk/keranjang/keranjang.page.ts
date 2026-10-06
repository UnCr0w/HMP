import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/cart';
import { Transaction } from '../../services/transaction';
import { Product } from '../../services/product';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {

  pesan: string = "Transaksi berhasil dilakukan.";
  public alertButtons = ['OK'];
  constructor(public cartService: Cart, private transactionService: Transaction,
    private productService: Product) { }

  ngOnInit() {
  }

  checkout() {
    let itemsToBuy = this.cartService.buyItems;
    let totalHarga = this.cartService.getTotalHarga();

    this.transactionService.addTransaction(itemsToBuy, totalHarga);

    for (let i = 0; i < itemsToBuy.length; i++) {
      let purchasedItem = itemsToBuy[i];
      let productIndex = this.productService.products.findIndex(p => p.id === purchasedItem.id);

      if (productIndex !== -1) {
        this.productService.products[productIndex].stok -= purchasedItem.qty;
      }
    }

    this.cartService.clearCart();
  }
  hapus(id: number) {
    this.cartService.deleteItem(id);
  }


}
