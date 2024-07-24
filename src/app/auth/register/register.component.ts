import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone:true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports:[
    ReactiveFormsModule
  ]
})
export class RegisterComponent {
isLoading:boolean= false;
errorMessage: string = '';

constructor(
  private fb: FormBuilder,
  // private afAuth: AngularFireAuth,
  private router: Router,
  private authServ:AuthService
) {}

// registerForm:FormGroup = this.fb.group({
//   email: ['', [Validators.required, Validators.email]],
//   password: ['', [Validators.required, Validators.minLength(6)]],
//   confirmPassword: ['', [Validators.required]]
// }, { validator: this.passwordMatchValidator });


registerForm: FormGroup = new FormGroup(
  {
    name: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern( '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'),
    ]),
   
  },
);
ngOnInit(): void {
}

passwordMatchValidator(form: FormGroup) {
  // return form.get('password').value === form.get('confirmPassword').value ? null : { mismatch: true };
}


onSubmit(registerForm: FormGroup) {
  this.isLoading = true;
  if (registerForm.valid) {
    console.log(registerForm.value);
    const {name,email,password} = registerForm.value;
    
        this.authServ.register({name,email,password}).subscribe((res)=>{
          console.log("res",res);
          if(res.message==="Register Success"){
            this.router.navigate(['auth/login']);
          }
        },(error)=>{
          if (error.status === 400 || error.error || error.error.message) {
            alert('failed register password or email or name have error already Exist ');
            this.errorMessage = error.error.message;
            this.isLoading = false;
            // registerForm.reset();
          }
        })
      }
      
    };
}
