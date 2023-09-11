import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogedIn: boolean = true;
  onSwitchMode(){
    this.isLogedIn = !this.isLogedIn;
  }
  onSubmit(form : NgForm) {
    console.log(form.value);
    form.reset();
  }
}
