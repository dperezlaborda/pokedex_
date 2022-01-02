import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemones:any = [];
  pokemonID: string = '';
  pokemonData: any;
  random: string = '';

  constructor(
    private productosSrv: ProductosService
  ) {
  }

  ngOnInit(): void {
    console.log(this.pokemonID);
  }

  private getTodosLosPokemones(): void {
    this.productosSrv.getPokemones().subscribe((data: any) => {
      console.log(data.results);
      if(data.results){
        this.pokemones = data.results;
      }
    }, (error: any) => {
      console.log(error, 'error')
    })
  }


  public getPokemonesById(): void{
      this.pokemonID = Math.floor((Math.random() * 150) + 1).toString();
      this.productosSrv.getPokemonesById(this.pokemonID).subscribe((data: any) => {
        this.pokemonData = data;
        console.log(this.pokemonID);
        this.pokemones.push(this.pokemonData);
      })
      this.pokemones = [];
  }


  onClick() {
    this.random = Math.floor((Math.random() * 10) + 1).toString();
    console.log(this.random);
  }


}
