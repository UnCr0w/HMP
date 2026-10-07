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

  filter(date: any): any[]{
    return this.transactionService.filterRiwayat(date);
  }

  formatToInd(date:any){
    return this.transactionService.formatInd(date);
  }
}
