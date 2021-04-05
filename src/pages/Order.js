import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
//import Components
import Sidebar from "../components/Sidebar";
import CommonNav from "../components/CommonNav";
import DropDown from "../components/DropDown";
import UserForm from "../components/UserForm";
import LineItemForm from "../components/LineItemForm";
//Images
import send from "../img/send.svg";
import receive from "../img/get-money.svg";
import user from "../img/user-dark.svg";
import calendar from "../img/calendar.svg";
const Tracking = () => {
  const [senderForm, setSenderForm] = useState(false);
  const [receiverForm, setReceiverForm] = useState(false);
  const pageTitle = "Add Order";
  //For Sender Location Dropdown
  const SenderLocation = {
    name: "From",
    options: [
      {
        id: uuidv4(),
        name: "From",
      },
      {
        id: uuidv4(),
        name: "Bangalore",
      },
      {
        id: uuidv4(),
        name: "Chennai",
      },
      {
        id: uuidv4(),
        name: "Mumbai",
      },
    ],
  };
  //For Receiver Location Dropdown
  const ReceiverLocation = {
    name: "Delivery",
    options: [
      {
        id: uuidv4(),
        name: "Delivery",
      },
      {
        id: uuidv4(),
        name: "Bangalore",
      },
      {
        id: uuidv4(),
        name: "Chennai",
      },
      {
        id: uuidv4(),
        name: "Mumbai",
      },
    ],
  };
  //Sender Submit Form
  const onSenderSubmitHandler = (data) => {
    console.log(data);
  };
  //Receiver Submit Form
  const onReceiverSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <PageStyle>
      <Sidebar />
      <Content>
        <CommonNav pageTitle={pageTitle} />
        <PageContent>
          <Instruction>Please provide the order details</Instruction>
          <TrackingInputs>
            <UserInput>
              <span>
                <img src={user} alt="Sender" />
              </span>
              <div className="field-wrapper">
                <input type="text" id="sender" required></input>
                <label htmlFor="sender">Sender</label>
              </div>
              <button
                className="Add"
                onClick={() => {
                  setSenderForm(true);
                }}
              >
                +
              </button>
            </UserInput>
            <UserInput>
              <span>
                <img src={user} alt="User" />
              </span>
              <div className="field-wrapper">
                <input type="text" id="receiver" required></input>
                <label htmlFor="receiver">Receiver</label>
              </div>
              <button
                className="Add"
                onClick={() => {
                  setReceiverForm(true);
                }}
              >
                +
              </button>
            </UserInput>
            <UserDate>
              <span>
                <img src={calendar} alt="Calendar" />
              </span>
              <input type="date"></input>
            </UserDate>
            <Dropdown>
              <label htmlFor={SenderLocation.name}>
                <img src={send} alt="Sender" />
              </label>
              <DropDown Choice={SenderLocation} />
            </Dropdown>
            <Dropdown>
              <label htmlFor={ReceiverLocation.name}>
                <img src={receive} alt="Receiver" />
              </label>
              <DropDown Choice={ReceiverLocation} />
            </Dropdown>
          </TrackingInputs>
          <LineItemForm />
        </PageContent>
      </Content>
      {senderForm && (
        <UserForm
          isClicked={senderForm}
          setIsClicked={setSenderForm}
          onSubmitHandler={onSenderSubmitHandler}
        />
      )}
      {receiverForm && (
        <UserForm
          isClicked={receiverForm}
          setIsClicked={setReceiverForm}
          onSubmitHandler={onReceiverSubmitHandler}
        />
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
  padding: 1.5em 1em;
  background: var(--colorGrey);
`;
const Instruction = styled.p`
  font-size: var(--lengthMd1);
`;
const TrackingInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const UserInput = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 270px;
  margin-top: 2em;
  .Add {
    font-size: 1.5rem;
    padding: 0.4em;
    font-weight: 600;
    color: #fff;
    background: var(--colorPrimary);
    border: none;
    outline: 0;
    cursor: pointer;
    border-radius: 0.25rem;
    &:hover {
      background: #7c27fc;
    }
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 0.5em;
  }
  .field-wrapper {
    position: relative;
    min-width: 190px;
    input {
      width: 100%;
      padding: 0.41em;
      font-size: var(--lengthMd1);
      outline-color: var(--colorText);
      &:focus {
        outline-color: var(--colorPrimary);
      }
      &:focus + label {
        top: -0.6em;
        background: #fff;
      }
      &:valid + label {
        top: -0.6em;
        background: #fff;
      }
    }
    label {
      position: absolute;
      padding: 0 0.2em;
      left: 0.5em;
      top: 0.9em;
      font-size: var(--lengthMd1);
      transition: all ease-in-out 200ms;
      &.no-error {
        top: -0.6em;
        background: #fff;
      }
    }
    .error {
      outline-color: red;
      border-color: red;
    }
  }
`;
const UserDate = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 270px;
  margin-top: 2em;
  img {
    width: 40px;
    height: 40px;
    margin-right: 0.5em;
  }
  input {
    width: 220px;
    padding: 0.5em;
    font-size: var(--lengthMd1);
    &:focus {
      outline-color: var(--colorPrimary);
    }
  }
`;
const Dropdown = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 270px;
  margin-top: 2em;
  label {
    margin-right: 0.5em;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;
export default Tracking;
