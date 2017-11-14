import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combinedReducer from "../components/reducers/combinedReducer";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default function configureStore(initialState) {
  return createStore(
    combinedReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
}
