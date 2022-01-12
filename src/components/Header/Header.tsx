import { images } from "../../constants"
import "./style.css"

const Header = () =>{


    return (<div className="Header"> 
        <img className="ImgHeader" src={images.Logo} alt="Logo" />

    </div>
    )
}

export default Header;