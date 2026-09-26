import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../services/product';

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
  new_tipe:string ="";
  new_url: string = "";
  arr_tipe: string[] = [];
  public alertButtons = ['OK']

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.products;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.setProperties()
  }

  
  setProperties(){
    this.new_nama = this.products[this.id].nama;
    this.new_hargaBeli = this.products[this.id].hargaBeli;
    this.new_hargaJual = this.products[this.id].hargaJual;
    this.new_stok = this.products[this.id].stok;
    this.new_tipe = this.products[this.id].tipe;
    this.new_url = this.products[this.id].url;
    this.arr_tipe = ["Snack", "Makanan", "Minuman", "Bahan Pokok", "Kebutuhan Rumah"];
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

  editProduk():string {
    if(this.new_nama == "" ){
      return "Nama tidak boleh kosong."
    } else if (this.new_hargaBeli <= 0 || this.new_hargaJual <= 0) {
      return "Harga beli dan harga jual harus lebih besar dari 0.";
    } else if (this.new_stok < 0){
      return "Stok tidak boleh negatif."
    } else if (this.new_tipe == ""){
      return "Tipe tidak boleh kosong."
    } else if (this.new_url == ""){
      return "Link foto tidak boleh kosong."
    } else{
      this.productService.saveProduct(this.id, this.new_nama, this.new_hargaBeli, this.new_hargaJual, this.new_stok, this.new_tipe, this.new_url)
      return "Perubahan berhasil disimpan."
    }
    
    
  }

}
