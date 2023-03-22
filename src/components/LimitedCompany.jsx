import React, { useState } from "react";

var grossIncomeData;
var salaryData;
var totalExpensesData;
var resultExport = false;


function LimitedCompany() {
  const [resultShower, setResultShower] = useState(true);
  const [displayCalculator, setCalculator] = useState(false);
  const [grossIncome, setGrossIncome] = useState(0);
  const [salary, setSalary] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const handleGrossIncomeChange = (event) => {
    const { name, value } = event.target;
    setGrossIncome(value);
    if (resultShower === false) {
      setResultShower(!resultShower);
      resultExport = resultShower;
    }
    else {
      return resultShower
    }
    console.log(displayCalculator)
  };

  const handleSalaryChange = (event) => {
    const { name, value } = event.target;
    setSalary(value);
    if (resultShower === false) {
      setResultShower(!resultShower);
      resultExport = resultShower;
    }
    else {
      return resultShower
    }
  };

  const handleExpensesChange = (event) => {
    const { name, value } = event.target;
    setExpenses(value);
    if (resultShower === false) {
      setResultShower(!resultShower);
      resultExport = resultShower;
    }
    else {
      return resultShower
    }
  };

  function handleClick(event) {
    setCalculator(!displayCalculator);
    grossIncomeData = Math.floor(grossIncome)
    salaryData = Math.floor(salary)
    totalExpensesData = Math.floor(expenses);
    setResultShower(!resultShower);
    resultExport = resultShower;
    sendResultLc();


  }
  return (
    <div>
      <h1 className="h1input">Limited Company Calculator</h1>

      <div className="inputClass">
        <div className="input-group">
          <p>
            Gross Annual Income {""}
            <span className="currency-input">
              <span className="currency-symbol">£</span>
              <input
                type="number"
                name="grossAnnualIncome"
                onChange={handleGrossIncomeChange}
                className="currency-value"
                placeholder="0.00"

              />
            </span>
          </p>
        </div>
        <div className="input-group">
          <p>
            Salary {""}
            <span className="currency-input">
              <span className="currency-symbol">£</span>
              <input
                type="number"
                name="salaryInput"
                onChange={handleSalaryChange}
                className="currency-value"
                placeholder="0.00"

              />
            </span>
          </p>
        </div>
        <div className="input-group"></div>
        <p>
          Expenses {""}
          <span className="currency-input">
            <span className="currency-symbol">£</span>
            <input
              type="number"
              name="ExpensesInput"
              onChange={handleExpensesChange}
              className="currency-value"
              placeholder="0.00"

            />
          </span>
        </p>
        <button className="submit-button" type="submit" onClick={handleClick}>Submit</button>
      </div>
      </div>
      );
}


      function grossValueChecker() {
  return grossIncomeData;
}
      function ExpenseValueChecker() {
  return totalExpensesData;
}
      function salaryChecker() {
  return salaryData;
}
function sendResultLc() {
  return resultExport;
}


      export {grossValueChecker, ExpenseValueChecker, salaryChecker, sendResultLc };
      export default LimitedCompany;