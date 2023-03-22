import React, { useState, useEffect, useRef } from "react";
import LimitedCompany from "./LimitedCompany";
import UmbrellaCompany from "./UmbrellaCompany";
import SelfEmployed from "./SelfEmployed";
import SeOutput from "./SeOutput";
import LcOutput from "./LcOutput";
import { sendResult } from "./SelfEmployed";
import { sendResultLc } from "./LimitedCompany";
import {sendResultUc} from "./UmbrellaCompany";
import UcOutput from "./UcOutput"
import Infotainment from "./Infotainment";



function CalculatorInputArea() {
    // console.log("fff", sendResult(), laugh)
    const [result, setResult] = useState(false);
    const [resultLc, setResultLc] = useState(false);
    const [resultUc, setResultUc] = useState(false);

    const [displayCalculator, setCalculator] = useState("SelfEmployed");
    const [activeButton, setActiveButton] = useState("SelfEmployed");
    const ref = useRef(null);

    function setResultValue() {
        const newResult = sendResult();
        setResult(newResult);
        // console.log(`Result status: ${newResult}`);
    }

    useEffect(function () {
        const interval = setInterval(setResultValue, 500);

        return function () {
            clearInterval(interval);
        };
    }, []);

    function setResultValueLc() {
        const newResult = sendResultLc();
        setResultLc(newResult);
        // console.log(`Result status: ${newResult}`);
    }

    useEffect(function () {
        const interval = setInterval(setResultValueLc, 500);

        return function () {
            clearInterval(interval);
        };
    }, []);


    function setResultValueUc() {
        const newResult = sendResultUc();
        setResultUc(newResult);
        // console.log(`Result status: ${newResult}`);
    }

    useEffect(function () {
        const interval = setInterval(setResultValueUc, 500);

        return function () {
            clearInterval(interval);
        };
    }, []);

    function DisplayLimitedCompany() {
        setCalculator("LimitedCompany");
        setActiveButton("LimitedCompany");

    }
    function DisplayUmbrellaCompany() {
        setCalculator("UmbrellaCompany");
        setActiveButton("UmbrellaCompany");
    }
    function DisplaySelfEmployed() {
        setCalculator("SelfEmployed");
        setActiveButton("SelfEmployed");
    }

    // function wawu(){
    //     laugh = sendResult();
    //     setShower(laugh); 

    // }
    // setInterval(wawu(), 1000);

    return (

        <div>
            <div className="intro">
                <div className="introContent">
                    <h1>Take Home Pay Calculator</h1>
                    <p>Find how much you could be earning</p>
                </div>
            </div>
            <div className="card">
                <div className="top">
                    <button style={{ backgroundColor: activeButton === "SelfEmployed" ? "#1fae51" : "#23272b" }} onClick={DisplaySelfEmployed}> Self Employed </button> 
                    <button style={{ backgroundColor: activeButton === "LimitedCompany" ? "#1fae51" : "#23272b" }}  onClick={DisplayLimitedCompany}> Limited Company</button>
                    <button style={{ backgroundColor: activeButton === "UmbrellaCompany" ? "#1fae51" : "#23272b"}} onClick={DisplayUmbrellaCompany}> Umbrella Company </button>

                </div>
                <div className="bottom">

                    {displayCalculator === "SelfEmployed" && <SelfEmployed />}
                    {displayCalculator === "LimitedCompany" && <LimitedCompany />}
                    {displayCalculator === "UmbrellaCompany" && <UmbrellaCompany />}

                </div>
            </div>

            <div className="resultShower" ref={ref}>

                {displayCalculator === "SelfEmployed" && result === true && <SeOutput />}
                {displayCalculator === "LimitedCompany" && resultLc === true && <LcOutput />}
                {displayCalculator === "UmbrellaCompany" && resultUc === true && <UcOutput />}
            </div>

            <div >
                <Infotainment />
            </div>
        </div>
    )
}


export default CalculatorInputArea;