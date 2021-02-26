import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Import Images
import logo from "../img/logo.png";
import whitelogo from "../img/logo-white.png";
const HomeNav = ({ darkMode, setDarkMode }) => {
  const darkModeHandler = (e) => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkModeCheck", !darkMode);
  };
  return (
    <StyledNav>
      <NavLink to="/">
        {darkMode && <img src={whitelogo} alt="Synergita Logo" />}
        <img
          src={logo}
          alt="Synergita Logo"
          className={`${darkMode ? "hide" : ""}`}
        />
      </NavLink>
      <div className="Navleft">
        <NavLink to="/" className="navBtn">
          Try it Free
        </NavLink>
        <div className="Mode">
          <label>
            <input type="checkbox" onChange={darkModeHandler}></input>
            <span className="check"></span>
          </label>
        </div>
      </div>
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
    justify-self: flex-end;
    &:hover {
      background-color: var(--colorPrimary);
      color: #fff;
    }
  }
  .Navleft {
    display: flex;
    align-items: center;
  }
  .Mode {
    margin-left: 2em;
    input {
      -webkit-appearance: none;
      visibility: hidden;
      display: none;
      &:checked ~ .check {
        background: #fff;
        //box-shadow: 0 0 0 1500px var(--colorPrimary);
      }
      &:checked ~ .check:before {
        background: #000;
        transform: translateX(1.65rem);
      }
    }
    .check {
      position: relative;
      display: block;
      width: 3rem;
      height: 1.5rem;
      background: var(--colorPrimary);
      cursor: pointer;
      border-radius: 1rem;
      overflow: hidden;
      transition: 400ms ease-in;
      &:before {
        content: "";
        position: absolute;
        top: 0.23rem;
        left: 0.2rem;
        background: #fff;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        transition: 400ms;
      }
      &:after {
      }
    }
  }
`;

export default HomeNav;
