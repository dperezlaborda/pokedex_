import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  public show: boolean = false;

  constructor(
    public fb: FormBuilder
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  ingresar() {
    console.log(this.formLogin.value);
  }

  showPassword(){
    this.show = !this.show;
  }

  ngOnInit(): void {
  }
  
}
