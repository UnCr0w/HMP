import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { AnimationController } from '@ionic/angular';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  products: any[] = [];
  arr_kategori: string[] = []
  keyword: string = "";
  kategori: string = "Semua";
  qty: number[] = [];
  public temp_product: any[] = [];

  openedKeranjang: boolean = false;
  problemQty: boolean = false;
  pesan: string = "";
  public alertButtons = ['OK'];


  constructor(private productService: Product, private animationCtrl: AnimationController, public cartService: Cart) { }

  ngOnInit() {
    this.products = this.productService.products;
    this.arr_kategori = ["Semua"];
    this.arr_kategori = this.arr_kategori.concat(this.productService.arr_kategori);
    this.establishQty();
  }

  ionViewDidEnter() {
    //this.updateQty();
    this.easeUp();
  }

  badge(type: string): string {
    return this.productService.setBadge(type);
  }

  filter(): any[] {
    return this.productService.filterProduct(this.keyword, this.kategori);
  }

  easeUp() {
    const contentEleement = document.querySelector('#content') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(contentEleement)
      .duration(800) // Animation duration in milliseconds
      .iterations(1) // do animation 3 times
      .keyframes([
        { offset: 0, transform: 'translate(0, 10px)' },
        { offset: 1, },
      ]);
    animation.play();

  }

  routerDetail(product: any): string {
    if (this.cartService.getTotalItem() == 0) {
      return "detailproduk/" + (product.id - 1);
    }
    return "/produk";
  }

  routerKeranjang() {
    for (let i = 1; i <= this.qty.length; i++) {
      if (this.qty[i] > this.products[i] || this.qty[i] < 0) {
        this.problemQty = true;
      }
    }
    if (this.problemQty) {
      this.pesan = "Terdapat jumlah produk yang tidak valid. Jumlah produk akan disesuaikan."
      return "/produk";
    } else {
      this.pesan = "";
      return "keranjang";
    }
  }

  checkQty() {
    for (let i = 0; i < this.products.length; i++) {
      if (!this.qty[this.products[i].id]) {
        this.qty[this.products[i].id] = 1;
      }
    }
  }

  establishQty() {
    for (let i = 0; i < this.products.length; i++) {
      this.qty[this.products[i].id] = 0;
    }
  }

  valid(product: any) {
    let beli = Number(this.qty[product.id]);
    return product.stok > 0 && beli >= 1 && beli <= product.stok
  }

  addToCart(product: any) {
    if (this.qty[product.id] == 0) {
      this.qty[product.id] = 1
    }
    if (this.qty[product.id] > product.stok) {
      //this.problemQty = true;
      //this.qty[product.id] = product.stok; 
      this.cartService.addToCart(product, Number(product.stok))
    } else if (this.qty[product.id] < 0) {
      //this.problemQty = true;
      //this.qty[product.id] = 1; 
      this.cartService.addToCart(product, Number(0))
    } else {
      //this.problemQty = false;
      this.cartService.addToCart(product, Number(this.qty[product.id]))
    }
  }

  addQty(product: any) {
    if (this.qty[product.id] + 1 <= product.stok) {
      this.qty[product.id]++;
      this.cartService.addToCart(product, Number(this.qty[product.id]))
    }
  }

  removeQty(product: any) {
    if (this.qty[product.id] - 1 >= 0) {
      this.qty[product.id]--;
      this.cartService.addToCart(product, Number(this.qty[product.id]))
    }
  }

  totalItem(): number {
    if (this.openedKeranjang == true) {
      this.updateQty();
      this.problemQty = false;
      this.openedKeranjang = false;
    }
    return this.cartService.getTotalItem();
  }
  updateQty() {
    //this.qty[this.products[1]] = this.cartService.updateQtyOnPage(this.products[1].id);
    for (let i = 0; i < this.products.length; i++) {
      this.qty[this.products[i].id] = this.cartService.updateQtyOnPage(this.products[i].id);
    }
  }
}
