import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './todo-routing.module';

import { TodoPage } from './todo.page';
import { TodoDetailComponent } from 'src/app/components/components/todo-detail/todo-detail.component';
import { ListAllTodoComponent } from 'src/app/components/components/list-all-todo/list-all-todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule
  ],
  declarations: [TodoPage,TodoDetailComponent,ListAllTodoComponent]
})
export class TodoPageModule {}
