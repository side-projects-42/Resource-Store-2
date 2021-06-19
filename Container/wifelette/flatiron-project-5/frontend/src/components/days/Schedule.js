import React, { useState } from "react";
import { DAYS_URL } from "../../App";
import { useDispatch } from "../../index";
import { dateName, dayName } from "../../utils/day-date-names";
import { destroy } from "../../utils/jsonapi";
import DayActivity from "./DayActivity";
import UpdateDayForm from "./UpdateDayForm";

/**
 * @param {object} props
 *  @param {Day} props.day
 */
export default function Schedule({ day }) {
  let [showActivityForm, setShowActivityForm] = useState(false);

  let dispatch = useDispatch();

  /**
   * @param {string} id
   */
  async function deleteDay(id) {
    await destroy(`${DAYS_URL}/${id}`);

    dispatch({ type: "REMOVE_DAY", id });
  }

  return (
    <div className="col-xl-10 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                {dateName(day.date)}
              </div>
              <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">
                {dayName(day.date)}
              </div>
              <div className="h5 mb-0 text-gray-800 activities">
                {day.activities.map((activity) => (
                  <DayActivity
                    key={activity.id}
                    activity={activity}
                    day={day}
                  />
                ))}
              </div>
              {showActivityForm ? (
                <UpdateDayForm
                  day={day}
                  onSave={() => setShowActivityForm(false)}
                />
              ) : null}
              <div className="d-flex justify-content-end day-button-container">
                <div className="xadd-activity mr-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowActivityForm(!showActivityForm);
                    }}
                    className={`btn btn-${
                      showActivityForm ? "warning" : "success"
                    } btn-circle add-activities-btn`}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={showActivityForm ? "Cancel" : "Add an Activity"}
                  >
                    <i
                      className={`fas fa-${
                        showActivityForm ? "times" : "plus"
                      }`}
                    ></i>
                  </a>
                </div>
                <div className="add-activity mr-1">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteDay(day.id);
                    }}
                    className="btn btn-danger btn-circle"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Clear the Day"
                  >
                    <i className="fas fa-trash"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
