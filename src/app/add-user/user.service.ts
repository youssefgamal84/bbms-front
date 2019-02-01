import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string = null;

  constructor(private _http: HttpClient) { }

  setToken(token: string) {
    this.token = token;
  }

  addUser(user: User) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.post<any>('http://localhost:3333/users/sign-up', user, { headers });
  }

  getUsers() {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.get<User[]>("http://localhost:3333/users/", { headers });
  }
}
