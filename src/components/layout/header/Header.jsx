import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import "./Header.scss";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>Restaurant</h1>
          <div className="header--nav">
            <NavLink to={"/"}>Interior</NavLink>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
            <div className="header--nav__form">
              <input type="text" placeholder="Search" />
              <button>
                <IoSearchOutline />
              </button>
            </div>
            <select>
              <option value="En">En</option>
              <option value="Ru">Ru</option>
              <option value="Kg">Kg</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
