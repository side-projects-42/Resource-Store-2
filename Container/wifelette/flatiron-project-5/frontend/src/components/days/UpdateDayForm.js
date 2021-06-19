import React from "react";
import { DAYS_URL } from "../../App";
import { useDispatch, useSelector } from "../../index";
import { update } from "../../utils/jsonapi";
import Checkboxes from "../Checkboxes";
import SubmitButton from "../header/SubmitButton";

/**
 * @param {object} props
 *  @param {Day} props.day
 *  @param { () => void } props.onSave
 */
export default function UpdateDayForm({ day, onSave }) {
  let activities = useSelector((state) => state.activities);
  let dispatch = useDispatch();

  /**
   * @param {HTMLFormElement} formElement
   */
  async function updateDay(formElement) {
    let data = new FormData(formElement);

    await update(`${DAYS_URL}/${day.id}.json`, data);

    onSave();
    let activityIDs = data.getAll("activities[]");

    let assignedActivities = activityIDs.map(
      (id) =>
        /** @type {Activity} */ (
          activities.find((activity) => activity.id === id)
        )
    );

    dispatch({
      type: "UPDATE_DAY_ACTIVITIES",
      dayId: day.id,
      activities: [...day.activities, ...assignedActivities],
    });
  }
  // dom.querySelector(".activityForm").addEventListener("submit", async (e) => {
  //   e.preventDefault();

  //   // FormData is a Map-like object that contains the names and values of the form controls.
  //   let data = new FormData(/** @type {HTMLFormElement} */ (e.target));

  //   await update(`${DAYS_URL}/${day.id}.json`, data);

  //   let activityIDs = data.getAll("activities[]");
  //   let activities = activityIDs.map((id) =>
  //     activitiesMaster.find((activity) => activity.id === id)
  //   );

  //   day.activities.push(...activities);
  //   showActivityFormForDayMaster = undefined;

  //   main({
  //     flash: {
  //       type: "success",
  //       body: `You've successfully added activities to ${dayName(
  //         day.date
  //       )}, ${dateName(day.date)}.`,
  //     },
  //   });
  // });

  // return dom;

  return (
    <form
      className="activityForm mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        updateDay(/** @type {HTMLFormElement} */ (e.target));
      }}
    >
      <div className="card border-left-success">
        <div className="card-body mb-2">
          <div className="form-check">
            <Checkboxes
              models={activities.filter(
                (activity) => !day.activities.find((a) => a.id === activity.id)
              )}
              relationship="activities"
            />
          </div>
          <SubmitButton body="Add Activity" />
        </div>
      </div>
    </form>
  );
}
