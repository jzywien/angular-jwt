import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers = () => this.http.get<User[]>('/api/users');
  getUser = (id: number) => this.http.get<User>(`/api/users/${id}`);
}
