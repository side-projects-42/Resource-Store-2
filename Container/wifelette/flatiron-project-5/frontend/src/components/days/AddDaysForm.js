import React, { useRef, useState } from "react";
import "../../App.css";
import SubmitButton from "../header/SubmitButton";
import { create } from "../../utils/jsonapi";
import { DAYS_URL } from "../../App";
import { useDispatch, useSelector } from "../../index";
import Checkboxes from "../Checkboxes";

/**
 *
 * @param {object} props
 *  @param {() => void} props.onSave
 */

export default function AddDaysForm({ onSave }) {
  let dispatch = useDispatch();

  let [isSaving, setIsSaving] = useState(false);

  let form = /** @type {import("react").MutableRefObject<HTMLFormElement>} */ (
    useRef()
  );

  async function addDay() {
    let formData = new FormData(form.current);
    setIsSaving(true);

    /** @type {{ data: Day }} */
    let payload = await create(
      `${DAYS_URL}.json?include=activities.materials`,
      formData
    );

    form.current.reset();
    setIsSaving(false);
    onSave();
    dispatch({ type: "ADD_DAY", item: payload.data });
  }

  let activities = useSelector((state) => state.activities);

  return (
    <form
      className="dayForm"
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        addDay();
      }}
    >
      <div className="col-xl-10 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100">
          <div className="form-group card-body">
            <p className="text-lg font-weight-bold text-success text-uppercase mb-1">
              Create a New Day
            </p>
            <label htmlFor="newDate" className="font-weight-bold">
              Calendar Date
            </label>
            <input
              type="date"
              name="date"
              className="form-control"
              id="newDate"
            />
            <br />
            <p className="font-weight-bold">Activities to Add</p>
            <Checkboxes models={activities} relationship="activities" />
            <SubmitButton disabled={isSaving} body="Create" />
          </div>
        </div>
      </div>
    </form>
  );
}
