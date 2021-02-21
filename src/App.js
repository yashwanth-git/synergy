import React, { useState, useRef } from "react";
import styled from "styled-components";

//Components
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login";
//Route
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
function App() {
  //State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Refs
  const emailRef = useRef();
  const passRef = useRef();
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        {/*Switch assists the path for full detection of route*/}
        <Route path="/" exact>
          <Login
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            emailRef={emailRef}
            passRef={passRef}
          />
        </Route>
        {isLoggedIn ? (
          <Route exact path="/dashboard">
            <Dashboard emailRef={emailRef} />
          </Route>
        ) : (
          <Redirect to="/"></Redirect>
        )}
      </Switch>
    </div>
  );
}

const Head = styled.h1`
  color: var(--colorPrimary);
`;

export default App;
