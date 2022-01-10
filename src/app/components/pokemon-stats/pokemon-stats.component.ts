import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonStats } from '../../interface/Pokemon';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent implements OnInit {

  public id: number = 1;
  public name: string = '';

  public ps: number = 1;
  public attack: number = 1;
  public defense: number = 1;
  public specialA: number = 1;
  public specialD: number = 1;
  public speed: number = 1;
  public image: string = '';

  private stats: PokemonStats[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number, name: string, stats: PokemonStats[], image: string}
  ) {}

  ngOnInit(): void {
    this.initializePokemon();
    this.showStats();
  }

  initializePokemon() {
    this.id = this.data.id;
    this.name = this.data.name;
    this.stats = this.data.stats;
    this.image = this.data.image;
  }

  showStats() {
    //el valor que se pasa tiene que ser tipo number
    this.ps = this.stats[0].base_stat
    this.attack = this.stats[1].base_stat
    this.defense = this.stats[2].base_stat
    this.specialA = this.stats[3].base_stat
    this.specialD = this.stats[4].base_stat
    this.speed = this.stats[5].base_stat
  }

}
