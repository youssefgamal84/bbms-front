import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donor } from './donor/donor';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private token: string;
  constructor(private _http: HttpClient) { }
  setToken(token) {
    this.token = token;
  }
  addDonor(donor: Donor) {
    const headers = new HttpHeaders().set("x-auth", this.token);
    console.log("called add donor with", this.token);
    return this._http.post<any>("http://localhost:3333/donors/add", donor, { headers: headers });
  }


}
