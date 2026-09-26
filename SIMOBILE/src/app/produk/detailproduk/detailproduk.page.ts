import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';

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
  new_harga: number = 0;
  new_stok: number = 0;
  new_tipe:string ="";
  new_url: string = "";
  arr_tipe: string[] = ["Snack", "Makanan", "Minuman", "Bahan Pokok", "Kebutuhan Rumah"];
  
  public alertButtons = ['OK']
  pesan:string = "";

  constructor(private route: ActivatedRoute, private productService: Product) { }

  ngOnInit() {
    this.products = this.productService.products;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.setProperties()
  }

  setProperties(){
    this.new_nama = this.products[this.id].nama;
    this.new_harga = this.products[this.id].harga;
    this.new_stok = this.products[this.id].stok;
    this.new_tipe = this.products[this.id].tipe;
    this.new_url = this.products[this.id].url;
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

  editProduk() {
    if(this.new_nama == "" ){
      this.pesan = "Nama tidak boleh kosong."
    } else if (this.new_harga <= 0){
      this.pesan = "Harga tidak boleh 0 atau negatif."
    } else if (this.new_stok < 0){
      this.pesan = "Stok tidak boleh negatif."
    } else if (this.new_tipe == ""){
      this.pesan =  "Tipe tidak boleh kosong."
    } else if (this.new_url == ""){
      this.pesan = "Link foto tidak boleh kosong."
    } else{
      this.productService.saveProduct(this.id, this.new_nama, this.new_harga, this.new_stok, this.new_tipe, this.new_url)
      this.pesan =  "Perubahan berhasil disimpan."
    }
    
    
  }

}
