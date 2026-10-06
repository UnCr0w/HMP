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
  qty: number[]=[];
  public temp_product: any[] = [];
  
  constructor(private productService: Product, private animationCtrl: AnimationController, public cartService: Cart) { }

  ngOnInit() {
    this.products = this.productService.products;  
    this.arr_kategori = ["Semua"] ;
    this.arr_kategori = this.arr_kategori.concat(this.productService.arr_kategori);
  }

  ionViewDidEnter() {
    this.easeUp()
  }

  getQty(id:number):number{
    return this.qty[id] || 1;
  }

  badge(type: string):string{
    return this.productService.setBadge(type);
  }

  
  filter(): any[]{
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
        { offset: 1,},
      ]);
    animation.play();

  }

  checkQty(){
    for (let i =0; i<this.products.length;i++){
      if(!this.qty[this.products[i].id]){
        this.qty[this.products[i].id] =1;
      }
    }
  }

  valid(product: any){
    let beli = Number(this.qty[product.id]);
    return product.stok>0&&beli>=1&&beli<=product.stok
  }

  addToCart(product:any){
    this.cartService.addToCart(product, Number(this.qty[product.id]))
    this.qty[product.id]=1
  }
  
}
