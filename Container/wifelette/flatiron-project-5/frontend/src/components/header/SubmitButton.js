import React from "react";

/**
 * @param {object} props
 * @param {string} [props.css]
 * @param {string} props.body
 * @param {string} [props.size]
 * @param {string} [props.classes]
 * @param {boolean} [props.disabled]
 * @returns {JSX.Element}
 */

export default function SubmitButton({
  css: style = "success",
  body,
  size = "mt-2",
  classes,
  disabled,
}) {
  return (
    // disabled is an HTML property that makes a button disabled if it's true. So by doing disabled=disabled, we're effectively toggling it to a disabled state upon being clicked. When `isSaving` becomes true, `disabled` becomes true.
    // {body} is the text that gets put on the button
    <button
      type="submit"
      disabled={disabled}
      className={`btn btn-${style} ${size} ${classes}`}
    >
      {body}
    </button>
  );
}
