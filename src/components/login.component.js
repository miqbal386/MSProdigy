import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./signup.component";
import Network from "./Networking";

export default class Login extends Component {
    render() {
        return (
            <form >
                <div >
                <h3>Sign In</h3>

                    <div className="form-group  ">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <br></br>

                    <button type="submit" className="btn btn-primary btn-block">
                    <Link  to={"/Network"}><b style={{ color: 'white'}}>Submit</b></Link></button>
                    <p className="forgot-password text-right">
                       
                    </p>

                </div>

                <div >
                <div >
                <Switch>
                <Route path="/Network" component={Network} />
                </Switch>
                </div>
                 </div>
                
            </form>
        );
    }
}