import React from "react";
import styled from "styled-components";
const LineItemCharges = ({
  nextStepHandler,
  itemFields,
  setItemFields,
  prevStepHandler,
  values,
}) => {
  const {
    loadingCharge,
    transportCharge,
    tax,
    totalAmount,
    count,
    weight,
  } = itemFields;

  return (
    <StyledLineItemForm>
      <p className="title">LineItem Charges</p>
      <TextField>
        <input
          type="number"
          id="loadingCharge"
          name="loadingCharge"
          defaultValue={loadingCharge}
          disabled
        />
        <label htmlFor="loadingCharge">Loading Charge</label>
      </TextField>
      <TextField>
        <input
          type="number"
          id="transportCharge"
          name="transportCharge"
          defaultValue={transportCharge}
          disabled
        />
        <label htmlFor="transportCharge">Transport Charge</label>
      </TextField>
      <TextField>
        <input type="number" id="tax" name="tax" defaultValue={tax} disabled />
        <label htmlFor="tax">Tax</label>
      </TextField>
      <TextField>
        <input
          type="number"
          disabled
          id="totalAmount"
          name="totalAmount"
          defaultValue={totalAmount}
        />
        <label htmlFor="totalAmount">Total</label>
      </TextField>
      <ButtonWrap>
        <SecBtn onClick={prevStepHandler}>Back</SecBtn>
        <PrimaryBtn onClick={nextStepHandler}>Continue</PrimaryBtn>
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
    top: -0.6em;
    background: #fff;
    &.no-error {
      top: -0.6em;
      background: #fff;
    }
  }
`;

export default LineItemCharges;
