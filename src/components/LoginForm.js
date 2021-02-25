import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ isLoggedIn, setIsLoggedIn, emailRef, passRef }) => {
  //History
  const history = useHistory();
  //States
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();
  const [emailEmpty, setEmailEmpty] = useState();
  //UseEffect
  useEffect(() => {
    if (!emailError && !passError) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log(emailError && passError);
    console.log(isLoggedIn);
  }, [emailError, passError]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const emailblockCon = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!yahoo.co.in)(?!GMAIL.COM)(?!Gmail.com)(?!gmail.com)(?!YAHOO.COM)(?!YAHOO.IN)(?!rediffmail.com)(?!yahoo.in)(?!msn.com)(?!hotmail.com)(?!sify.com)(?!outlook.com)(?!OUTLOOK.COM)([\w-]+\.)+[\w-]{2,4})?$/;
    //To check business email
    let check_business_email = emailblockCon.test(
      emailRef.current.value.toLowerCase()
    );
    //console.log("Business Email", !check_business_email);
    //If Email is empty
    if (emailRef.current.value === "") {
      await setEmailError(true);
    } else {
      await setEmailError(false);
    }
    //If Password is empty
    if (passRef.current.value === "") {
      await setPassError(true);
    }
    //If Email is not business email
    if (!check_business_email) {
      await setEmailError(true);
    }
    //Check
    if (
      emailRef.current.value === "admin@ad.com" &&
      passRef.current.value === "admin"
    ) {
      setIsLoggedIn(true);
      history.push("/dashboard");
    }
  };
  const emailValueHandler = async () => {
    if (emailRef.current.value != "") {
      await setEmailEmpty(true);
      await setEmailError(false);
    }
  };
  const passValueHandler = async () => {
    if (passRef.current.value != "") {
      await setPassError(false);
    }
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
            onChange={emailValueHandler}
            required
          />
          <label htmlFor="email">Email</label>
          <p className={`email-error ${emailError ? "show" : "hide"}`}>
            Please enter your business email
          </p>
        </div>
        <div className="field-wrapper">
          <input
            type="password"
            id="password"
            className={`${passError ? "error" : ""}`}
            onChange={passValueHandler}
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
  background: var(--colorBg);
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
    color: var(--colorText);
  }
  p {
    font-size: var(--lengthMd2);
    margin-top: 1.2em;
    color: var(--colorText);
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
        background: var(--colorText);
      }
      &:valid + label {
        top: -0.6em;
        background: var(--colorText);
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
    margin: 3em;
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
    color: var(--colorText);
    label {
      margin-left: 0.5em;
      font-size: var(--lengthMd1);
    }
  }
  a {
    text-decoration: none;
    color: var(--colorAccent);
  }
`;

export default LoginForm;
