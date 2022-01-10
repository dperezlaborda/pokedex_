import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interface/Pokemon';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id: any;
  public name: string = '';
  public weight: string = '';
  public height: string = '';
  public img: string = '';
  public abilities: any[] = [];
  public pokemonTypeOne: string = '';
  public pokemonTypeTwo: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosSrv: ProductosService,
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getPokemonesById();
  }

  private getPokemonesById(): void{
    this.productosSrv.getPokemonesById(this.id).subscribe((data: any) =>{
      //TODO: HACER LA LOGICA EN EL COMPONENTE app-pokemon-types Y PASARLE NADA MAS EL ARRAY DE TYPES POR PARAMETROS
      if(data.types.length === 1){
        this.pokemonTypeOne = data.types[0].type.name;
        this.pokemonTypeTwo = '';
      }else{
        this.pokemonTypeOne = data.types[0].type.name;
        this.pokemonTypeTwo = data.types[1].type.name;
      }
      this.weight = (data.weight * 0.1).toFixed(1);
      this.height = (data.height * 0.1).toFixed(1);
      this.img = data.sprites.other.home.front_default;
      this.getPokemonAbilities();
    })
  }

  private getPokemonAbilities(): void{
    this.productosSrv.getPokemonAbilities(this.id).subscribe((data: Pokemon[]) =>{
      this.abilities.push(data);
      console.log(this.abilities);
    })
  }

}
