import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import AddWorkouts from "./components/views/addWorkouts";
import Home from "./components/views/home";
//import Layout from "./components/layout/layout";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/addworkout" component={AddWorkouts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
