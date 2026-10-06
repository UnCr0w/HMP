import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  buyItems: any[] = [];

  addToCart(product: any, qty: number) {
    //pengecekan produk sudah ada di cart blm
    for (let i = 0; i < this.buyItems.length; i++) {
      if (this.buyItems[i].id == product.id) {
        this.buyItems[i].qty = qty;
        return;
      }
    }

    //tambahkan baru
    this.buyItems.push({
      id: product.id,
      nama: product.nama,
      hargaJual: product.hargaJual,
      stok: product.stok,
      url: product.url,
      qty: qty
    });
  }

  deleteItem(id: number) {
    for (let i = 0; i < this.buyItems.length; i++) {
      if (this.buyItems[i].id == id) {
        this.buyItems.splice(i, 1);
        return;
      }
    }
  }

  getTotalItem(): number {
    let total = 0;
    for (let i = 0; i < this.buyItems.length; i++) {
      total += Number(this.buyItems[i].qty);
    }
    return total;
  }

  getTotalHarga(): number {
    let total = 0;
    for (let i = 0; i < this.buyItems.length; i++) {
      total += this.buyItems[i].hargaJual * Number(this.buyItems[i].qty);
    }
    return total;
  }

  clearCart() {
    this.buyItems = [];
  }
}