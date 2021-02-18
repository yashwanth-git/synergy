import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  //Refs
  const emailRef = useRef();
  const passRef = useRef();
  //States
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (emailRef.current.value === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (passRef.current.value === "") {
      setPassError(true);
    }
    console.log(emailRef);
  };
  return (
    <FormWrap>
      <FormHead>
        <h1>Log in</h1>
        <p>Please log in to continue</p>
      </FormHead>
      <StyledForm>
        <div className="field-wrapper">
          <input
            type="email"
            className={`${emailError ? "error" : ""}`}
            id="email"
            ref={emailRef}
            required
          />
          <label htmlFor="email" className="emailLabel">
            Email
          </label>
          <p className={`email-error ${emailError ? "show" : "hide"}`}>
            Please enter your email
          </p>
        </div>
        <div className="field-wrapper">
          <input
            type="password"
            id="password"
            className={`${passError ? "error" : ""}`}
            ref={passRef}
            required
          />
          <label htmlFor="password" className="passLabel">
            Password
          </label>
          <p className={`pass-error ${passError ? "show" : "hide"}`}>
            Please enter your password
          </p>
        </div>
        <button className="submitBtn" onClick={onSubmitHandler}>
          Log in
        </button>
        <FormFooter>
          <div className="rememberMe">
            <input type="checkbox" id="remember"></input>
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div className="forgotPass">
            <Link to="/">Forgot password?</Link>
          </div>
        </FormFooter>
      </StyledForm>
      <div className="registerHere">
        <Link to="/">Don't have an account?</Link>
      </div>
    </FormWrap>
  );
};

const FormWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2em;
  background: #fff;
  .registerHere {
    text-align: center;
    a {
      color: var(--colorText);
      text-decoration: none;
    }
  }
`;
const FormHead = styled.div`
  text-align: center;
  h1 {
    text-transform: uppercase;
    font-size: var(--lengthLg1);
  }
  p {
    font-size: var(--lengthMd2);
    margin-top: 1.2em;
  }
`;
const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2em auto;
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
    margin-top: 3em;
    height: 3.5rem;
    background-color: var(--colorPrimary);
    border: none;
    font-size: var(--lengthMd1);
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }
`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  width: 100%;
  .rememberMe {
    display: flex;
    align-items: center;
    cursor: pointer;
    label {
      margin-left: 0.5em;
      font-size: var(--lengthMd1);
    }
  }
  a {
    text-decoration: none;
  }
`;

export default LoginForm;
