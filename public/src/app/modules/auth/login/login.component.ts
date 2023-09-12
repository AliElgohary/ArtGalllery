import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router to navigate after successful login

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoggedIn: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  login(loginForm: NgForm): void {
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
      this.http
        .post('http://localhost:8000/api/v1/auth/login', loginData, httpOptions)
        .subscribe(
          (response: any) => {
            console.log('Response from server:', response);
            if (response.success && response.data && response.data.token) {
              const userToken = response.data.token;
              console.log('User token:', userToken,response.data.role);
              this.router.navigate(['/products']);
            } else {
              console.log('Invalid response from server.');
            }
          },
          (err) => {
            console.log('Error during login: ' + err);
          }
        );

      loginForm.reset();
    }
  }
}
