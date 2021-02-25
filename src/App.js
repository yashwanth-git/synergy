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
  const [darkMode, setDarkMode] = useState(false);
  //Refs
  const emailRef = useRef();
  const passRef = useRef();
  return (
    <div className={`App ${darkMode ? "darkMode" : ""}`}>
      <GlobalStyle />
      <Switch>
        {/*Switch assists the path for full detection of route*/}
        <Route path="/" exact>
          <Login
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            emailRef={emailRef}
            passRef={passRef}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
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

export default App;
