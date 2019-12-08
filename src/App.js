import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";

import ProductList from "./components/ProductList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ProductList}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
