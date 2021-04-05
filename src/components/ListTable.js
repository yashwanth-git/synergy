import React from "react";
import styled from "styled-components";

const ListTable = () => {
  return (
    <StyledTable>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Count</th>
            <th>
              Loading Charge <br />
              (Rs.)
            </th>
            <th>
              Transport Charge <br />
              (Rs.)
            </th>
            <th>
              Weight <br />
              (kg)
            </th>
            <th>
              Tax <br />
              (Rs.)
            </th>
            <th>
              Total Amount <br />
              (Rs.)
            </th>
          </tr>
          <tr>
            <td>Goods</td>
            <td>30</td>
            <td>35</td>
            <td>55</td>
            <td>180</td>
            <td>36</td>
            <td>1141</td>
          </tr>
          <tr>
            <td>Goods</td>
            <td>30</td>
            <td>35</td>
            <td>55</td>
            <td>180</td>
            <td>36</td>
            <td>1141</td>
          </tr>
          <tr>
            <td>Goods</td>
            <td>30</td>
            <td>35</td>
            <td>55</td>
            <td>180</td>
            <td>36</td>
            <td>1141</td>
          </tr>
          <tr>
            <td>Goods</td>
            <td>30</td>
            <td>35</td>
            <td>55</td>
            <td>180</td>
            <td>36</td>
            <td>1141</td>
          </tr>
          <tr>
            <td>Goods</td>
            <td>30</td>
            <td>35</td>
            <td>55</td>
            <td>180</td>
            <td>36</td>
            <td>1141</td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  width: 1180px;
  margin: 2em auto;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.75rem;
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 0.75rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    td,
    th {
      border-top: 1px solid var(--colorLabel);
      padding: 1em;
      min-width: 260px;
      text-align: center;
    }
    tr {
      border-left: 1px solid var(--colorLabel);
      border-right: 1px solid var(--colorLabel);
      cursor: pointer;
    }
    tr:first-child {
      background-color: var(--colorPrimary);
      color: #fff;
      &:hover {
        background-color: var(--colorPrimary);
      }
    }
    tr:nth-child(even) {
      background-color: #eeeeee;
    }
    tr:hover {
      background-color: #d3d3ff;
    }
    tr:last-child {
      border-bottom: 1px solid var(--colorLabel);
    }
    th {
      line-height: 1.5;
    }
  }
`;

export default ListTable;
