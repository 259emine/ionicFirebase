import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {FirebaseService} from '../../services/firebase.service';
import {ModalController} from '@ionic/angular';
import {UserdetailPage} from '../userdetail/userdetail.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: User[] = [];

  constructor(private firebase: FirebaseService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.firebase.getAllUser().subscribe(r => {
      this.users = r;
    });
  }

  async userDetail(user: User) {

    const modal = await this.modalCtrl.create({
      component: UserdetailPage,
      componentProps: {id: user.id},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present();
  }


}
