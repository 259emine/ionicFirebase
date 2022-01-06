import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuncellePageRoutingModule } from './guncelle-routing.module';

import { GuncellePage } from './guncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuncellePageRoutingModule
  ],
  declarations: [GuncellePage]
})
export class GuncellePageModule {}
