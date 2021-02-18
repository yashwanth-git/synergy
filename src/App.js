import React from "react";
import styled from "styled-components";

//Components
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login";
//Route
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        {/*Switch assists the path for full detection of route*/}
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

const Head = styled.h1`
  color: var(--colorPrimary);
`;

export default App;
