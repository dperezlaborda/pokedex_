export interface PokemonTypes{
  slot: number;
  type: {
    name: string,
    url: string
  }
}

export interface PokemonStats{
  base_stat: number;
  effort:number,
  stat: {
    name: string,
    url: string
  }
}

export interface Pokemon{
  abilities: any;
  base_experiencie: number;
  forms: {[k:string]:string};
  game_indices: any;
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any;
  name: 'string';
  order: number;
  past_types: [];
  species: {
    name: string,
    url: string
  };
  sprites: {
    back_default: string,
    back_female: string | undefined,
    back_shiny: string | undefined,
    back_shiny_female: string | undefined,
    front_default:string,
    front_female: string | undefined,
    front_shiny: string,
    front_shiny_female: string | undefined
  }
  stats: PokemonStats[],
  types: PokemonTypes[],
  weight: number;
}


