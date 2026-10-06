import { Component, OnInit } from '@angular/core';
import { Transaction } from '../services/transaction';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
  standalone: false,
})
export class RiwayatPage implements OnInit {

  constructor(public transactionService: Transaction) { }

  ngOnInit() {
  }

}
