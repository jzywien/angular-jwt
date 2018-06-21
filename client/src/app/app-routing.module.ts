import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}