import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //la idea es que tenga metodos
  //manipula datos, un servicio se puede usar en mas de un componente

  constructor(
    private http: HttpClient
  ) { }


  //se trae los servicios de una API
  getPokemonesById(id: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getPokemoneTypesById(id: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map((val:any) => { return val['types'] }));
  }

  getPokemonAbilities(id: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map((val: any)=> { return val['abilities'] }));
  }

}
