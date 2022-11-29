import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading:boolean=false
  errorFromLogin:string=""
  loginForm: FormGroup=new FormGroup({
    email: new FormControl (null, [Validators.required, Validators.email]),
    password:new FormControl (null, [Validators.required, Validators.pattern(/^[A-Za-z0-9]{3,15}$/)]),
  })
  constructor(private _AuthService:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.loginForm.markAllAsTouched();
  }


  loginUser(form:FormGroup){
    this.loginForm.markAllAsTouched()
    if(form.valid){
      this.isLoading=true
      this._AuthService.signIn(form.value).subscribe({
        next:(data:any)=>{
          if(data.message=="success"){
            // Todo go to home
            this.isLoading=false
            localStorage.setItem("token",data.token);
            this._AuthService.savedUser()
            this._router.navigate(['/'])

          }else{
            this.errorFromLogin=data.message
          }
        }
      })
    }
  }

}
