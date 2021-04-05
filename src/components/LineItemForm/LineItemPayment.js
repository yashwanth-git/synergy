import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
//Components
import DropDown from "../DropDown";
//Images
import order from "../../img/order.svg";
import payment from "../../img/credit-card.svg";
const LineItemPayment = ({ values, prevStepHandler, nextStepHandler }) => {
  const PaymentOption = {
    name: "Select Payment",
    options: [
      {
        id: uuidv4(),
        name: "Select Payment",
      },
      {
        id: uuidv4(),
        name: "Cash",
      },
      {
        id: uuidv4(),
        name: "UPI",
      },
      {
        id: uuidv4(),
        name: "Fund Transfer",
      },
    ],
  };
  const OrderStatusOption = {
    name: "Order Status",
    options: [
      {
        id: uuidv4(),
        name: "Order Status",
      },
      {
        id: uuidv4(),
        name: "Ordered",
      },
      {
        id: uuidv4(),
        name: "Dispatched",
      },
      {
        id: uuidv4(),
        name: "Delivered",
      },
    ],
  };
  return (
    <StyledLineItemForm>
      <p className="title">LineItem Payment</p>
      <StyledDropdown>
        <label htmlFor={OrderStatusOption.name}>
          <img src={order} alt="Order Status" />
        </label>
        <DropDown Choice={OrderStatusOption} />
      </StyledDropdown>
      <StyledDropdown>
        <label htmlFor={PaymentOption.name}>
          <img src={payment} alt="Payment" />
        </label>
        <DropDown Choice={PaymentOption} />
      </StyledDropdown>

      <ButtonWrap>
        <SecBtn onClick={prevStepHandler}>Back</SecBtn>
        <PrimaryBtn onClick={nextStepHandler}>Place Order</PrimaryBtn>
      </ButtonWrap>
    </StyledLineItemForm>
  );
};

const StyledLineItemForm = styled.div`
  max-width: 600px;
  margin: 3em auto 0 auto;
  background: #fff;
  padding: 1em 2.5em;
  .title {
    font-size: 2rem;
    text-align: center;
    margin: 1em;
  }
`;
const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 2em auto 0 auto;
  select {
    width: 100%;
  }
  label {
    margin-right: 0.5em;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
`;
const PrimaryBtn = styled.button`
  display: inline-block;
  margin: 2em 0;
  height: 3.5rem;
  padding: 1em 2.5em;
  background-color: var(--colorPrimary);
  border: none;
  font-size: var(--lengthMd1);
  font-weight: 600;
  color: #fff;
  cursor: pointer;
`;
const SecBtn = styled.button`
  display: inline-block;
  margin: 2em 0;
  height: 3.5rem;
  padding: 1em 2.5em;
  background-color: var(--colorGrey);
  border: none;
  font-size: var(--lengthMd1);
  font-weight: 600;
  color: var(--colorText);
  cursor: pointer;
`;
export default LineItemPayment;
