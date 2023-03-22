import React from "react";
import { grossValueChecker,  salaryChecker, ExpenseValueChecker } from "./LimitedCompany";

var totalRevenue;
var profit;
var salary; 
var totalExpenditure; 
var expenses;
var incomeTaxable;
var employerNi;
var net;


function LcOutput() {


function annualRevenue(){
    var totalIncome = grossValueChecker()
    totalRevenue = totalIncome;
    return totalRevenue.toLocaleString();
}

    function totalSalary(){
        var totalSalary = salaryChecker();
        salary = totalSalary; 
return salary.toLocaleString();
        
    }
    function employersNi(){
        var eNIMin = 9096;
        var deduction;
        if (salary < eNIMin){
            employerNi = 0 
        }
        else if (salary > eNIMin){
            deduction = salary - eNIMin;
            employerNi = deduction/100 * 15.05
            
        }
        
        return Math.ceil(employerNi).toLocaleString();
        
    }

    function companyExpenses(){
         expenses = ExpenseValueChecker()
         console.log(employerNi)
         return expenses.toLocaleString()
        
    }

    function totalExpenses(){
        totalExpenditure = salary + employerNi + expenses;
        console.log (totalExpenditure, totalRevenue, salary, employerNi, expenses)
        return Math.ceil(totalExpenditure).toLocaleString();
    }

    function annualProfit(){

        profit = totalRevenue - totalExpenditure;

        return Math.ceil(profit).toLocaleString();

    }

    function coorperationTax(){
        incomeTaxable = profit/100 * 19;

        return Math.ceil(incomeTaxable).toLocaleString();
    }
    function NetDividend(){
        net = profit - incomeTaxable;
        return Math.ceil(net).toLocaleString();
    }

    return (
        <div className="resultOutput">
            <h2> Annual Revenue: {"£" + annualRevenue()} </h2>
            <p> Salaries: {"£" + totalSalary()}</p>
            <p> Employers NI : {"£" + employersNi()}</p>
            <p> Schdule E expenses : {"£" + companyExpenses()}</p>
            <h4> Total Expenditure: {"£" + totalExpenses()}</h4>
            <p> Profit before taxes: {"£" + annualProfit()}</p>
            <p> Corporation tax: {"£" + coorperationTax()}</p>
            <h1> Net profit after Taxes: {"£" + NetDividend()}</h1>

            <p className="disclaimer">Disclaimer: These tax calculations are for illustrative purposes only. No guarantee is made for the accuracy of the data provided. Consult a qualified professional financial advisor before making any financial decisions.</p>

        </div>
    )
    
}

export default LcOutput;