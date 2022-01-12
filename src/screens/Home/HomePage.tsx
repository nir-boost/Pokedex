import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { Pokemon } from "../../types/PokemonType";
import { usePokedexPage } from "../../services/usePokedexPage";
import CardPoke from "../../components/Cards/CardPoke";
import CardPokeWithDesc from "../../components/Cards/CardPokeWithDesc";
import {HomeStyle,PokeCards, Home} from "./style";

const HomePage = () => {
  const { fetchPokemons, page, setPage, pokemonsPage } = usePokedexPage();
  const [PokeDesc, setPokeDesc] = useState<Pokemon>(pokemonsPage[0]);
  const [isPokeDesc, setIsPokeDesc] = useState(false);

  useEffect(() => {
    fetchPokemons();
  }, [page,fetchPokemons]);

  const handleClickNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page,setPage]);

  const handleClickPrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page,setPage]);

  return (
    <Home>
      <div>
        {page > 0 ? <button onClick={handleClickPrevPage}> Prev Page</button> : ""}
        <button onClick={handleClickNextPage} > Next Page</button>
      </div>

      {!isPokeDesc ? (
        <PokeCards>
          {pokemonsPage.map((pokemon) => {
            return (
              <CardPoke
                key={pokemon.id}
                poke={pokemon}
                setPokeDesc={setPokeDesc}
                setIsPokeDesc={setIsPokeDesc}
                isPokeDesc={isPokeDesc}
              />
            );
          })}
        </PokeCards>
      ) : (
        <CardPokeWithDesc
          poke={PokeDesc}
          setIsPokeDesc={setIsPokeDesc}
          isPokeDesc={isPokeDesc}
        />
      )}
    </Home>
  );
};

export default HomePage;
