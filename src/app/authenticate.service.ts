import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginInfo } from './LoginInfo';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private name = new Subject<string>();
  private job = new Subject<number>();
  public _name: string = null;
  public _job: number = null;

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getName() {
    return this.name.asObservable();
  }

  getJob() {
    return this.job.asObservable();
  }

  setAuthStatus(b: boolean) {
    this.authStatusListener.next(b);
  }

  setName(name: string) {
    this.name.next(name);
  }

  setJob(job: number) {
    this._job = job;
    this.job.next(job);
    console.log("job changed", job);
  }


  constructor(private _http: HttpClient) { }

  login(loginInfo: LoginInfo) {
    return this._http.post<{ token: string, job: number, name: string }>("http://localhost:3333/users/login", loginInfo);
  }
}
