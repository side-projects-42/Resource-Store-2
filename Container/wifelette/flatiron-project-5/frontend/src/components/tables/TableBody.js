import React from "react";
// import { useSelector } from "react-redux";
import "../../App.css";

/**
 * @param {object} props
 *  @param {Array<{ id: string, columns: string[] }> | null} props.rows
 *  @param { (id: string) => void } props.onDeleteRow
 * @returns {JSX.Element}
 */
export default function TableBody({ rows, onDeleteRow }) {
  // const itemRows = useSelector((state) => state.name);

  if (!rows) {
    return <></>;
  } else {
    return (
      <>
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.columns.map((column, i) => (
                <td key={i}>{column}</td>
              ))}
              <td>
                <button
                  onClick={() => onDeleteRow(row.id)}
                  type="button"
                  className="close delete-model"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}
