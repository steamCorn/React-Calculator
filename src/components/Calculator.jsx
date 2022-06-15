import React, { useState } from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';
import './styles/calculator.css';

function Calculator() {

    const [previousNum, setPreviousNum] = useState('');
    const [currentNum, setCurrentNum] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');

    const handlerPressButton = (e) => {
        setCurrentNum(currentNum + e.target.value);
    }
    const handlerOperators = (e) => {
        setOperator(e.target.value);
        setPreviousNum(currentNum);
        setCurrentNum('');
    }

    console.log("previousNum : " + previousNum);
    console.log("currentNum : " + currentNum);
    console.log("operator : " + operator);
    console.log("result : " + result);

    const calculateResult = () => {
        switch (operator){
            case '+':
                setResult(previousNum + currentNum);
                break;
            case '-':
                setResult(previousNum - currentNum);
                break;
            case '*':
                setResult(previousNum * currentNum);
                break;
            case '/':
                setResult(previousNum + currentNum);
                break;
            default:
                setResult(0);    
        }
        return result;
    }

    return(
        <div className="wrapper-calculator">
            <div className="calculator calculator-style">
                <DisplayCalc 
                    operator={operator}
                    currentNum={currentNum}
                    previousNum = {previousNum}
                    result={result}
                />
                <ButtonsPad 
                    handlerPressButton = {handlerPressButton}
                    handlerOperators = {handlerOperators}
                    calculateResult = {calculateResult}
                />
            </div>
        </div>
    )
}
export default Calculator;