import React, { useState } from "react";
import styled from "styled-components";
//import Components
import Sidebar from "../components/Sidebar";
import CommonNav from "../components/CommonNav";
import EmployeeForm from "../components/EmployeeForm";
//import Images
import name from "../img/name.svg";
import portfolio from "../img/portfolio.svg";
import Employee from "../data";

const People = ({ empData }) => {
  const pageTitle = "People";
  //State
  const [isClicked, setIsClicked] = useState(false);
  const addPersonHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <PageStyle>
      <Sidebar />
      <Content>
        <CommonNav pageTitle={pageTitle} />
        <PageContent>
          <div className="SubNav">
            <h2>My Team</h2>
            <button className="primaryBtn" onClick={addPersonHandler}>
              Add Person
            </button>
          </div>
          <Cards>
            {empData.map((d) => (
              <div className="Card" key={d.id}>
                <div className="Card_img">
                  <img src={d.dp} alt={d.name} />
                </div>
                <div className="Card_details">
                  <h2>{d.name}</h2>
                  <p>
                    <span>
                      <img src={portfolio} alt="designation"></img>
                    </span>
                    {d.designation}
                  </p>
                  <p>
                    <span>
                      <img src={name} alt="ID" />
                    </span>
                    PP {d.empNo}
                  </p>
                </div>
              </div>
            ))}
          </Cards>
        </PageContent>
      </Content>
      {isClicked && (
        <EmployeeForm isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
    </PageStyle>
  );
};

const PageStyle = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  height: 100%;
`;
const Content = styled.div`
  display: grid;
  grid-template-rows: 12vh 1fr;
  grid-template-columns: 100%;
`;
const PageContent = styled.div`
  padding: 1.5em 2em;
  background: var(--colorGrey);
  .SubNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .primaryBtn {
    background: var(--colorPrimary);
    padding: 1em 1.5em;
    border: 0;
    color: #fff;
    font-weight: 500;
    font-size: var(--lengthMd1);
    display: inline-block;
    cursor: pointer;
    transition: opacity 250ms ease-in-out;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      outline: 0;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2em 0;
  .Card {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1 1 20rem;
    padding: 2em;
    background: #fff;
    border-radius: 5px;
    margin-left: 2.5em;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgb(180 186 191 / 20%);
    transition: all 300ms ease-in-out;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      box-shadow: 0 1px 1px 0 rgb(90 122 190 / 10%),
        0 10px 20px 0 rgb(90 122 190 / 20%);
    }
    .Card_img {
      img {
        width: 5rem;
        height: 5rem;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid var(--colorAccent);
      }
    }
    .Card_details {
      margin-left: 1em;
      p {
        display: flex;
        align-items: center;
        margin-top: 0.5em;
        font-weight: 600;
      }
      img {
        width: 1.5rem;
        margin-right: 0.6em;
      }
    }
  }
`;
export default People;
