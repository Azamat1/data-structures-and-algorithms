import React, { Component} from "react";
import Header from "./components/layout/Header.jsx";
import Home from "./pages/Home.jsx";
import HuffmanTree from "./pages/HuffmanTree.jsx";
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/app.css";

class App extends Component{
  render(){
    const { history } = this.props
    return (
      <div className="app">
        <Header></Header>
        <div className="main">
          <Switch>
              <Route history={history} path='/home' component={Home} />
              <Route history={history} path='/b-tree' component={Home} />
              <Route history={history} path='/huffman-tree' component={HuffmanTree} />
              <Redirect from='/' to='/home'/>
          </Switch>
          {/* <Aside/> */}
        </div>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;