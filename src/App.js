import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { loadState, saveState } from "./store/localStorage";
import configureStore from "./store/configureStore";
import throttle from "lodash/throttle";

import AddWorkouts from "./components/views/addWorkouts";
import Home from "./components/views/home";
import WorkoutsList from "./components/views/workoutsList";

const initialState = loadState();
const store = configureStore(initialState);
store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState(state);
  }, 2500)
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/addworkout" component={AddWorkouts} />
            <Route path="/workoutslist" component={WorkoutsList} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
