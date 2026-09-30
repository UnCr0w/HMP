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
  new_harga: number = 0;
  new_stok: number = 0;
  new_tipe: string = "";
  new_url: string = "";
  arr_tipe: string[] = []

  public alertButtons = ['OK'];
  pesan: string = "";

  constructor(private router: Router, private productService: Product) { }

  ngOnInit() {
    this.arr_tipe = this.productService.arr_tipe;
  }

  badge(type: string): string {
    return this.productService.setBadge(type);
  }

  addProduk() {
    if (this.new_nama == "") {
      this.pesan = "Nama tidak boleh kosong."
    } else if (this.new_harga <= 0) {
      this.pesan = "Harga tidak boleh 0 atau negatif."
    } else if (this.new_stok < 0) {
      this.pesan = "Stok tidak boleh negatif."
    } else if (this.new_tipe == "") {
      this.pesan = "Tipe tidak boleh kosong."
    } else if (this.new_url == "") {
      this.pesan = "Link foto tidak boleh kosong."
    } else {
      this.productService.addProduct(this.new_nama, this.new_harga, this.new_stok, this.new_tipe, this.new_url)
      this.pesan = "Produk berhasil ditambahkan."
      this.new_nama = "";
      this.new_harga = 0;
      this.new_stok = 0; 
      this.new_tipe = ""; 
      this.new_url = "";
      
      //this.router.navigate(['/produk']);
    }
  }

}
