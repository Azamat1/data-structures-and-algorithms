import React from "react";
import {NavLink} from "react-router-dom";
import Title from "../Title.jsx";

function Header() {

    return (
      <header className="header">
        <Title 
          left="Data structures"
        />
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item"><NavLink to="/home">Связанный список</NavLink></li>
            <li className="menu__item"><NavLink to="/huffman-tree">Дерево Хаффмана</NavLink></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;