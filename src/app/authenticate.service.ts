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



  setToken(token: string) {
    this.token = token;
    if (!token) {
      this.setAuthStatus(false);
      this.setJob(null);
      this.setName(null);
      return localStorage.clear();
    }
    localStorage.setItem("token", token);
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
    localStorage.setItem("name", name);
  }

  setJob(job: number) {
    this._job = job;
    this.job.next(job);
    console.log("job changed", job);
    if (job != null)
      localStorage.setItem("job", job.toString());
  }

  autoLogin(): string {
    if (localStorage.length > 0) {
      var job = parseInt(localStorage.getItem("job"));
      var name = localStorage.getItem("name");
      var token = localStorage.getItem("token");

      this.setToken(token);
      this.setJob(job);
      this.setName(name);
      return token;
    }
    return null;
  }


  constructor(private _http: HttpClient) { }

  login(loginInfo: LoginInfo) {
    return this._http.post<{ token: string, job: number, name: string }>("http://localhost:3333/users/login", loginInfo);
  }
}
