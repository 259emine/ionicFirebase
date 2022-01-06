import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todoModel';

import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list-all-todo',
  templateUrl: './list-all-todo.component.html',
  styleUrls: ['./list-all-todo.component.scss'],
})
export class ListAllTodoComponent implements OnInit {
  allTodo: TodoModel[];
  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.firebase.getAllTodos().subscribe(res=>{
      this.allTodo = res
    })
  }


}
