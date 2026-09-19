import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailriwayatPage } from './detailriwayat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailriwayatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailriwayatPageRoutingModule {}
