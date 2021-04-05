import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
const UserForm = ({ isClicked, setIsClicked, onSubmitHandler }) => {
  const { register, handleSubmit } = useForm();
  //Close Form
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
        <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              required
            />
            <label htmlFor="name">Name</label>
          </TextField>
          <TextField>
            <input
              type="text"
              id="phone"
              name="phone"
              {...register("phone")}
              required
            />
            <label htmlFor="phone">Phone</label>
          </TextField>
          <TextField>
            <input
              type="text"
              id="address"
              name="address"
              {...register("address")}
              required
            />
            <label htmlFor="address">Address</label>
          </TextField>
          <TextField>
            <input
              type="text"
              id="city"
              name="city"
              {...register("city")}
              required
            />
            <label htmlFor="city">City</label>
          </TextField>
          <TextField>
            <input
              type="text"
              id="pincode"
              name="pincode"
              {...register("pincode")}
              required
            />
            <label htmlFor="pincode">Pincode</label>
          </TextField>
          <button className="submitBtn">Create</button>
        </StyledForm>
      </FormWrap>
    </Popup>
  );
};
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
const FormWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;
  box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  background-color: #fff;
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
  max-width: 500px;
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
const TextField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2em;
  &:last-of-type {
    margin-bottom: 0;
  }
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
`;
export default UserForm;
