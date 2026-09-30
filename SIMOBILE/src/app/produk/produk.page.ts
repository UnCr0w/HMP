import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  products: any[] = [];
  arr_tipe: string[] = []
  keyword: string = "";
  tipe: string = "Semua";

  public temp_product: any[] = [];
  
  
  constructor(private productService: Product, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.products = this.productService.products;  
    this.arr_tipe = ["Semua"] ;
    this.arr_tipe = this.arr_tipe.concat(this.productService.arr_tipe);
  }

  ionViewDidEnter() {
    this.easeUp()
  }

  badge(type: string):string{
    return this.productService.setBadge(type);
  }

  
  filter(): any[]{
    return this.productService.filterProduct(this.keyword, this.tipe);
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

}
