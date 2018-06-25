import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoService } from './todos/todo.service';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TodoListComponent}
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TodoListComponent
  ],
  providers: [
    TodoService,
  ]
})
export class TodoModule { }
