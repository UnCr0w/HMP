import { Service } from '@angular/core';


@Service()
export class Cart {
  buyItems: any[] = [];

  addToCart(product: any, qty: number) {
    //pengecekan produk sudah ada di cart blm
    for (let i = 0; i < this.buyItems.length; i++) {
      if (this.buyItems[i].id == product.id) {
        let total = this.buyItems[i].qty + qty;
        if (total > product.stok) {
          total = product.stok;
        }
        this.buyItems[i].qty = total;
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
}
  
