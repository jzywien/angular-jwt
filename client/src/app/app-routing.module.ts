import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: './users.module#UserModule', canActivate: [AuthGuard] },
  { path: 'todos', loadChildren: './todos.module#TodoModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
