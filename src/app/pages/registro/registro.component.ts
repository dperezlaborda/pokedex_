import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro:FormGroup;

  constructor(
    public fb: FormBuilder
  ) {
    this.formRegistro = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required]],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  registrar(){
    console.log(this.formRegistro.value);
  }


  ngOnInit(): void {
  }


}
