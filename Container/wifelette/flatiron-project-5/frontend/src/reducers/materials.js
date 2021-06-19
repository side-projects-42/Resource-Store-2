/**
 * @typedef {object} AddMaterialAction
 * @property {"ADD_MATERIAL"} type
 * @property {Material} item
 *
 * @typedef {object} RemoveMaterialAction
 * @property {"REMOVE_MATERIAL"} type
 * @property {string} id
 *
 * @typedef {object} InitializeMaterialsAction
 * @property {"INITIALIZE_MATERIALS"} type
 * @property {Material[]} items
 *
 * @typedef {object} FetchMaterialsAction
 * @property {"FETCH_MATERIALS"} type
 *
 * @typedef {AddMaterialAction | RemoveMaterialAction | InitializeMaterialsAction} MaterialAction
 *
 * @typedef {Material[]} MaterialState
 */

import { getJSON } from "../utils/jsonapi";
import { MATERIALS_URL } from "../App";
import { AppDispatch } from "../index";

/**
 * @param {Material[] | undefined} state
 * @param {MaterialAction} action
 */
export default (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_MATERIALS": {
      return action.items;
    }

    case "ADD_MATERIAL": {
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

    case "REMOVE_MATERIAL": {
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
export function fetchMaterials() {
  return async (dispatch) => {
    const newMaterials = await getJSON(
      `${MATERIALS_URL}.json?sort=name&include=activities`
    );

    dispatch({
      type: "INITIALIZE_MATERIALS",
      items: newMaterials.data,
    });
  };
}
