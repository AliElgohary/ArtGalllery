import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoggedIn: boolean = true;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  login(loginForm: NgForm): void {
    if (loginForm.valid) {
      const formData = loginForm.value;
      this.authService.login(formData).subscribe(
        (user) => {
          console.log('User logged in successfully:', user);
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error('Error during login:', error);
          this.errorMessage = error;
        }
      );
      loginForm.reset();
    }
  }
}
