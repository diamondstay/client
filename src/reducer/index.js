import { combineReducers } from "redux";
// import students from './students'
// import studentUpdating from './studentUpdating'
import searchResult from "./searchResult";
const appReducer = combineReducers({
  // students: students,
  // studentUpdating: studentUpdating,
  searchResult: searchResult,
});

export default appReducer;
