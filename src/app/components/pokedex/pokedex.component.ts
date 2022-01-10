import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon, PokemonTypes, PokemonStats  } from '../../interface/Pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {

  // TODO: AGREGAR PUBLIC O PRIVATE A LAS VARIABLES, ORDENAR Y BORRAR LAS QUE NO SE USAN

  pokemonID: number = 1;
  imageSpinner: boolean = true;
  pokemones: Pokemon[] = [];
  pokemonTypeOne: string = '';
  pokemonTypeTwo: string = '';
  weightInKilos: any;
  heightInMeters: any;
  pokemonName: string = '';
  pokemonFront: string = '';
  pokemonBack: string = '';
  pokemonStats: PokemonStats[] = [];
  pokemonShiny: string = '';

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
      const pokemonData = data
      console.log(data.id)
      this.pokemon = {
        name : pokemonData.name,
        front: pokemonData.sprites.front_default,
        back: pokemonData.sprites.back_default,
        weight: (pokemonData.weight * 0.1).toFixed(1),
        height:(pokemonData.height * 0.1).toFixed(1),
        stats: pokemonData.stats,
        frontShiny: pokemonData.sprites.front_shiny
      }
      this.pokemonTypes();


      this.pokemonName = this.pokemon.name;
      this.pokemonFront = this.pokemon.front;
      this.pokemonBack = this.pokemon.back;
      this.heightInMeters = this.pokemon.height;
      this.weightInKilos = this.pokemon.weight;
      this.pokemonStats = this.pokemon.stats
      this.pokemonShiny = this.pokemon.frontShiny

      this.pokemones.push(pokemonData)
    })
  }


  // FUNCION PARA TRAER LOS TIPOS DE POKEMON
  private pokemonTypes(): void {
    this.productosSrv.getPokemoneTypesById(this.pokemonID).subscribe((data: PokemonTypes[]) =>{
      const type = data;
      console.log(type[0].slot)
      console.log(data[0].slot)
      // pokemon único tipo
      if(type.length === 1){
        this.pokemonTypeOne = type[0].type.name;
        this.pokemonTypeTwo = '';
      }else{  // pokemon 2 tipos
        this.pokemonTypeOne = type[0].type.name;
        this.pokemonTypeTwo = type[1].type.name;
      }
    })
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
        image: this.pokemonShiny
      }
    })
  }


}
