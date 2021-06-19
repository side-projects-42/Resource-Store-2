/**
 * @typedef {object} AddDayAction
 * @property {"ADD_DAY"} type
 * @property {Day} item
 *
 * @typedef {object} RemoveDayAction
 * @property {"REMOVE_DAY"} type
 * @property {string} id
 *
 * @typedef {object} InitializeDaysAction
 * @property {"INITIALIZE_DAYS"} type
 * @property {Day[]} items
 *
 * @typedef {object} UpdateDayActivities
 * @property {"UPDATE_DAY_ACTIVITIES"} type
 * @property {string} dayId
 * @property {Activity[]} activities
 *
 * @typedef {AddDayAction | RemoveDayAction | InitializeDaysAction | UpdateDayActivities} DayAction
 *
 * @typedef {Day[]} DayState
 */

import { DAYS_URL } from "../App";
import { AppDispatch } from "../index";
import { getJSON } from "../utils/jsonapi";

/**
 * @param {Day[] | undefined} state
 * @param {DayAction} action
 */
export default (state = [], action) => {
  switch (action.type) {
    // This action is used when a new day list is returned from the server,
    // because it's already sorted on the backend
    case "INITIALIZE_DAYS": {
      return action.items;
    }

    case "UPDATE_DAY_ACTIVITIES": {
      return state.map((currentDay) => {
        if ((currentDay.id = action.dayId)) {
          return {
            ...currentDay,
            activities: action.activities,
          };
        } else {
          return currentDay;
        }
      });
    }

    // This action is used when we add a new day locally, so that it is
    // inserted in the appropriate place in the list. We sort by `date`,
    // to match the server sort we expect when we fetch
    case "ADD_DAY": {
      let newList = [...state, action.item];

      newList.sort((a, b) => {
        let aDate = a.date;
        let bDate = b.date;

        if (aDate < bDate) {
          return -1;
        } else if (aDate > bDate) {
          return 1;
        } else {
          return 0;
        }
      });

      return newList;
    }

    case "REMOVE_DAY": {
      return state.filter((item) => item.id !== action.id);
    }

    default: {
      return state;
    }
  }
};

/**
 * @returns { (dispatch: AppDispatch) => void }
 */
export function fetchDays() {
  return async (dispatch) => {
    const newDays = await getJSON(
      `${DAYS_URL}.json?sort=date&include=activities.materials`
    );

    dispatch({
      type: "INITIALIZE_DAYS",
      items: newDays.data,
    });
  };
}
