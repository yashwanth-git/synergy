import React from "react";
import styled from "styled-components";

//Components
import HomeNav from "../components/HomeNav";
import LoginForm from "../components/LoginForm";
const Login = ({ emailRef, passRef }) => {
  return (
    <StyledBg>
      <HomeNav />
      <LoginForm emailRef={emailRef} passRef={passRef} />
    </StyledBg>
  );
};

const StyledBg = styled.div`
  background-color: var(--colorGrey);
  min-height: 100vh;
`;
export default Login;
