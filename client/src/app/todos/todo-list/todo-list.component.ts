import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo$: Observable<Todo[]>;

  constructor(private _todos: TodoService) { }

  ngOnInit() {
    this.todo$ = this._todos.getTodos();
  }

}
