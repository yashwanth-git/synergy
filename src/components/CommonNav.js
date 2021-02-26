import React from "react";
import styled from "styled-components";
//Import Images
import bell from "../img/bell.svg";
import loupe from "../img/loupe.svg";
import settings from "../img/settings.svg";
import user from "../img/user.svg";

const CommonNav = ({ pageTitle }) => {
  return (
    <StyledComNav>
      <div className="pageTitle">
        <h2>{pageTitle}</h2>
      </div>
      <div className="pageOptions">
        <div className="Search">
          <input type="text" placeholder="Search" />
          <span>
            <img src={loupe} alt="Search" />
          </span>
        </div>
        <span className="pageOption settings">
          <img src={settings} alt="Settings" />
        </span>
        <span className="pageOption notification">
          <img src={bell} alt="Notifications" />
        </span>
        <span className="pageOption user">
          <img src={user} alt="User" />
        </span>
      </div>
    </StyledComNav>
  );
};

const StyledComNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  background: #fff;
  width: 100%;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 1px 1px, rgb(0 0 0 / 6%) 0px 1px 2px -2px,
    rgb(0 0 0 / 7%) 0px 1px 3px 0px;
  h2 {
    padding-left: 1em;
  }
  .pageOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2em;
    .pageOption {
      width: var(--lengthLg1);
      margin-left: 1em;
      cursor: pointer;
    }
    .Search {
      height: 2.5rem;
      width: 13rem;
      background: var(--colorLabel);
      border-radius: 2rem;
      position: relative;
      input {
        border: none;
        border-radius: 2rem;
        height: 100%;
        width: 100%;
        text-indent: 1em;
        background: var(--colorGrey);
        &:focus {
          outline: none;
        }
      }
      span {
        position: absolute;
        right: 0.7em;
        top: 0.45em;
        width: 1.2rem;
        cursor: pointer;
      }
    }
  }
`;

export default CommonNav;
