import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukPage } from './produk.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage
  },  {
    path: 'detailproduk',
    loadChildren: () => import('./detailproduk/detailproduk.module').then( m => m.DetailprodukPageModule)
  },
  {
    path: 'tambahproduk',
    loadChildren: () => import('./tambahproduk/tambahproduk.module').then( m => m.TambahprodukPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukPageRoutingModule {}
