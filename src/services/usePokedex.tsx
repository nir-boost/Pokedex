import axios from "axios";
import { Pokemon } from "../types/PokemonType";

export const usePokedex = () => {


  const fetchPokemon = async (url: string) => {
    const response = await axios.get(url);
    let pokedex = response.data
    let poki: Pokemon = {
            id: pokedex.id,
            idView: createIdView(pokedex.id),
            name: pokedex.name,
            pic: pokedex.sprites.other.dream_world.front_default,
            stats: {
                hp: pokedex.stats[0].base_stat,
                attack: pokedex.stats[1].base_stat,
                defense: pokedex.stats[2].base_stat,
                specialAttack: pokedex.stats[3].base_stat,
                specialDefense: pokedex.stats[4].base_stat,
                speed: pokedex.stats[5].base_stat,
            },
            PokeTypes:{
                name1: pokedex.types[0].type.name
            }

    }
    if(pokedex.types.length>1){
        poki.PokeTypes.name2 = pokedex.types[1].type.name;
    }
    const  desc = await fetchPokemonSpecies( pokedex.species.url)
    poki.Description = desc
    return poki
    
  };

  const fetchPokemonSpecies = async (url: string) => {
    const response = await axios.get(url);
    let desc = response.data.flavor_text_entries[0].flavor_text
    desc = desc.split("\n").join("").split("\f").join("")
    return desc
  };

  const createIdView = (id: number) =>{
    let numOfDigits = 1;
    let idChecker = id;
    let idView = "#";
    while (idChecker > 9) {
      idChecker /= 10;
      numOfDigits++;
    }
    while (4 - numOfDigits !== 0) {
      numOfDigits++;
      idView += "0";
    }
    idView += id.toString();
    return idView;
  }

  return {fetchPokemon};
};