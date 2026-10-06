import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayatPage } from './riwayat.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayatPage
  },
  {
    path: 'detailriwayat/:id',
    loadChildren: () => import('./detailriwayat/detailriwayat.module').then( m => m.DetailriwayatPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayatPageRoutingModule {}
