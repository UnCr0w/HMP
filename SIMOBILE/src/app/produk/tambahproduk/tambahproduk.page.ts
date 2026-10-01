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
  isProductAdded: boolean = false;
  isAlertOpen: boolean = false;
  pesan: string = "";

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
    } else if (this.new_hargaJual < 0) {
      this.pesan = "Harga Jual tidak boleh negatif.";
    } else if (this.new_stok < 0) {
      this.pesan = "Stok tidak boleh negatif.";
    } else if (this.new_kategori == "") {
      this.pesan = "kategori tidak boleh kosong.";
    } else {
      this.pesan = "Produk berhasil ditambahkan."

      this.productService.addProduct(
        this.new_nama,
        this.new_hargaBeli,
        this.new_hargaJual,
        this.new_stok,
        this.new_kategori,
        this.new_url);


      this.new_nama = "";
      this.new_hargaBeli = 0;
      this.new_hargaJual = 0;
      this.new_stok = 0;
      this.new_kategori = "";
      this.new_url = "";
      
      this.isAlertOpen = true;
      this.isProductAdded = true;
    }

    this.isAlertOpen = true;
  }

  closeAlert(){
    this.isAlertOpen = false;
    if(this.isProductAdded){
      this.isProductAdded = false;
      this.router.navigate(['/produk']);
    }
  }

}
