import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-detail',
  templateUrl: './registro-detail.component.html',
  styleUrls: ['./registro-detail.component.css']
})
export class RegistroDetailComponent implements OnInit {

  public usuario: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { nombre: string }
  ) { }

  ngOnInit(): void {
    this.usuario = this.data.nombre
  }



}
