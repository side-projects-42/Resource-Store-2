import React from "react";
import { update } from "../../utils/jsonapi";
import { DAYS_URL } from "../../App";
import { useDispatch } from "../../index";

/**
 * @param {object} props
 *  @param {Activity} props.activity
 *  @param {Day} props.day
 */
export default function DayActivity({ activity, day }) {
  let dispatch = useDispatch();

  async function deleteActivity() {
    let data = new FormData();

    data.append("activities[disassociate]", String(activity.id));

    await update(
      `${DAYS_URL}/${day.id}.json?include=activities.materials`,
      data
    );

    dispatch({
      type: "UPDATE_DAY_ACTIVITIES",
      dayId: day.id,
      activities: day.activities.filter((a) => a.id !== activity.id),
    });
  }

  return (
    <>
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-success text-lg">
          {activity.name}
        </h6>
        <button
          type="button"
          onClick={deleteActivity}
          className="close delete-activity"
          data-dismiss="alert"
          aria-label="Delete"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="card-body">
        <ul className="materials list-group list-group-flush text-md">
          <MaterialList materials={activity.materials} />
        </ul>
      </div>
    </>
  );
}

/**
 * @param {object} props
 * @param {Material[]} props.materials
 */
function MaterialList({ materials }) {
  if (materials.length === 0) {
    return <li className="list-group-item">No materials needed</li>;
  } else {
    return (
      <>
        {materials.map((material) => (
          <li key={material.id} className="list-group-item">
            {material.name}
          </li>
        ))}
      </>
    );
  }
}
