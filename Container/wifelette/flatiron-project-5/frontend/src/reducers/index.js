import { combineReducers } from "redux";
import activities from "./activities";
import materials from "./materials";
import days from "./days";

/**
 * @typedef {import("./activities").ActivityAction | import("./materials").MaterialAction | import("./days").DayAction} AppAction
 * @typedef { { activities: import("./activities").ActivityState, materials: import("./materials").MaterialState, days: import("./days").DayState } } AppState
 */

export const allReducers = combineReducers({
  activities,
  materials,
  days,
});
