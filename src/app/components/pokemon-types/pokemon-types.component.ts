import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrls: ['./pokemon-types.component.css']
})
export class PokemonTypesComponent implements OnInit {

  @Input() pokemonTypeOne: any;
  @Input () pokemonTypeTwo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
