import { combineReducers } from "redux";
import personalRecords from "./personalRecords";
import programs from "./programs";
import exercises from "./exercises";
import workouts from "./workouts";

export default combineReducers({
  personalRecords,
  workouts,
  programs,
  exercises
});
