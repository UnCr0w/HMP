import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nama: string;
  hargaBeli: number;  
  hargaJual: number;  
  stok: number;
  kategori: string;
  fotoUrl: string;   
  terjual: number;    
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, nama: 'Orange Juice', hargaBeli: 7000, hargaJual: 10000, stok: 25, kategori: 'Minuman', fotoUrl: '', terjual: 45 },
    { id: 2, nama: 'Cheepos', hargaBeli: 6000, hargaJual: 9000, stok: 0, kategori: 'Makanan', fotoUrl: '', terjual: 12 }, 
    { id: 3, nama: 'Strawberry Milk', hargaBeli: 13000, hargaJual: 18000, stok: 40, kategori: 'Minuman', fotoUrl: '', terjual: 30 },
    { id: 4, nama: 'Loreo', hargaBeli: 8000, hargaJual: 11000, stok: 19, kategori: 'Makanan', fotoUrl: '', terjual: 80 },
    { id: 5, nama: 'Boritos', hargaBeli: 6000, hargaJual: 8500, stok: 32, kategori: 'Makanan', fotoUrl: '', terjual: 22 },
    { id: 6, nama: 'Slayolay', hargaBeli: 2500, hargaJual: 4000, stok: 9, kategori: 'Makanan', fotoUrl: '', terjual: 15 },
    { id: 7, nama: 'BlueCow Energy Drink', hargaBeli: 15000, hargaJual: 20000, stok: 2, kategori: 'Minuman', fotoUrl: '', terjual: 50 },
    { id: 8, nama: 'Hour Maid Pulpy', hargaBeli: 6500, hargaJual: 9200, stok: 19, kategori: 'Minuman', fotoUrl: '', terjual: 19 },
    { id: 9, nama: 'Bang Bang', hargaBeli: 5500, hargaJual: 8000, stok: 13, kategori: 'Makanan', fotoUrl: '', terjual: 11 },
    { id: 10, nama: 'CHI-Tattoo', hargaBeli: 14000, hargaJual: 20000, stok: 34, kategori: 'Makanan', fotoUrl: '', terjual: 95 }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

 private nextId = this.products.length + 1;

  addProduct(nama: string, hargaBeli: number, hargaJual: number, stok: number, kategori: string, fotoUrl: string = ''): void {
    const newProduct: Product = {

      id: this.nextId++,
      nama,
      hargaBeli,
      hargaJual,
      stok,
      kategori,
      fotoUrl,
      terjual: 0
    };

    this.products.push(newProduct);
  }

 
  reduceStock(id: number, qty: number): void {
    const product = this.getProductById(id);
    if (product && product.stok >= qty) {
      product.stok -= qty;
      product.terjual += qty;
    }
  }
}