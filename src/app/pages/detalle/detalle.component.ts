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
  public pokemon: any;
  public weight: any;
  public height: any;
  public img: any;
  public abilities: any[] = [];

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
      this.pokemon = data;
      this.weight = (data.weight * 0.1).toFixed(1);
      this.height = (data.height * 0.1).toFixed(1);
      this.img = data.sprites.other.home.front_default;
      this.getPokemonAbilities();
    })
  }

  private getPokemonAbilities(): void{
    this.productosSrv.getPokemonAbilities(this.id).subscribe((data: any) =>{
      this.abilities.push(data);
      console.log(this.abilities[0][0]);
    })
  }

}
