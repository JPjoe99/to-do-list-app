import { PropsWithChildren } from "react";

import "./header.scss";

function Header({ children }: PropsWithChildren) {
  return <header className="header">{children}</header>;
}

export default Header;
