import { Link } from "react-router-dom";
import { ContainerNav, ContainerLInk } from "./styles";
import {
  HiHome,
  HiUserCircle,
  HiOutlineDocumentText,
  HiOutlineUserAdd,
} from "react-icons/hi";

const NavBar = () => {

    return (
      <ContainerNav>
        <li>
          <Link to="/">
            <HiHome font-size={25} color="#ff4089" />
          </Link>
        </li>
        <ContainerLInk>
          <li>
            <Link to="about">
              <HiOutlineDocumentText font-size={25} color="#ff4089" />
            </Link>
          </li>

          <li>
            <Link to="/login">
              <HiUserCircle font-size={25} color="#ff4089" />
            </Link>
          </li>
        </ContainerLInk>
      </ContainerNav>
    );
}

export default NavBar;