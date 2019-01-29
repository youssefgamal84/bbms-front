import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bag } from './bag/bag';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  private token: string;

  constructor(private _http: HttpClient) { }

  setToken(token) {
    this.token = token;
  }

  addBag(bag: Bag) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.post<any>("http://localhost:3333/bags/add", bag, { headers: headers });
  }

  getBags(type: string) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.get<Bag[]>(`http://localhost:3333/bags/${type}`, { headers });
  }

  deleteBag(id: number) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.delete<any>(`http://localhost:3333/bags/${id}`, { headers });
  }

  addTestResult(test, id) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.post<any>(`http://localhost:3333/lab/test/${id}`, test, { headers });
  }

  sampleBag(id) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    return this._http.post<any>(`http://localhost:3333/lab/sample/${id}`, {}, { headers });
  }



}
