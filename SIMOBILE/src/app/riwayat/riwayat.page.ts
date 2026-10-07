import { Component, OnInit } from '@angular/core';
import { Transaction } from '../services/transaction';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
  standalone: false,
})
export class RiwayatPage implements OnInit {
  riwayat: any[] = [];
  allDates: any[] = [];
  currentDate = new Date();

  lstDay: string[] = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  lstMonth: string[] = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  constructor(private transactionService: Transaction, private animationCtrl: AnimationController,) { }

  ngOnInit() {
    this.riwayat = this.transactionService.history;
    this.allDates = this.transactionService.dates;
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.easeUp();
    }, 50);
  }

  easeUp() {
    const listElement = document.querySelector('#riwayat-list') as HTMLElement;

    if (listElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(listElement)
        .duration(600)
        .iterations(1)
        .keyframes([
          { offset: 0, opacity: '0' },
          { offset: 0.2, opacity: '0.2' },
          { offset: 0.4, opacity: '0.4' },
          { offset: 0.6, opacity: '0.6' },
          { offset: 0.8, opacity: '0.8' },
          { offset: 1, opacity: '1' },
        ]);
      animation.play();
    }
  }

  filterRiwayat(date: any): any[] {
    var temp_riwayat: any[] = [];
    for (let i = 0; i < this.riwayat.length; i++) {
      if (this.formatInd(date) == this.dateFormatInd(this.riwayat[i].tanggal)) {
        temp_riwayat.unshift(this.riwayat[i]);
      }
    }
    return temp_riwayat;
  }

  todayInd(): string {
    const h = this.currentDate.getDay();
    const d = this.currentDate.getDate();
    const m = this.currentDate.getMonth();
    const y = this.currentDate.getFullYear();
    return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m] + ' ' + y;
  }

  dateFormatInd(date: Date): string {
    const h = date.getDay();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();
    return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m] + ' ' + y;
  }

  formatInd(date: any) {
    const h = date.day;
    const d = date.date;
    const m = date.month;
    const y = date.year;
    return this.lstDay[h] + ', ' + d + ' ' + this.lstMonth[m - 1] + ' ' + y;
  }
}
