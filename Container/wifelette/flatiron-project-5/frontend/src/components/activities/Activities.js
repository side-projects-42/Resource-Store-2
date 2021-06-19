import React, { useEffect, useState } from "react";
import { ACTIVITIES_URL } from "../../App";
import "../../App.css";
import { useDispatch, useSelector } from "../../index";
import { fetchActivities } from "../../reducers/activities";
import { fetchMaterials } from "../../reducers/materials";
import { shortDate } from "../../utils/dates";
import { destroy } from "../../utils/jsonapi";
import HeaderBar from "../header/HeaderBar";
import Table from "../tables/Table";
import AddActivityForm from "./AddActivityForm";

export default function Activities() {
  let unfilteredActivities = useSelector((state) => state.activities);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
    dispatch(fetchMaterials());
  }, [dispatch]);

  /**
   * @param {string} id
   */
  async function deleteActivity(id) {
    await destroy(`${ACTIVITIES_URL}/${id}`);

    dispatch({ type: "REMOVE_ACTIVITY", id });
  }

  let [isFiltered, setIsFiltered] = useState(false);

  let filterDetails = {
    buttonTextOnHide: "Hide Unscheduled Activities",
    buttonTextOnShow: "Show Unscheduled Activities",
    isFiltered,
    onFilter: () => setIsFiltered(!isFiltered),
  };

  let [isShowingForm, setShowingForm] = useState(false);

  let columnDetails = ["Activity", "Materials", "Scheduled For"];

  let rows = null;
  let activities = unfilteredActivities;

  if (activities !== null) {
    if (isFiltered) {
      activities = activities.filter((a) => a.days.length > 0);
    }

    rows = activities.map((activity) => {
      let columns = [
        activity.name,
        activity.materials.map((m) => m.name).join(", "),
        activity.days.map((d) => shortDate(d.date)).join(", "),
      ];

      return {
        id: activity.id,
        columns,
      };
    });
  }

  return (
    <div>
      <HeaderBar
        headline="Activities"
        mainButton="Create a New Activity"
        filter={filterDetails}
        onButtonClick={() => {
          setShowingForm(!isShowingForm);
        }}
      />
      {isShowingForm ? (
        <AddActivityForm onSave={() => setShowingForm(false)} />
      ) : null}
      <Table onDeleteRow={deleteActivity} columns={columnDetails} rows={rows} />
    </div>
  );
}
