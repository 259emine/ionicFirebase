import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { TodoModel } from 'src/app/models/todoModel';
import { Router} from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-guncelle',
  templateUrl: './guncelle.page.html',
  styleUrls: ['./guncelle.page.scss'],
})
export class GuncellePage implements OnInit {
  todoKey: string;
  private todo = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    done: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
    const item = this.router.getCurrentNavigation().extras.state;
    this.todo.setValue({
      title: item['title'],
      description: item['description'],
      done: item['done']
    });
    this.todoKey = item['key'];
  }

  guncelle(todo: TodoModel) {
    this.router.navigateByUrl('todo').then(r => r);
  }

}
