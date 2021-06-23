import { useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import AntiVirus from "./Anti-Virus";
import Tutorial from "./tutorial";

export default function EmailProtection() {
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
      <h4 className="App">Email Protection</h4>
        
        <br></br>
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Proofpoint"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Proofpoint
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
            value="Mimecast"
            checked1={isChecked1}
            onChange={handleOnChange1}
          />
          Mimecast
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
            value="Barracuda"
            checked2={isChecked2}
            onChange={handleOnChange2}
          />
          Barracuda
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
            SKIP
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="result">
        {!isChecked & !isChecked1 & !isChecked2 ? (
          <button type="button" className="btn btn-primary btn-block">
           NEXT
          </button>
        ) : (
          ""
        )}
      </div>
      <Link  to={"/Tutorial"}><b style={{ color: 'blue'}}>Help</b></Link>


     
    </div>
  );
}
