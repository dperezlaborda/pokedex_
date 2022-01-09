import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  // TODO: AGREGAR PUBLIC O PRIVATE A LAS VARIABLES, ORDENAR Y BORRAR LAS QUE NO SE USAN

  pokemonID: number = 1;
  pokemonData: any;
  imageSpinner: boolean = true;

  pokemonTypeOne: string = '';
  pokemonTypeTwo: string = '';


  weightInKilos: any;
  heightInMeters: any;

  pokemonName: string = '';
  pokemonFront: any;
  pokemonBack: any;

  pokemonStats: any[] = [];

  loading: boolean = true

  pokemon : any;

  constructor(
    private productosSrv: ProductosService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    // SE INICIALIZA CON UN POKEMON RANDOM
    this.getPokemon()
  }

  // FUNCION PARA HACER EL LLAMADO AL SERVICE
  private getPokemon(): void {
    this.productosSrv.getPokemonesById(this.pokemonID).subscribe((data: any) =>{
      this.pokemonData = data;
      console.log(this.pokemonData)
      this.pokemon = {
        name : this.pokemonData.name,
        front: this.pokemonData.sprites.front_default,
        back: this.pokemonData.sprites.back_default,
        weight : (this.pokemonData.weight * 0.1).toFixed(1),
        height : (this.pokemonData.height * 0.1).toFixed(1),
        stats: this.pokemonData.stats
      }
      this.pokemonTypes();

      this.pokemonName = this.pokemon.name;
      this.pokemonFront = this.pokemon.front;
      this.pokemonBack = this.pokemon.back;
      this.heightInMeters = this.pokemon.height;
      this.weightInKilos = this.pokemon.weight;
      this.pokemonStats = this.pokemon.stats

      console.log(this.pokemon);
    })
  }


  // FUNCION PARA TRAER LOS TIPOS DE POKEMON
  private pokemonTypes(): void {
    // pokemon único tipo
    if(this.pokemonData.types.length === 1){
      this.pokemonTypeOne = this.pokemonData.types[0].type.name;
      this.pokemonTypeTwo = '';
    }else{  // pokemon 2 tipos
      this.pokemonTypeOne = this.pokemonData.types[0].type.name;
      this.pokemonTypeTwo = this.pokemonData.types[1].type.name;
    }
  }

  // FUNCION PARA OBTENER UN POKEMON RANDOM
  public getRandomPokemon(): void {
    this.pokemonID = Math.floor(Math.random() * 150 + 1);
    this.getPokemon();
  }

  public previuosPokemon(): void {
    this.pokemonID --;
    this.getPokemon();
  }

  public nextPokemon(): void{
    this.pokemonID++;
    this.getPokemon();
  }

  public openDetail(): void{
    this.matDialog.open(PokemonDetailComponent, {
      data : {
        id: this.pokemonID,
        name: this.pokemonName,
        stats: this.pokemonStats,
        image: this.pokemonData.sprites.front_shiny
      }
    })
  }


}
