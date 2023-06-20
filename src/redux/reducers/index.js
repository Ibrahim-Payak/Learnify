import { combineReducers } from "redux";
import courses from "./courseReducers";
import authors from "./authorReducers";
import apiCallsInProgress from "./apiStatusReducers";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress,
});

export default rootReducer;
