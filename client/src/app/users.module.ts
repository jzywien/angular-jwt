import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './users/user.service';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserListComponent
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }