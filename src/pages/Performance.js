import React from "react";
import styled from "styled-components";
//import Components
import Sidebar from "../components/Sidebar";
import CommonNav from "../components/CommonNav";
const Performance = () => {
  const pageTitle = "Performance";
  return (
    <PageStyle>
      <Sidebar />
      <Content>
        <CommonNav pageTitle={pageTitle} />
        <PageContent>
          <h1>Hello</h1>
        </PageContent>
      </Content>
    </PageStyle>
  );
};

const PageStyle = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  height: 100%;
`;
const Content = styled.div`
  display: grid;
  grid-template-rows: 12vh 1fr;
  grid-template-columns: 100%;
`;
const PageContent = styled.div`
  padding: 1.5em 1em;
  background: var(--colorGrey);
`;
export default Performance;
