import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../services/product';

@Component({
  selector: 'app-tambahproduk',
  templateUrl: './tambahproduk.page.html',
  styleUrls: ['./tambahproduk.page.scss'],
  standalone: false,
})
export class TambahprodukPage implements OnInit {
  products: any[] = [];
  new_nama: string = "";
  new_hargaBeli: number = 0;
  new_hargaJual: number = 0;
  new_stok: number = 0;
  new_kategori: string = "";
  new_url: string = "";
  arr_kategori: string[] = []

  public alertButtons = ['OK'];
  pesan: string = "Produk berhasil ditambahkan.";

  constructor(private router: Router, private productService: Product) { }

  ngOnInit() {
    this.arr_kategori = this.productService.arr_kategori;
  }

  badge(type: string): string {
    return this.productService.setBadge(type);
  }

  addProduk() {
    if (this.new_nama == "") {
      this.pesan = "Nama tidak boleh kosong.";
    } else if (this.new_hargaBeli < 0) {
      this.pesan = "Harga Beli tidak boleh negatif.";
      this.new_hargaBeli = 0;
    } else if (this.new_hargaJual < 0) {
      this.pesan = "Harga Jual tidak boleh negatif.";
      this.new_hargaJual = 0;
    } else if (this.new_stok < 0) {
      this.pesan = "Stok tidak boleh negatif.";
      this.new_stok = 0;
    } else if (this.new_stok == null || this.new_hargaBeli == null || this.new_hargaJual == null) {
      if (this.new_stok == null)
        this.new_stok = 0;
      if (this.new_hargaBeli == null)
        this.new_hargaBeli = 0;
      if (this.new_hargaJual == null)
        this.new_hargaJual = 0;
      this.pesan = "Angka yang dimasukkan tidak valid.";
    } else if (this.new_hargaBeli == null) {
      this.new_hargaBeli = 0;
    } else if (this.new_hargaJual == null) {
      this.new_hargaJual = 0;
    } else if (this.new_kategori == "") {
      this.pesan = "kategori tidak boleh kosong.";
    } else {
      this.productService.addProduct(
        this.new_nama,
        this.new_hargaBeli,
        this.new_hargaJual,
        this.new_stok,
        this.new_kategori,
        this.new_url);

      this.pesan = "Produk berhasil ditambahkan."
      this.new_nama = "";
      this.new_hargaBeli = 0;
      this.new_hargaJual = 0;
      this.new_stok = 0;
      this.new_kategori = "";
      this.new_url = "";

      this.routerProduk();
    }
  }

  routerProduk() {
    this.router.navigate(['/produk']);
  }

}
