import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  _url = 'http://localhost:3333/appointments/add';
  constructor(private _http: HttpClient) { }

  enroll(user: Appointment) {
    return this._http.post<any>(this._url, user);
  }
}