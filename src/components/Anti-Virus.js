import { useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Tutorial from "./tutorial";
import RMM from "./RMM";

export default function AntiVirus() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div className="form-group">
      <div className="form-group">
      <h4 className="App">Anti-Virus</h4>
        
        <br></br>
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Webroot"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Webroot
        </div>
        <div className="form-group">
          {isChecked ? (
            <input type="textarea" className="form-control" placeholder="Enter API" required></input>
          ) : (
            ""
          )}
        </div>
      </div>


      <div className="result">
        {isChecked? (
          <button type="button" className="btn btn-primary btn-block">
             <Link  to={"/RMM"}><b style={{ color: 'white'}}>NEXT</b></Link>
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="result">
        {!isChecked? (
          <button type="button" className="btn btn-primary btn-block">
            <Link  to={"/RMM"}><b style={{ color: 'white'}}>SKIP</b></Link>
          </button>
        ) : (
          ""
        )}
      </div>
      <Link  to={"/Tutorial"}><b style={{ color: 'blue'}}>Help</b></Link>


      <div >
                <div >
                <Switch>
                <Route path="/RMM" component={RMM} />
                </Switch>
                </div>
                 </div>
    </div>
  );
}
