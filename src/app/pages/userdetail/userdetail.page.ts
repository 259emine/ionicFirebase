import {Component, Input, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {User} from '../../models/user';
import {ModalController, ToastController} from '@ionic/angular';
import { TodoModel } from 'src/app/models/todoModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {

  @Input() id: string;
  user: User;
  todo:TodoModel;
  todoForm:FormGroup

  constructor(private firebase: FirebaseService, private formBuilder:FormBuilder , private toastCtrl: ToastController, private modalctrl: ModalController) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  getById() {
    this.firebase.login(this.id).subscribe(r => {
      this.user = r;
    });
  }

  async addTodo() {
    this.todo = Object.assign({},this.todoForm.value);
   console.log(this.todo)
   this.firebase.addTodo(this.todo);
    const toast = await this.toastCtrl.create({
      color: 'warning',
      message: 'yapılacak güncellenndi',
      duration: 1000
    });
    toast.present();

  }

  async delete() {

    this.firebase.delete(this.user);
    this.modalctrl.dismiss();
    const toast = await this.toastCtrl.create({
      color: 'success',
      message: 'kullanıcı silindi',
      duration: 1000
    });
    toast.present();

  }

}
