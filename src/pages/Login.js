import React from "react";
import styled from "styled-components";
//Components
import HomeNav from "../components/HomeNav";
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <StyledBg>
      <HomeNav />
      <LoginForm />
    </StyledBg>
  );
};

const StyledBg = styled.div`
  background-color: var(--colorGrey);
  min-height: 100vh;
`;
export default Login;
