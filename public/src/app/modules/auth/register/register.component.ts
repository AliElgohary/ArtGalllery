import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http: HttpClient) { }
  onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      const formData = registerForm.value;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      this.http.post('http://localhost:8000/api/v1/auth/register', formData, httpOptions)
        .subscribe(
          (response) => {
            console.log('Registration success:', response);
          },
          (error) => {
            console.error('Registration error:', error);
          }
        );
    }
    registerForm.reset();
  }
}
