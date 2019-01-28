import { Component, OnInit } from '@angular/core';
import { Appointment } from './appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public userModel: Appointment = new Appointment("", "", "", 0);
  constructor(private appointmentService: AppointmentService) { }
  submitted = false;
  success = null;
  errorMessage = null;
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this.appointmentService.enroll(this.userModel)
      .subscribe(
        data => {
          console.log('success', data);
          this.success = true;
          this.errorMessage = null;
        },
        error => {
          console.error('error !', error);
          this.success = false;
          this.errorMessage = error.error.errorMessage;
          console.log(error.errorMessage);
        }

      )
  }

}
