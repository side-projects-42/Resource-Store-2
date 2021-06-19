import React, { useRef, useState } from "react";
import "../../App.css";
import SubmitButton from "../header/SubmitButton";
import { create } from "../../utils/jsonapi";
import { ACTIVITIES_URL } from "../../App";
import { useDispatch, useSelector } from "../../index";
import Checkboxes from "../Checkboxes";

/**
 *
 * @param {object} props
 *  @param {() => void} props.onSave
 */

export default function AddActivityForm({ onSave }) {
  let dispatch = useDispatch();

  let [isSaving, setIsSaving] = useState(false);

  let form = /** @type {import("react").MutableRefObject<HTMLFormElement>} */ (
    useRef()
  );

  async function addActivity() {
    let formData = new FormData(form.current);
    setIsSaving(true);

    /** @type {{ data: Activity }} */
    let payload = await create(
      `${ACTIVITIES_URL}.json?include=materials,days`,
      formData
    );

    form.current.reset();
    setIsSaving(false);
    onSave();
    dispatch({ type: "ADD_ACTIVITY", item: payload.data });
  }

  let materials = useSelector((state) => state.materials);

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        addActivity();
      }}
    >
      <div className="col-xl-10 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100">
          <div className="form-group card-body">
            <p className="text-lg font-weight-bold text-success text-uppercase mb-1">
              Create a New Activity
            </p>
            <label htmlFor="newActivitylName" className="font-weight-bold">
              Activity Name
            </label>
            <input
              autoFocus
              type="text"
              name="name"
              className="form-control"
              id="newActivity"
            />
            <br />
            <p className="font-weight-bold">Materials to Add</p>
            <Checkboxes models={materials} relationship="materials" />
            <SubmitButton disabled={isSaving} body="Create" />
          </div>
        </div>
      </div>
    </form>
  );
}
