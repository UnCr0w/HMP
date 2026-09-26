import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  products: any[] = [];
  keyword: string = "";
  
  constructor(private productService: Product) { }

  ngOnInit() {
    this.products = this.productService.products;  
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

}
