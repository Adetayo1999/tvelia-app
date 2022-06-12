import { useState } from "react";
import NavbarLink from "./navbar-link";

const navItems = [
  {
    text: "Home",
    path: "/home",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Adventures",
    path: "/adventures",
  },
  {
    text: "Gallery",
    path: "/gallery",
  },
  {
    text: "Contact",
    path: "/contact",
  },
  {
    text: "Login",
    path: "/login",
  },
  {
    text: "Signup",
    path: "/signup",
  },
];

const Navbar = () => {
  const [active] = useState(navItems[0].text);

  return (
    <nav>
      <ul className='hidden md:flex justify-center items-center'>
        {navItems.map(({ text, path }) => (
          <li key={text} className='md:mr-11 last-of-type:mr-0'>
            <NavbarLink text={text} path={path} active={active} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
