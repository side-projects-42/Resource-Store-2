import React from "react";
import "../../App.css";
import TableBody from "./TableBody";

/**
 *
 * @param {object} props
 *  @param {string[]} props.columns
 *  @param { Array<{ id: string; columns: string[]}> | null} props.rows
 *  @param { (id: string) => void } props.onDeleteRow
 * @returns {JSX.Element}
 */
export default function Table({ columns, rows, onDeleteRow }) {
  return (
    <div className="col-xl-10 col-md-6 mb-4">
      <div className="card border-left-primary shadow">
        <table className="table table-striped">
          <thead>
            <tr className="font-weight-bold text-primary text-uppercase">
              {columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <TableBody onDeleteRow={onDeleteRow} rows={rows} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
