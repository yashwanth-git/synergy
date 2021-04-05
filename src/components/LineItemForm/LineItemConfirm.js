import React from "react";
import styled from "styled-components";

const LineItemConfirm = ({ prevStepHandler, nextStepHandler, values }) => {
  return (
    <ConfirmationCard>
      <p className="title">LineItem Confirmation</p>
      <div className="Card">
        <p className="Card__title">
          {values.itemName} ({values.weight}Kgs)<span>x {values.count}</span>
        </p>
        <p className="Card__desc">{values.description}</p>
        <p className="Card__Charges">
          Loading Charge <span>Rs. {values.loadingCharge}</span>
        </p>
        <p className="Card__Charges">
          Transport Charge <span>Rs. {values.transportCharge}</span>
        </p>
        <p className="Card__Charges">
          Tax <span>Rs. {values.tax}</span>
        </p>
        <p className="Card__Charges total">
          Total <span>Rs. {values.totalAmount}</span>
        </p>
      </div>
      <ButtonWrap>
        <SecBtn onClick={prevStepHandler}>Back</SecBtn>
        <PrimaryBtn onClick={nextStepHandler}>Payment</PrimaryBtn>
      </ButtonWrap>
    </ConfirmationCard>
  );
};

const ConfirmationCard = styled.div`
  padding: 1.5em 2em;
  width: 600px;
  margin: 3em auto 0 auto;
  background: #fff;
  .title {
    font-size: 2rem;
    text-align: center;
    margin: 1em;
  }
  .Card {
    max-width: 460px;
    margin: 1.5em auto 0 auto;
  }
  .Card__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--lengthMd3);
    span {
      font-size: var(--lengthMd2);
    }
  }
  .Card__desc {
    font-size: var(--lengthMd1);
    margin-top: 0.5em;
    color: var(--colorLabel);
  }
  .Card__Charges {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    font-size: var(--lengthMd2);
    &.total {
      margin: 1.5em 0;
      span {
        padding: 1em 0;
        border-top: 1px solid var(--colorText);
        border-bottom: 1px solid var(--colorText);
      }
    }
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

export default LineItemConfirm;
