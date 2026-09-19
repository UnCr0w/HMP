import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { DetailriwayatPageRoutingModule } from './detailriwayat-routing.module';

import { DetailriwayatPage } from './detailriwayat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailriwayatPageRoutingModule
  ],
  declarations: [DetailriwayatPage]
})
export class DetailriwayatPageModule {}
