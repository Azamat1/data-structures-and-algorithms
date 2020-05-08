import React, { Component} from "react";
import Header from "./components/layout/Header.jsx";
import Content from "./components/layout/Content.jsx";
import Nav from "./components/layout/Nav.jsx";
import Aside from "./components/layout/Aside.jsx";
import Footer from "./components/layout/Footer.jsx";
import "./styles/reset.css";
import "./styles/app.css";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Header></Header>
        <div class="main">
          <Nav></Nav>
          <Content></Content>
          {/* <Aside/> */}
        </div>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;