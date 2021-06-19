import React, { useRef, useState } from "react";
import "../../App.css";
import SubmitButton from "../header/SubmitButton";
import { create } from "../../utils/jsonapi";
import { MATERIALS_URL } from "../../App";
import { useDispatch } from "../../index";

/**
 * onSave is a prop to make the Form disappear again after it's submitted.
 *
 * @param {object} props
 *  @param {() => void} props.onSave
 */

export default function AddMaterialsForm({ onSave }) {
  // useDispatch is a hook that gives us back a function, so by making the variable name `dispatch` we're able to use it like a simpler function
  let dispatch = useDispatch();

  // isSaving is the state Data, and setIsSaving is a function to update that Data
  let [isSaving, setIsSaving] = useState(false);

  // useRef allows me to create a variable that is a DOM node, which we need for referring to a form (pre-React I'd have done this with a querySelector).
  // Later, I can use `form.current` to refer to the form element / node in other code/components
  // FYI: useRef is in parenthesis just because the inline type needs it that way.
  let form = /** @type {import("react").MutableRefObject<HTMLFormElement>} */ (
    useRef()
  );

  async function addMaterial() {
    // FormData is a browser feature that you use to get form info out of a form.
    let formData = new FormData(form.current);

    // Since we're about to make the request, set `setIsSaving` to true, which will make the submit button disabled and unable to be accidentally submitted twice
    // For the most part this happens too fast in my currently-simple local dev environment, for it to matter.
    setIsSaving(true);

    // `create` is a utility I wrote to simplify making my backend requests, along with the other requests like `delete` and `update`.
    /** @type {{ data: Material }} */
    let payload = await create(
      `${MATERIALS_URL}.json?include=activities`,
      formData
    );

    // Reset the form, ie clear it out
    form.current.reset();

    // Once the save operation is done, toggle it back to false, which will re-enable the SubmitButton for when the Form is shown again. Later I added onSave so this is less useful.
    setIsSaving(false);

    // Toggle it back to hiding the form
    onSave();

    // Next we'll dispatch the action to the Redux store
    dispatch({ type: "ADD_MATERIAL", item: payload.data });
  }

  return (
    // ref is a "magic" prop name that makes `form.current` equal to whatever element we're inside of
    // onSubmit handles the form being submitted, which must start with preventdefault so we don't load the page
    // After that, it calls addMaterial, which is the async function that'll do the work of adding the new Material based on the data submitted in the form
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        addMaterial();
      }}
    >
      <div className="col-xl-10 col-md-6 mb-4">
        <div className="card border-left-success shadow">
          <div className="form-group card-body">
            <p className="text-lg font-weight-bold text-success text-uppercase mb-1">
              Create a New Material
            </p>
            <label htmlFor="newMaterialName">Material Name</label>
            {/* The `name="name" here results in `name` and its value being in the FormData */}
            <input
              autoFocus
              type="text"
              name="name"
              className="form-control"
              id="newMaterial"
              placeholder="Bubbles, Chalk, Water, etc."
            />
            <SubmitButton disabled={isSaving} body="Create" />
          </div>
        </div>
      </div>
    </form>
  );
}
