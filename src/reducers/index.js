//Reducers
import loggedReducer from "./isLogged";
import darkReducer from "./isDark";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  signIn: loggedReducer,
  isDark: darkReducer,
});

export default allReducers;
