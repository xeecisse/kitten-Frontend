import { combineReducers } from "redux";
import authReducer from "./auth";
import modelReducer from "./models";

const rootReducer = combineReducers({
  auth: authReducer,
  models: modelReducer,
});

export default rootReducer;
