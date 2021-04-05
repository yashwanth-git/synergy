import React from "react";
import styled from "styled-components";
//images
import tick from "../../img/tick.svg";

const LineItemSuccess = () => {
  return (
    <SuccessMsg>
      <span>
        <img src={tick} alt="Success" />
      </span>
      <h2>Your order has been placed</h2>
      <p>Please check the order list for further details</p>
    </SuccessMsg>
  );
};

const SuccessMsg = styled.div`
  max-width: 600px;
  margin: 3em auto 0 auto;
  background: #fff;
  padding: 2em 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--colorPrimary);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 1em;
    img {
      width: 45px;
    }
  }
  h2 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
`;

export default LineItemSuccess;
