import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: string='david';
  private password: string='david'

  constructor(private router: Router){};
  formLogin = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  authUser(){
    if(this.user===this.formLogin.value.user && this.password=== this.formLogin.value.password){
      this.router.navigate(['/backOficce']);
    }else{
      alert('No tienes acceso permitido')
      this.router.navigate(['/home'])
    }
  }
}
