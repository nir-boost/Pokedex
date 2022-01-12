import { Dispatch, SetStateAction, useCallback} from "react";
import { Pokemon } from "../../types/PokemonType";
import "./style.css";

type props = {
  poke: Pokemon,
  isPokeDesc: boolean,
  setPokeDesc:  Dispatch<SetStateAction<Pokemon>>;
  setIsPokeDesc:  Dispatch<SetStateAction<boolean>>;
};

const CardPoke = (props: props) => {
  const { poke, isPokeDesc, setPokeDesc, setIsPokeDesc } = props;

  const handleClickPokedex = useCallback(()=>{
    setIsPokeDesc(!isPokeDesc)
    setPokeDesc(poke)
  },[poke,setPokeDesc,isPokeDesc,setIsPokeDesc])

  return (
    <button className="CardPoke" onClick={handleClickPokedex}>
      <div className="PokeId">
        <h3>{poke.idView}</h3>
      </div>
      <img className="ImgCardPoke" src={poke.pic} alt="Pokemon" />
      <div className="PokeName">
        <h2>{poke.name}</h2>
      </div>
    </button>
  );
};

export default CardPoke;
