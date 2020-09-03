import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/country/:alpha3Code">
            <CountryDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
