import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product';

@Component({
  selector: 'app-tambahproduk',
  templateUrl: './tambahproduk.page.html',
  styleUrls: ['./tambahproduk.page.scss'],
  standalone: false,
})
export class TambahprodukPage {
  nama: string = '';
  hargaBeli: number = 0;
  hargaJual: number = 0;
  stok: number = 0;
  tipe: string = 'Snack';
  url: string = '';

  arr_tipe: string[] = ["Snack", "Makanan", "Minuman", "Bahan Pokok", "Kebutuhan Rumah"];
  public alertButtons = ['OK'];

  constructor(private productService: ProductService) {}

  tambahProduk(): string {
    if (this.nama.trim() === "") {
      return "Nama tidak boleh kosong.";
    } else if (this.hargaBeli <= 0 || this.hargaJual <= 0) {
      return "Harga beli dan harga jual harus lebih besar dari 0.";
    } else if (this.stok < 0) {
      return "Stok tidak boleh negatif.";
    } else if (this.tipe === "") {
      return "Tipe tidak boleh kosong.";
    } else if (this.url.trim() === "") {
      return "Link foto tidak boleh kosong.";
    } else {
      this.productService.addProduct(
        this.nama,
        this.hargaBeli,
        this.hargaJual,
        this.stok,
        this.tipe,
        this.url
      );
      return "Produk berhasil ditambahkan.";
    }
  }
}