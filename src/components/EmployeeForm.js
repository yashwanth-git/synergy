import React, { useRef } from "react";
import styled from "styled-components";

const EmployeeForm = ({ isClicked, setIsClicked }) => {
  const nameRef = useRef();
  const jobRef = useRef();
  const closeFormHandler = () => {
    setIsClicked(false);
  };
  return (
    <Popup>
      <FormWrap>
        <span className="close" onClick={closeFormHandler}>
          x
        </span>
        <div className="formHeader">
          <p>Please fill the details</p>
        </div>
        <StyledForm>
          <div className="field-wrapper">
            <input type="text" id="name" ref={nameRef} required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="field-wrapper">
            <input type="text" id="job" ref={jobRef} required />
            <label htmlFor="job">Designation</label>
          </div>
          <button className="submitBtn">Create</button>
        </StyledForm>
      </FormWrap>
    </Popup>
  );
};
const Popup = styled.div`
  position: fixed;
  top: 2%;
  left: 35%;
  z-index: 999;
  background-color: #fff;
`;
const FormWrap = styled.div`
  min-width: 500px;
  margin: 0 auto;
  padding: 2em;
  box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  .close {
    position: absolute;
    right: 1em;
    top: 0.75em;
    font-size: var(--lengthMd3);
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  .formHeader {
    position: relative;
    p {
      text-align: center;
      margin-top: 1rem;
      font-size: var(--lengthMd3);
      font-weight: 600;
    }
  }
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2em auto 0;
  max-width: 400px;

  .field-wrapper {
    position: relative;
    width: 100%;
    input {
      width: 100%;
      padding: 1em 0.5em;
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
      top: 1.25em;
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
    .email-error,
    .pass-error {
      position: absolute;
      display: block;
      bottom: -1.25em;
      color: red;
    }
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
  }
  .field-wrapper:first-of-type {
    margin-bottom: 3em;
  }
  .submitBtn {
    display: block;
    width: 100%;
    margin: 2em;
    height: 3.5rem;
    background-color: var(--colorPrimary);
    border: none;
    font-size: var(--lengthMd1);
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
`;

export default EmployeeForm;
