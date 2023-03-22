import React, { useState } from "react";
import UcOutput from "./UcOutput";

var grossIncomeData;
var checker;
var resultExport = false;

function UmbrellaCompany() {
  const [resultShower, setResultShower] = useState(true);
  const [displayCalculator, setCalculator] = useState(false);
  const [grossPay, setGrossPay] = useState(0);
  const [payType, setPayType] = useState('');

  const handleGrossPayChange = (event) => {
    const {name, value} = event.target;
    setGrossPay(value);
    if (resultShower === false) {
      setResultShower(!resultShower);
      resultExport = resultShower;
    }
    else {
      return resultShower
    }
  };


  function shower(event) {
    grossIncomeData = grossPay
    const {name}= event.target;
    checker = name;
    grossValueChecker();
    setResultShower(!resultShower);
    resultExport = resultShower;
    sendResultUc();
    setCalculator(!displayCalculator)
    
  
  }


  return (
    <div>
      <h1 className="h1input">Umbrella Company Calculator</h1>
      <div className="inputClass">
      <div className="input-group">
        <p>
          My Pay is{' '}
          <span className="currency-input">
            <span className="currency-symbol">£</span>
            <input
              type="text"
              name="Income"
              onChange={handleGrossPayChange}
              className="currency-value"
                placeholder="0.00"
            />
          </span>
        </p>
        </div>
        <div className="card-buttons">
          <button type="submit" onClick={shower} name="perHour">
            Per Hour
          </button> {""}
          <button type="submit" onClick={shower} name="perDay">
            Per Day
          </button>
        </div>
      </div>
      {/* {displayCalculator === true && <UcOutput />} */}
    </div>
  )
}

function grossValueChecker() {
  return grossIncomeData;
}

function inputChecker(){
  return checker;
}

function sendResultUc() {
  return resultExport;
}


export default UmbrellaCompany;
export { grossValueChecker, inputChecker, sendResultUc};


