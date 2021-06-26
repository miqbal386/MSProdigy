import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Company from "./components/Company";
import Network from "./components/Networking";
import BDR from "./components/BDR";
import AntiVirus from "./components/Anti-Virus";
import RMM from "./components/RMM";
import EmailProtection from "./components/EmailProtection";
import MatchCustomers from "./components/MatchCustomers";
import Tutorial from "./components/tutorial";

function App() {
  return (<Router>
     
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>MSProdigy</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     

      <div className="auth-wrapper">
       
        <div className="auth-inner">
        <Link className="navbar-brand App container" to={"/sign-in"}>MSProdigy</Link>
        <p className="App">Logo</p>
        <br></br>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Company" component={Company} />
            <Route path="/Network" component={Network} />
            <Route path="/BDR" component={BDR} />
            <Route path="/AntiVirus" component={AntiVirus} />
            <Route path="/RMM" component={RMM} />
            <Route path="/EmailProtection" component={EmailProtection} />
            <Route path="/MatchCustomers" component={MatchCustomers} />
            <Route path="/Tutorial" component={Tutorial} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;