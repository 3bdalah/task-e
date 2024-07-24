import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  errorMessage: string = '';

  isLoading: boolean = false;
  constructor(
    private router: Router,
    private authServ: AuthService
  ) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
      ),
    ]),
  });

  onSubmit(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      console.log(loginForm.value);
      const { email, password } = loginForm.value;
      this.authServ.login({ email, password }).subscribe(
        (res) => {
          console.log('respong login', res);

          if (res.message === 'Login Success') {
            this.router.navigate(['/']);
            localStorage.setItem('user', 'active');
            this.authServ.updateUserIsActive(
              JSON.stringify(localStorage.getItem('user'))
            );
          } else if (res.error == 'Login Failed') {
            this.isLoading = false;
          }
          this.isLoading = false;
        },
        (error) => {
          if (error.status === 400 && error.error && error.error.message) {
            alert('failed login password or email ');
            this.errorMessage = error.error.message;
            this.isLoading = false;
            // loginForm.reset();
          }
        }
      );
    }
  }
}
