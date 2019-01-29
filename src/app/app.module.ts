import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "appointment", component: AppointmentComponent },
  { path: "add-donor", component: DonorComponent },
  { path: "add-bag", component: BagComponent },
  { path: "bags", component: BagsComponent },
  { path: "test-result", component: TestComponent },
  { path: "unsampled", component: ExpiredBagsComponent }

];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DonorComponent } from './donor/donor.component';
import { BagComponent } from './bag/bag.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BagsComponent } from './bags/bags.component';
import { CommonModule } from "@angular/common";
import { TestComponent } from './test/test.component';
import { DonationsComponent } from './donations/donations.component';
import { ExpiredBagsComponent } from './expired-bags/expired-bags.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AppointmentComponent,
    DonorComponent,
    BagComponent,
    BagsComponent,
    TestComponent,
    DonationsComponent,
    ExpiredBagsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
