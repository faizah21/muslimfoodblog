import React from "react";
import { menuData } from "../data/MenuData";
import { Button } from "./style.js/Button";

import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
} from "./style.js/DropdownElement";

const Dropdown = ({ isOpen, toggle }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 6000,
      behavior: "smooth",
    });
  };
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink
              onClick={toggle}
              to={item.title}
              spy={true}
              exact={true}
              smooth={true}
              offset={50}
              duration={500}
              key={index}
            >
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button
            onClick={scrollToBottom}
            primary="true"
            round="true"
            big="true"
          >
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};
export default Dropdown;
