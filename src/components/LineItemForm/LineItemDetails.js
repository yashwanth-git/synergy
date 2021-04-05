import React from "react";
import styled from "styled-components";

const LineItemDetails = ({ nextStepHandler, handleChange, values }) => {
  return (
    <StyledLineItemForm>
      <p className="title">LineItem Details</p>
      <TextField>
        <input
          type="text"
          id="itemName"
          name="itemName"
          onChange={handleChange("itemName")}
          defaultValue={values.itemName}
          required
        />
        <label htmlFor="itemName">Item Name</label>
      </TextField>
      <TextField>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange("description")}
          defaultValue={values.description}
          required
        />
        <label htmlFor="description">Item Description</label>
      </TextField>
      <TextField>
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={handleChange("weight")}
          defaultValue={values.weight}
          required
        />
        <label htmlFor="weight">Weight (in Kgs)</label>
      </TextField>
      <TextField>
        <input
          type="number"
          id="count"
          name="count"
          onChange={handleChange("count")}
          defaultValue={values.count}
          required
        />
        <label htmlFor="count">Count</label>
      </TextField>
      <ButtonWrap>
        <SecBtn disabled>Back</SecBtn>
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
`;

export default LineItemDetails;
