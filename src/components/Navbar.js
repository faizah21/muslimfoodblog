import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./style.js/Button";
import { scrollToBottom, scrollToTop } from "./Scrolling";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
} from "./style.js/NavbarElement";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 690) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#CD853F" : "transparent",
    transition: "0.4s",
  };

  return (
    <Nav style={style}>
      <Logo onClick={scrollToTop}>ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.title}
            spy={true}
            exact={true}
            smooth={true}
            offset={50}
            duration={500}
            key={index}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button onClick={scrollToBottom} round="true" primary="true">
          Sign Up
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
