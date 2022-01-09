import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  @Input() pokemones: any = [];

  ngOnInit(): void {
  }

}
