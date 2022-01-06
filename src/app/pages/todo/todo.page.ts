import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EklePage } from '../ekle/ekle.page';
import { UserdetailPage } from '../userdetail/userdetail.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor(private router: Router,private modalCtrl:ModalController) {}

 async yonlendir() {
    const modal = await this.modalCtrl.create({
      component: UserdetailPage,
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present();
  }

  ngOnInit() {
  }

}
