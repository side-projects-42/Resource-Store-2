import React from "react";
import "../../App.css";
import Divider from "./Divider";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Toggler from "./Toggler";

export default function Nav() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Logo />

        <Divider />

        <NavItem route="/" icon="tachometer-alt">
          Dashboard
        </NavItem>

        <Divider />

        <NavItem route="/activities" icon="bicycle">
          Activities
        </NavItem>

        <NavItem route="/materials" icon="shopping-cart">
          Materials
        </NavItem>

        <Divider />

        <Toggler />
      </ul>
    </div>
  );
}
