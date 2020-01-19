import { combineReducers } from "redux";
import alert from "./alert";
import loan from "./loan";

export default combineReducers({
  alert,
  loan
});
