import React from "react";
import Title from "../Title.jsx";

function Nav() {

    return(
      <nav class="nav">
        <Title
          center={<h2>Navigation </h2>}
        />
        <ul className="contents">
          <li className="contents__section"><a href="">Введение и основные понятия</a></li>
          <li className="contents__section"><a href="">Дерево поиска</a></li>
        </ul>
      </nav>
    );
}

export default Nav;