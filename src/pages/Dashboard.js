import React from "react";
import styled from "styled-components";
//Components
import CommonNav from "../components/CommonNav";

const Dashboard = ({ emailRef }) => {
  const LogName = emailRef.current.value;
  return (
    <StyledDashboard>
      <CommonNav />
      <h2>Dashboard</h2>
      <p>Logged In as: {LogName}</p>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  max-width: 1100px;
  margin: 2em auto;
  p {
    margin-top: 1em;
  }
`;
export default Dashboard;
