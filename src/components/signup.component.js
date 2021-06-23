import React, { Component } from "react";
import Company from "./Company";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <form ClassName="SignUp">
                <h3>Register</h3>
                
                <h5>Personal Details</h5>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number (without -)" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">
                <Link  to={"/company"}><b style={{ color: 'white'}}>Next</b></Link></button>

                <div >
                <div >
                <Switch>
                <Route path="/company" component={Company} />
                </Switch>
                </div>
                 </div>

                 
                
            </form>
        );
    }
}