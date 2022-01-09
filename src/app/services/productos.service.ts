import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //la idea es que tenga metodos
  //manipular datos, un servicio se puede usar en mas de un componente
  //TODO CAMBIAR NOMBRE DEL SERVICE

  constructor(
    private http: HttpClient
  ) { }

  //harcodeado
  // getPokemones() {
  //   return [
  //     {
  //       name:"bulbasaur",
  //       url:"https://pokeapi.co/api/v2/pokemon/1/"
  //     },
  //     {
  //       name:"ivysaur",
  //       url:"https://pokeapi.co/api/v2/pokemon/2/"
  //     }
  //   ]
  // }

  //se trae los servicios de una API
  getPokemones() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon')
  }


  getPokemonesById(id: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

}
