import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Images
import logo from "../img/logo.svg";
import people from "../img/people.svg";
import performance from "../img/performance.svg";
const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavLink to="/dashboard">
        <img src={logo} alt="Logo" />
      </NavLink>
      <NavLink to="/people" aria-label="People">
        <img src={people} alt="People" />
      </NavLink>
      <NavLink to="/performance" aria-label="Performance">
        <img src={performance} alt="Performance" />
      </NavLink>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.nav`
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background: var(--colorText);
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.2em;
    position: relative;
    transform: all 300ms ease-in-out;
    &:hover {
      background: #2f2d36;
    }
    &.active {
      background: #2f2d36;
    }
    &:first-child:hover::after {
      display: none;
    }
    &::after {
      content: attr(aria-label);
      position: absolute;
      left: 100%;
      top: 1.5em;
      padding: 0.75em;
      margin-left: 1rem;
      background: var(--colorText);
      font-size: 0.875rem;
      letter-spacing: 1px;
      color: var(--colorGrey);
      border-radius: 0.25rem;
      opacity: 0;
      visibility: hidden;
      transition: opacity 250ms ease-in-out;
    }
    &:hover::after {
      opacity: 1;
      visibility: visible;
    }
    img {
      width: 2.25rem;
    }
  }
`;

export default Sidebar;
