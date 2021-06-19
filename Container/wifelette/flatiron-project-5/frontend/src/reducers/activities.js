/**
 * @typedef {object} AddActivityAction
 * @property {"ADD_ACTIVITY"} type
 * @property {Activity} item
 *
 * @typedef {object} RemoveActivityAction
 * @property {"REMOVE_ACTIVITY"} type
 * @property {string} id
 *
 * @typedef {object} InitializeActivitiesAction
 * @property {"INITIALIZE_ACTIVITIES"} type
 * @property {Activity[]} items
 *
 * @typedef {AddActivityAction | RemoveActivityAction | InitializeActivitiesAction} ActivityAction
 *
 * @typedef {Activity[]} ActivityState
 */

import { ACTIVITIES_URL } from "../App";
import { getJSON } from "../utils/jsonapi";

/**
 * @param {Activity[] | undefined} state
 * @param {ActivityAction} action
 */
export default (state = [], action) => {
  switch (action.type) {
    // This action is used when a new activity list is returned from the server,
    // to populate the initial redux state (which previously is an empty array by default)
    case "INITIALIZE_ACTIVITIES": {
      return action.items;
    }

    // This action is used when we add a new activity locally, so that it is
    // inserted in the appropriate place in the list
    case "ADD_ACTIVITY": {
      let newList = [...state, action.item];

      newList.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();

        if (aName < bName) {
          return -1;
        } else if (aName > bName) {
          return 1;
        } else {
          return 0;
        }
      });

      return newList;
    }

    case "REMOVE_ACTIVITY": {
      return state.filter((item) => item.id !== action.id);
    }

    default: {
      return state;
    }
  }
};

/**
 * This is a function that returns a function (thunk). The returned function takes a `dispatch` (the same thing that is returned by `useDispatch`).
 * Because we added the thunk middleware, we can invoke this action using `dispatch(fetchActivities())`.
 *
 * The thunk middleware turns a function like this into a valid action.
 *
 * @returns { (dispatch: import("../index").AppDispatch) => void }
 */
export function fetchActivities() {
  return async (dispatch) => {
    /** @type {{ data: Activity[] }} */
    let newActivities = await getJSON(
      `${ACTIVITIES_URL}.json?sort=name&include=materials,days`
    );

    dispatch({
      type: "INITIALIZE_ACTIVITIES",
      items: newActivities.data,
    });
  };
}
