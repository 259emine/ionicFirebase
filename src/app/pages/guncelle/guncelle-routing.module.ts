import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuncellePage } from './guncelle.page';

const routes: Routes = [
  {
    path: '',
    component: GuncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuncellePageRoutingModule {}
