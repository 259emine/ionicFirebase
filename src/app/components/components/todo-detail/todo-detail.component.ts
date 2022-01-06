import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todoModel';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {

  todo:TodoModel
  constructor() { }

  ngOnInit() {}

}
