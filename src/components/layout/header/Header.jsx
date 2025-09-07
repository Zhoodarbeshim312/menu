import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import "./Header.scss";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Header = () => {
  const [menu, setMenu] = useState(false);
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
          <div className="header--menu">
            <button onClick={() => setMenu(!menu)}>
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
        <div
          style={{
            display: menu ? "flex" : "none",
          }}
          className="modal"
        >
          <div className="modal--nav">
            <NavLink to={"/"}>Interior</NavLink>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className="header--nav__language"
            >
              <a>EN</a>
              <a>RU</a>
              <a>KG</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
