import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) //para trabajar con acciones asíncronas
);

export default store;
