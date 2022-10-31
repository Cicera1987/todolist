import { Link } from "react-router-dom";
import { ContainerNav } from "./styles";

const NavBar = () =>{

    return (
      <ContainerNav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">Sobre</Link>
        </li>
      </ContainerNav>
    );
}

export default NavBar;