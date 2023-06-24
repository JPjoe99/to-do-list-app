import Header from "../Header";
import NavbarItem from "./NavbarItem";

import "./navbar.scss";

function Navbar() {
  return (
    <Header>
      <ul className="navbar-links">
        <NavbarItem link="/" text="To Do List App" />
        <div className="navbar-links-right">
          <NavbarItem link="todos/create" text="Create A To Do" />
          <NavbarItem link="todos" text="View To Dos" />
        </div>
      </ul>
    </Header>
  );
}

export default Navbar;
