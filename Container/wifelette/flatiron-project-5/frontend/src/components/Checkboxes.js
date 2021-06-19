import React from "react";

/**
 * This code generates the checkboxes on the "Add New" forms for has-many relationships.
 *
 * The checklist items are from a secondary model, and the checklists are creating the associations. The `input` checkbox will have `name="materials[]"`, which is used by `payloadForFormData` to turn the list of checkboxes into an array of relationship objects.
 *
 * @param {object} props
 *  @param { { id: string, name: string }[] } props.models
 *  @param {string} props.relationship
 */
export default function Checkboxes({ models, relationship }) {
  return (
    <>
      {models.map((model) => (
        <div key={model.id} className="custom-control">
          <input
            className="form-check-input"
            name={`${relationship}[]`}
            type="checkbox"
            value={model.id}
            id={`material-${model.id}`}
          />
          <label className="form-check-label" htmlFor={`material-${model.id}`}>
            {model.name}
          </label>
        </div>
      ))}
    </>
  );
}
