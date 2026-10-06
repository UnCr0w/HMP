import { Component, OnInit } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false,
})
export class KeranjangPage implements OnInit {

  constructor(public cartService: Cart) { }

  ngOnInit() {
  }
  
  hapus(id:number){
    this.cartService.deleteItem(id);
  }
}
