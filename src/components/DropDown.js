import React from "react";
import styled from "styled-components";
//Image
import arrow from "../img/arrow.svg";
const DropDown = ({ Choice }) => {
  const options = Choice.options;
  return (
    <StyledDropDown name={`${Choice.name}`} id={`${Choice.name}`}>
      <option disabled defaultValue value>
        {Choice.name}
      </option>
      {options.map((opt, index) => (
        <option value={`${opt.name}`} key={`${index}`}>
          {opt.name}
        </option>
      ))}
    </StyledDropDown>
  );
};

const StyledDropDown = styled.select`
  outline-color: var(--colorLabel);
  padding: 0.5em 3em 0.5em 0.5em;
  line-height: 1.5em;
  font-size: var(--lengthMd1);
  min-width: 220px;
  cursor: pointer;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  transition: border-color 200ms ease-in-out;
  background-image: url(${arrow});
  background-position: calc(100% - 20px) calc(0.8em),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 1rem;
  background-repeat: no-repeat;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    border-color: var(--colorPrimary);
    outline-color: var(--colorPrimary);
  }
  option {
    cursor: pointer;
  }
`;
export default DropDown;
