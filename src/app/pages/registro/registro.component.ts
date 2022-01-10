import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegistroDetailComponent } from 'src/app/components/registro-detail/registro-detail.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro:FormGroup;

  constructor(
    public fb: FormBuilder,
    private matDialog: MatDialog
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
    console.log(this.formRegistro.value.nombre);
    this.matDialog.open(RegistroDetailComponent, {
      data : {
        nombre: this.formRegistro.value.nombre
      }
    })
  }


  ngOnInit(): void {
  }


}
