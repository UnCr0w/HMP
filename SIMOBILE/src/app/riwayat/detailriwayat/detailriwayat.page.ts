import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../services/transaction';

@Component({
  selector: 'app-detailriwayat',
  templateUrl: './detailriwayat.page.html',
  styleUrls: ['./detailriwayat.page.scss'],
  standalone: false,
})
export class DetailriwayatPage implements OnInit {

  id: number = 0;
  riwayat: any[] = [];

  lstDay: string[] = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  lstMonth: string[] = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  constructor(private route: ActivatedRoute, private transactionService: Transaction) { }

  ngOnInit() {
    this.riwayat = this.transactionService.getHistory();
    this.route.params.subscribe(params => {
      this.id = params['id'] - 1;
    })
  }

  dateFormatInd(date: Date): string {
    const h = date.getDay();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();
    return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m] + ' ' + y;
  }

}
