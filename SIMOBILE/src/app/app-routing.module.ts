import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then(m => m.ProdukPageModule)
  },
  {
    path: 'tambahproduk', 
    loadChildren: () => import('./produk/tambahproduk/tambahproduk.module').then(m => m.TambahprodukPageModule)
  },
  {
    path: 'riwayat',
    loadChildren: () => import('./riwayat/riwayat.module').then(m => m.RiwayatPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then(m => m.TransaksiPageModule)
  },
  {
    path: 'detailproduk/:id',
    loadChildren: () => import('./produk/detailproduk/detailproduk.module').then(m => m.DetailprodukPageModule)
  },
  {
    path: 'detailproduk/:id',
    loadChildren: () => import('./produk/detailproduk/detailproduk.module').then(m => m.DetailprodukPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
