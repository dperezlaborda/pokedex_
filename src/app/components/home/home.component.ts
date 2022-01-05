import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  pokemones: any = [];
  pokemonID: string = '';
  // pokemonID: number = 72;
  pokemonData: any;
  imageSpinner: boolean = true;
  pokemonTypeOne: string = '';
  pokemonTypeTwo: string = '';
  booleanooo: boolean = false;


  constructor(private productosSrv: ProductosService) {}

  ngOnInit(): void {
    console.log(this.pokemonID);
  }

  private getTodosLosPokemones(): void {
    this.productosSrv.getPokemones().subscribe(
      (data: any) => {
        console.log(data.results);
        if (data.results) {
          this.pokemones = data.results;
        }
      },
      (error: any) => {
        console.log(error, 'error');
      }
    );
  }

  public getPokemonesById(): void {
    this.pokemonID = Math.floor(Math.random() * 150 + 1).toString();
    this.productosSrv
      .getPokemonesById(this.pokemonID)
      .subscribe((data: any) => {
        this.pokemonData = data;
        console.log(this.pokemonData);
        this.getPokemonTypes();
        this.pokemones.push(this.pokemonData);
      });
    this.pokemones = [];
  }

  private getPokemonTypes(): void {
    this.pokemonTypeOne = this.pokemonData.types[0].type.name;
    console.log("tipo 1", this.pokemonTypeOne)
    if(this.pokemonData.types[1]){
      this.pokemonTypeTwo = this.pokemonData.types[1].type.name;
    }
    // type undefined NO FUNCIONA
    // for (let i = 0; i < 10; i++){
    //   this.pokemonTypes = this.pokemonData.types[i].type.name
    //   console.log(this.pokemonTypes)
    // }
  }

}
