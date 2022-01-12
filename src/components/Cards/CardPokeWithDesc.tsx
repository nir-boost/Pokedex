import { Dispatch,SetStateAction,useCallback} from "react";
import { Pokemon } from "../../types/PokemonType";
import "./style.css";

type props = {
  poke: Pokemon,
  isPokeDesc: boolean,
  setIsPokeDesc:  Dispatch<SetStateAction<boolean>>;
};

const CardPokeWithDesc = (props: props) => {

    const { poke, isPokeDesc, setIsPokeDesc } = props;

    const handleClickPokedex = useCallback(()=>{
      setIsPokeDesc(!isPokeDesc)
    },[setIsPokeDesc,isPokeDesc])

 
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

export default CardPokeWithDesc;
