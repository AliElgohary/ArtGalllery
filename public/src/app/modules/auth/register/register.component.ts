import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) { }

  onRegister(registerForm: NgForm): void {
    if (registerForm.valid) {
      const formData = registerForm.value;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      this.http.post('http://localhost:8000/api/v1/auth/register', formData, httpOptions)
        .subscribe(
          (response: any) => {
            console.log('Registration success:', response);
            if (response.success) {
              this.router.navigate(['/auth']);
            } else {
              console.error('Registration failed:', response.message);
            }
          },
          (error) => {
            console.error('Registration error:', error);
          }
        );
    }
    registerForm.reset();
  }
}
