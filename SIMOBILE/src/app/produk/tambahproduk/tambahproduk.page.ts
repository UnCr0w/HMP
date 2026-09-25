import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-tambahproduk',
  templateUrl: './tambahproduk.page.html',
  styleUrls: ['./tambahproduk.page.scss'],
  standalone: false,
})
export class TambahprodukPage implements OnInit {

  new_nama: string = '';
  new_hargaBeli: number = 7000;  // Modal/Buy price
  new_hargaJual: number = 10000; // Sell price
  new_stok: number = 10;
  new_kategori: string = 'Makanan';
  new_fotoUrl: string = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {}

  submitProduct() {
    this.productService.addProduct(
      this.new_nama,
      Number(this.new_hargaBeli),
      Number(this.new_hargaJual),
      Number(this.new_stok),
      this.new_kategori,
      this.new_fotoUrl || ''
    );

    this.router.navigate(['/produk']);
  }
}