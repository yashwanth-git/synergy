import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Import Images
import logo from "../img/logo.png";
const HomeNav = () => {
  return (
    <StyledNav>
      <NavLink to="/">
        <img src={logo} alt="Synergita Logo" />
      </NavLink>
      <NavLink to="/" className="navBtn">
        Try it Free
      </NavLink>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 0;
  margin: 0 auto;
  max-width: 990px;
  img {
    width: 11rem;
  }
  .navBtn {
    font-size: var(--lengthMd2);
    font-weight: 600;
    color: var(--colorPrimary);
    text-decoration: none;
    border: 2px solid var(--colorPrimary);
    padding: 0.5em 1.25em;
    transition: background-color 200ms ease-in-out;
    &:hover {
      background-color: var(--colorPrimary);
      color: #fff;
    }
  }
`;

export default HomeNav;
