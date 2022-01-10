import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component';
import { Pokemon, PokemonTypes, PokemonStats  } from '../../interface/Pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {

  // TODO: AGREGAR PUBLIC O PRIVATE A LAS VARIABLES, ORDENAR Y BORRAR LAS QUE NO SE USAN

  // variables para renderizar HTML
  public pokemonID: number = 1;
  public pokemonTypeOne: string = '';
  public pokemonTypeTwo: string = '';
  public weightInKilos: any;
  public heightInMeters: any;
  public pokemonName: string = '';
  public pokemonFront: string = '';
  public pokemonBack: string = '';

  // variables que se usan en .ts
  private pokemones: Pokemon[] = [];
  private pokemonStats: PokemonStats[] = [];
  private pokemonShiny: string = '';

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

      let pokemon;
      pokemon = {
        name : pokemonData.name,
        front: pokemonData.sprites.front_default,
        back: pokemonData.sprites.back_default,
        weight: (pokemonData.weight * 0.1).toFixed(1),
        height:(pokemonData.height * 0.1).toFixed(1),
        stats: pokemonData.stats,
        frontShiny: pokemonData.sprites.front_shiny
      }
      this.pokemonTypes();


      this.pokemonName = pokemon.name;
      this.pokemonFront = pokemon.front;
      this.pokemonBack = pokemon.back;
      this.heightInMeters = pokemon.height;
      this.weightInKilos = pokemon.weight;
      this.pokemonStats = pokemon.stats;
      this.pokemonShiny = pokemon.frontShiny;

      this.pokemones.push(pokemonData);
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

  // FUNCION PARA ABRIR MODAL DE PUNTOS DE BASE
  public openDetail(): void{
    this.matDialog.open(PokemonStatsComponent, {
      data : {
        id: this.pokemonID,
        name: this.pokemonName,
        stats: this.pokemonStats,
        image: this.pokemonShiny
      }
    })
  }


}
