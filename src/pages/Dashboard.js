import React from "react";
import styled from "styled-components";
//Components
import CommonNav from "../components/CommonNav";
import Sidebar from "../components/Sidebar";
//Img
import order from "../img/writing.svg";
import revenue from "../img/dollar.svg";
import delivered from "../img/trophy.svg";
import pending from "../img/clock.svg";
const Dashboard = ({ emailRef }) => {
  //const LogName = emailRef.current.value;
  const pageTitle = "Dashboard";
  return (
    <PageStyle>
      <Sidebar />
      <Content>
        <CommonNav pageTitle={pageTitle} />
        <PageContent>
          <Container>
            <div className="Card Card--md">
              <div className="Card--item">
                <div className="Card__Desc">
                  <p>Revenue</p>
                  <p>$8K</p>
                </div>
                <div className="Card__Img">
                  <span>
                    <img src={revenue} alt="Revenue" className="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
            <div className="Card Card--md">
              <div className="Card--item">
                <div className="Card__Desc">
                  <p>Orders</p>
                  <p>800</p>
                </div>
                <div className="Card__Img">
                  <span>
                    <img src={order} alt="Orders" className="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
            <div className="Card Card--md">
              <div className="Card--item">
                <div className="Card__Desc">
                  <p>Delivered</p>
                  <p>280</p>
                </div>
                <div className="Card__Img">
                  <span>
                    <img
                      src={delivered}
                      alt="Delivered"
                      className="img-fluid"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="Card Card--md">
              <div className="Card--item">
                <div className="Card__Desc">
                  <p>Pending</p>
                  <p>520</p>
                </div>
                <div className="Card__Img">
                  <span>
                    <img src={pending} alt="Pending" className="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
          </Container>
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
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -0.5em;
  margin-left: -0.5em;
  .Card {
    flex: 0 0 25%;
    max-width: 25%;
    padding-right: 0.5em;
    padding-left: 0.5em;
    min-width: 275px;
  }
  .Card--item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 1.5em 1em;
    margin-bottom: 1em;
    border-radius: 0.75rem;
  }
  .Card__Desc {
    p:first-child {
      color: var(--colorLabel);
      font-size: var(--lengthMd1);
      margin-bottom: 0.2em;
    }
    p:nth-child(2) {
      color: var(--colorText);
      font-size: var(--lengthLg1);
    }
  }
  .Card__Img {
    background: var(--colorPrimary);
    border-radius: 50%;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25em;
    }
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
export default Dashboard;
