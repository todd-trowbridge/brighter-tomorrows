import { combineReducers } from "redux";
import testReducer from "./Tests";

const rootReducer = combineReducers({ testReducer });

export default rootReducer;