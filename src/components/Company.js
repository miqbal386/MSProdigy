import React, { Component } from "react";
import Login from "./login.component";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
export default class Company extends Component {
    render() {
        return (
            <div ClassName="body container" Id="scroller">
            <form >
            
                <h3>Register</h3>
                
                <h5>Company Details</h5>
<br></br>
                <div className="form-group">
                    <label>Company name</label>
                    <input type="text" className="form-control" placeholder="Enter Company name" />
                </div>

                <div className="form-group">
                    <label>Company Website</label>
                    <input type="text" className="form-control" placeholder="Enter Company Website" />
                </div>

                <div className="form-group">
                    <label>Point of contact name</label>
                    <input type="text" className="form-control" placeholder="Enter Point of contact name" />
                </div>

                <div className="form-group">
                    <label>Point of contact Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone" />
                </div>

                <div className="form-group">
                    <label>Point of Contact Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Company City</label>
                    <input type="text" className="form-control" placeholder="Enter City" />
                </div>

                <div className="form-group">
                    <label>Company Country</label>
                    <input type="text" className="form-control" placeholder="Enter Country" />
                </div>

                <div className="form-group">
                    <label>Company State</label>
                    <input type="text" className="form-control" placeholder="Enter State" />
                </div>

                <div className="form-group">
                    <label>Company Zip</label>
                    <input type="text" className="form-control" placeholder="Enter Zip" />
                </div>

                <div className="form-group">
                    <label>Company Street Address</label>
                    <input type="text" className="form-control" placeholder="Enter Street Address" />
                </div>

                <div className="form-group">
                    <label>Company Building</label>
                    <input type="text" className="form-control" placeholder="Enter Building" />
                </div>

                
                
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">

                <Link  to={"/sign-in"}><b style={{ color: 'white'}}>Submit</b></Link></button>
               

                <div >
                <div >
                <Switch>
                <Route path="/sign-in" component={Login} />
                </Switch>
                </div>
                 </div>
                
            </form>
            </div>
        );
    }
}