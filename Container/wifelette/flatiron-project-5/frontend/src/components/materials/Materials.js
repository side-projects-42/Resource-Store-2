import React, { useEffect, useState } from "react";
import { MATERIALS_URL } from "../../App";
import "../../App.css";
import HeaderBar from "../header/HeaderBar";
import Table from "../tables/Table";
import AddMaterialsForm from "./AddMaterialsForm";
import { useSelector, useDispatch } from "../../index";
import { destroy } from "../../utils/jsonapi";
import { fetchMaterials } from "../../reducers/materials";

// FYI: When referencing the default export, {} isn't needed. If you see {}. it's importing something that isn't the default; it's a Named Export.

export default function Materials() {
  let unfilteredMaterials = useSelector((state) => state.materials);

  let dispatch = useDispatch();

  // useEffect will make the Fetch call(s) run immediately when the Component renders
  // The [] tells it only to run fetchMaterials the first time the component is rendered.
  // In this case it's also telling it to rerun any time the dispatch function changes. This won't happen, but I put it here to get rid of a browser warning.
  // If you put the name of a variable into the [], it would mean "only do fetchAcitivites when the component renders IF that variable changes"
  // It is the modern alternative/replacement for `ComponentDidMount`
  useEffect(() => {
    dispatch(fetchMaterials());
  }, [dispatch]);

  /**
   * @param {string} id
   */
  async function deleteMaterial(id) {
    await destroy(`${MATERIALS_URL}/${id}`);

    dispatch({ type: "REMOVE_MATERIAL", id });
  }

  // isFiltered is the state Data, and setIsFiltered is a function to update that Data
  let [isFiltered, setIsFiltered] = useState(false);

  let filterDetails = {
    buttonTextOnHide: "Hide Unused Materials",
    buttonTextOnShow: "Show Unused Materials",
    isFiltered,
    onFilter: () => setIsFiltered(!isFiltered),
  };

  let [isShowingForm, setShowingForm] = useState(false);

  let columnNames = ["Material", "Used For"];

  let rows = null;

  let materials = unfilteredMaterials;

  // Wait until you actually have materials...
  if (materials !== null) {
    // And then, here's what to do if they're filtered:
    if (isFiltered) {
      // Filter out the ones that don't have any activities attached
      materials = materials.filter((m) => m.activities.length > 0);
    }
    // Whether or not it's filtered, next do this:
    rows = materials.map((material) => {
      let columns = [
        material.name,
        material.activities.map((a) => a.name).join(", "),
      ];

      return {
        id: material.id,
        columns,
      };
    });
  }

  return (
    <div>
      <HeaderBar
        headline="Materials"
        mainButton="Create a New Material"
        filter={filterDetails}
        onButtonClick={() => {
          setShowingForm(!isShowingForm);
        }}
      />
      {isShowingForm ? (
        <AddMaterialsForm onSave={() => setShowingForm(false)} />
      ) : null}
      <Table onDeleteRow={deleteMaterial} columns={columnNames} rows={rows} />
    </div>
  );
}
