import { useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import AntiVirus from "./Anti-Virus";
import Tutorial from "./tutorial";

export default function BDR() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="form-group">
      <div className="form-group">
      <h4 className="App">BDR</h4>
        
        <br></br>
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Skykick"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Skykick
        </div>
        <div className="form-group">
          {isChecked ? (
            <input type="textarea" className="form-control" placeholder="Enter API" required></input>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="form-group">
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Syncro Backups"
            checked1={isChecked1}
            onChange={handleOnChange1}
          />
          Syncro Backups
        </div>
        <div className="result">
          {isChecked1 ? (
            <input type="textarea" className="form-control" placeholder="Enter API" required></input>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="form-group">
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Datto"
            checked2={isChecked2}
            onChange={handleOnChange2}
          />
          Datto
        </div>
        <div className="result">
          {isChecked2 ? (
              
            <input type="textarea" className="form-control" placeholder="Enter API" required></input>
           
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="result">
        {isChecked | isChecked1 | isChecked2 ? (
          <button type="button" className="btn btn-primary btn-block">
             <Link  to={"/BDR"}><b style={{ color: 'white'}}>NEXT</b></Link>
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="result">
        {!isChecked & !isChecked1 & !isChecked2 ? (
          <button type="button" className="btn btn-primary btn-block">
            <Link  to={"/AntiVirus"}><b style={{ color: 'white'}}>SKIP</b></Link>
          </button>
        ) : (
          ""
        )}
      </div>
      <Link  to={"/Tutorial"}><b style={{ color: 'blue'}}>Help</b></Link>


      <div >
                <div >
                <Switch>
                <Route path="/AntiVirus" component={AntiVirus} />
                </Switch>
                </div>
                 </div>
    </div>
  );
}
