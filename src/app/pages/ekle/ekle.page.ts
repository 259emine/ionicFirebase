import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoModel } from 'src/app/models/todoModel';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-ekle',
  templateUrl: './ekle.page.html',
  styleUrls: ['./ekle.page.scss'],
})
export class EklePage implements OnInit {

  @Input() id: string;
  user: User;

  todo:TodoModel;s
  constructor(private firebase: FirebaseService, private fb:FormBuilder) {

   }

  ngOnInit() {
  }
  addTodo() {
    console.log(this.user)

    this.firebase.addTodo(this.todo).catch(er=>{
      console.log(er)
    });
  }

}
