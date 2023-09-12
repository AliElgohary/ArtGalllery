import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister(registerForm: NgForm): void {
    if (registerForm.valid) {
      const formData = registerForm.value;

      this.authService.register(formData).subscribe(
        (response: any) => {
          console.log('Registration success:', response);
          if (response.success) {
            this.router.navigate(['/auth']);
          } else {
            console.error('Registration failed:', response.message);
            this.errorMessage = response.message;
          }
        },
        (error) => {
          console.error('Registration error:', error);
          this.errorMessage = 'An error occurred during registration.';
        }
      );

      registerForm.reset();
    }
  }
}
