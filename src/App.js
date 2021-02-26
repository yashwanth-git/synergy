import React, { useState, useRef } from "react";
import styled from "styled-components";

//Components
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login";
//Route
import { Route, Switch, Redirect } from "react-router-dom";
//Import Pages
import Dashboard from "./pages/Dashboard";
import People from "./pages/People";
import Performance from "./pages/Performance";
//Import Data
import data from "./data";
function App() {
  //State
  const [empData, setEmpData] = useState(data());
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
        {/* {isLoggedIn ? (
          <Route exact path="/dashboard">
            <Dashboard emailRef={emailRef} />
          </Route>
        ) : (
          <Redirect to="/"></Redirect>
        )} */}
        <Route exact path="/dashboard">
          <Dashboard emailRef={emailRef} />
        </Route>
        <Route exact path="/people">
          <People empData={empData} />
        </Route>
        <Route exact path="/performance">
          <Performance />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
