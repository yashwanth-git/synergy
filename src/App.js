import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
//Components
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login";
//Route
import { Route, Switch, Redirect } from "react-router-dom";
//Import Pages
import Dashboard from "./pages/Dashboard";
import People from "./pages/People";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
//Import Data
import data from "./data";
function App() {
  //State
  const [empData, setEmpData] = useState(data());
  //
  const isLogged = useSelector((state) => state.isLogged);
  const isDark = useSelector((state) => state.isDark);
  //Refs
  const emailRef = useRef();
  const passRef = useRef();
  return (
    <div className={`App ${isDark ? "darkMode" : ""}`}>
      <GlobalStyle />
      <Switch>
        {/*Switch assists the path for full detection of route*/}
        <Route path="/" exact>
          <Login emailRef={emailRef} passRef={passRef} />
        </Route>
        {/* {isLogged ? (
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
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/tracking">
          <Tracking />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
