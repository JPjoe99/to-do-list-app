import { Link } from "react-router-dom";

import "./navbar-item.scss";

type Props = {
  text: string;
  link?: string;
};

function NavbarItem({ text, link = "/" }: Props) {
  return (
    <li className="navbar-item">
      <Link to={link}>
        <h2>{text}</h2>
      </Link>
    </li>
  );
}

export default NavbarItem;
