import React, { useState } from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';
import './styles/calculator.css';

function Calculator() {

    const [previousNum, setPreviousNum] = useState('');
    const [currentNum, setCurrentNum] = useState('');
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('');

    const handlerPressButton = (e) => {
        setCurrentNum(currentNum + e.target.value)
        console.log(e.target.value);
    }
    const handlerOperators = (e) => {
        console.log(e.target.value);
        setOperator(e.target.value);
        setPreviousNum(currentNum);
        setCurrentNum('');
    }

    return(
        <div className="wrapper-calculator">
            <div className="calculator calculator-style">
                <DisplayCalc 
                    operator={operator}
                    currentNum={currentNum}
                    previousNum = {previousNum}
                />
                <ButtonsPad 
                    handlerPressButton = {handlerPressButton}
                    handlerOperators = {handlerOperators}
                />
            </div>
        </div>
    )
}
export default Calculator;