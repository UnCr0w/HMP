import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product'; 

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  defaultImage: string = 'assets/placeholder.png';

  constructor(private productService: ProductService) {} 

  ngOnInit() {
    this.products = this.productService.getProducts(); 
  }

  ionViewWillEnter() {
    this.products = this.productService.getProducts();
  }
  loadProducts() {
    this.products = this.productService.getProducts();
  }

  
  get filteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      return this.products;
    }
    return this.products.filter(p => 
      p.nama.toLowerCase().includes(term) || 
      p.kategori.toLowerCase().includes(term)
    );
  }

 
  addToCart(product: Product, event: Event): void {
    event.stopPropagation(); 
    event.preventDefault();
  }
} 