import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param {object} props
 *  @param {React.ReactNode} props.children
 *  @param {string} props.route
 *  @param {string} props.icon
 */
export default function NavItem({ children, route, icon }) {
  return (
    <li className="nav-item">
      <Link to={route} className="nav-link a">
        <i className={`fas fa-fw fa-${icon}`}></i>
        <span>{children}</span>
      </Link>
    </li>
  );
}
