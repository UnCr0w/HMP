import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/cart';
import { Transaction } from '../../services/transaction';
import { Product } from '../../services/product';
import { Router } from '@angular/router';      
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {

  pesan: string = "Transaksi berhasil dilakukan.";
  animasiJalan: boolean = false;
  public alertButtons = ['OK'];
  constructor(public cartService: Cart, private transactionService: Transaction,
    private productService: Product, private router: Router, private animationCtrl: AnimationController) { }

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
    this.router.navigate(['/produk']);
  }
  hapus(id: number) {
    if (this.animasiJalan) {
      return;
    }
    this.animasiJalan = true;

    const elemen = document.querySelector('#item-' + id) as HTMLElement;
    const tinggi = elemen.offsetHeight;

    const animation = this.animationCtrl
      .create()
      .addElement(elemen)
      .duration(500)
      .easing('ease-in-out')
      .keyframes([
        { offset: 0,   transform: 'translateX(0)',     opacity: 1, height: tinggi + 'px', minHeight: tinggi + 'px' },
        { offset: 0.6, transform: 'translateX(-100%)', opacity: 0, height: tinggi + 'px', minHeight: tinggi + 'px' },
        { offset: 1,   transform: 'translateX(-100%)', opacity: 0, height: '0px',         minHeight: '0px' },
      ]);

    animation.onFinish(() => {
      this.cartService.deleteItem(id); 
      this.animasiJalan = false;
    });

    animation.play();
  }

  routerProduk(){
    this.router.navigate(['/produk']);
  }


}
