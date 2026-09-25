import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  id: number = 0;
  product?: Product;
  defaultImage: string = 'assets/placeholder.png';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
   
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.product = this.productService.getProductById(this.id);
    });
  }

 
  get profitMargin(): number {
    if (!this.product) return 0;
    return this.product.hargaJual - this.product.hargaBeli;
  }
}