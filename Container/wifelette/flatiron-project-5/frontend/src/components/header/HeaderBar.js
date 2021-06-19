import React from "react";
import FilterButton from "./FilterButton";

/**
 *
 * @param {object} props
 *  @param {string} props.headline
 *  @param {string} props.mainButton
 *  @param {FilterDetails} [props.filter]
 *  @param { () => void } [props.onButtonClick]
 * @returns {JSX.Element}
 */

export default function HeaderBar({
  headline,
  mainButton,
  filter,
  // We're setting a default of an empty function, but really it's whatever action is on the other side—as in, whatever function <HeaderBar /> passed in as a prop
  onButtonClick = () => {},
}) {
  return (
    <div className="container-fluid whole-page" style={{ paddingRight: "0px" }}>
      <h1 className="h3 mb-4 text-gray-800 col-xl-10">
        {headline}
        <button
          type="button"
          className="btn btn-outline-success float-right shadow"
          onClick={onButtonClick}
        >
          {mainButton}
        </button>
        <FilterButton filter={filter} />
      </h1>
    </div>
  );
}
