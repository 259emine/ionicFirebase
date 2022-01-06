import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailPageRoutingModule } from './userdetail-routing.module';

import { UserdetailPage } from './userdetail.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserdetailPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [UserdetailPage]
})
export class UserdetailPageModule {}
