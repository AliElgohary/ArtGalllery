import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogedIn: boolean = true;

  constructor(private http: HttpClient) {}

  onSwitchMode() {
    this.isLogedIn = !this.isLogedIn;
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      const formData = loginForm.value;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
      this.http.post(
        'http://localhost:8000/api/v1/auth/login',
        loginData,
        httpOptions
      ).subscribe(response => {
        console.log(response);
      }, err => {
        console.log('Error during login: ' + err);
      });

      loginForm.reset();
    }
  }
}
