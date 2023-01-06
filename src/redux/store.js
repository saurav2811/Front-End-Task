import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";


export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  
  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

