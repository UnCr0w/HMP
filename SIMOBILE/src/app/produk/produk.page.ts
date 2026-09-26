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
  keyword: string = "";
  
  constructor(private productService: Product, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.products = this.productService.products;  
  }

  ionViewDidEnter() {
    this.easeUp()
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    var temp_product = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i].nama.toLowerCase()).includes(this.keyword.toLowerCase()) || this.keyword == "") {
        temp_product.push(arr[i]);
      }
    }

    const result = [];
    for (let i = 0; i < temp_product.length; i += chunkSize) {
      result.push(temp_product.slice(i, i + chunkSize));
    }

    return result;
  }

  setBadge(type: string): string {
    if (type == "Snack") {
      return "warning";
    } else if (type == "Makanan") {
      return "danger";
    } else if (type == "Bahan Pokok") {
      return "tertiary";
    } else if (type == "Kebutuhan Rumah") {
      return "success"
    } else if (type = "Minuman") {
      return "primary";
    }
    return "";
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
