import { useState } from "react";
import axios from "axios";
import { Pokemon } from "../types/PokemonType";
import { usePokedex } from "./usePokedex";

export const usePokedexPage = () => {
  const [page, setPage] = useState(0);
  const [pokemonsPage, setPokemons] = useState<Pokemon [] >([]);
  const [numOfPokeInPage] = useState(16);
  const {fetchPokemon} = usePokedex()


  const fetchPokemons = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page*numOfPokeInPage}&limit=${numOfPokeInPage}}`);
    let pokimonsUrl = response.data.results
    const pokemonsTemp : Promise<Pokemon>[] = [];
        for(let i:number = 0;i<pokimonsUrl.length;i++){
     pokemonsTemp.push(fetchPokemon(pokimonsUrl[i].url))
    }
    const p = await Promise.all(pokemonsTemp)
    setPokemons(p)
  };

  

  return { fetchPokemons, page, setPage, pokemonsPage };
};