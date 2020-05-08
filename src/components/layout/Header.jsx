import React from "react";
import Title from "../Title.jsx";

function Header() {

    return (
      <header className="header">
        <Title 
          left="Data structures"
        />
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item"><a href="">Связанный список</a></li>
            <li className="menu__item"><a href="">Бинарное дерево поиска</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;