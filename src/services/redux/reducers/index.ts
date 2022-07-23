import { combineReducers } from "redux";
import formReducer from "./form";

const reducers = combineReducers({
  form: formReducer,
});
export default reducers;
