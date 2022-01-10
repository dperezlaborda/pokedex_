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

export interface Pokemon {
  abilities: any;
  base_experience: number;
  // forms: {[k:string]:string};
  forms: any;
  game_indices: any;
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any;
  name: 'string';
  order: number;
  past_types: any;
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
    front_shiny_female: string | undefined,
    other: any,
    //DEJO EN "ANY" PORQUE NO LEVANTA EL OFFICIAL ARTWORK
    // other: {
    //   dream_world: {
    //     front_default: string
    //     front_female:string | undefined
    //   }
    //   home: {
    //     front_default: string | undefined
    //     front_female: string | undefined
    //     front_shiny: string | undefined
    //     front_shiny_female: string | undefined
    //   }
    //   official_artwork: {
    //     front_default: string
    //   }
    versions: any
  }
  stats: PokemonStats[],
  types: PokemonTypes[],
  weight: number;
}

