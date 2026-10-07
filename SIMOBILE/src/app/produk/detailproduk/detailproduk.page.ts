import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { ProdukPage } from '../produk.page';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
  standalone: false,
})
export class DetailprodukPage implements OnInit {
  id = 0;
  products: any[] = [];

  new_nama: string = "";
  new_hargaBeli: number = 0;
  new_hargaJual: number = 0;
  new_stok: number = 0;
  new_kategori: string = "";
  new_url: string = "";
  arr_kategori: string[] = []

  public alertButtons = ['OK']
  pesan: string = "Perubahan berhasil disimpan.";

  isEditting: boolean = false;

  constructor(private route: ActivatedRoute, private productService: Product) { }

  ngOnInit() {
    this.products = this.productService.products;
    this.arr_kategori = this.productService.arr_kategori;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.setProperties()
  }

  setProperties() {
    this.new_nama = this.products[this.id].nama;
    this.new_hargaBeli = this.products[this.id].hargaBeli;
    this.new_hargaJual = this.products[this.id].hargaJual;
    this.new_stok = this.products[this.id].stok;
    this.new_kategori = this.products[this.id].kategori;
    this.new_url = this.products[this.id].url;
  }

  badge(type: string): string {
    return this.productService.setBadge(type);
  }

  editProduk() {
    if (this.new_nama == "") {
      this.pesan = "Nama tidak boleh kosong.";
    } else if (this.new_hargaBeli < 0 || this.new_hargaJual < 0 || this.new_stok < 0) {
      if (this.new_hargaBeli < 0)
        this.new_hargaBeli = this.products[this.id].hargaBeli;;
      if (this.new_hargaJual < 0)
        this.new_hargaJual = this.products[this.id].hargaJual;
      if (this.new_stok < 0)
        this.new_stok = this.products[this.id].stok;
      this.pesan = "Angka yang dimasukkan tidak valid.";
    } else if (this.new_stok == null || this.new_hargaBeli == null || this.new_hargaJual == null) {
      if (this.new_stok == null)
        this.new_stok = 0;
      if (this.new_hargaBeli == null)
        this.new_hargaBeli = 0;
      if (this.new_hargaJual == null)
        this.new_hargaJual = 0;
      this.pesan = "Angka yang dimasukkan tidak valid.";
    } else if (this.new_kategori == "") {
      this.pesan = "kategori tidak boleh kosong.";
    } else {
      this.productService.saveProduct(
        this.id,
        this.new_nama,
        this.new_hargaBeli,
        this.new_hargaJual,
        this.new_stok,
        this.new_kategori,
        this.new_url);

      this.pesan = "Perubahan berhasil disimpan."
      this.isEditting = false;
    }
  }
}
