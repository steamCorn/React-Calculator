import React, { useState } from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';

import calculateResult from '../utils/counterUtils';

import './styles/calculator.css';

function Calculator() {

    const [previousNum, setPreviousNum] = useState('');
    const [currentNum, setCurrentNum] = useState('');
    const [result, setResult] = useState('');
    const [operand, setOperand] = useState('');
    const [equalPressed, setEqualPressed] = useState(false);

    const handlerPressButton = (e) => {
        setCurrentNum(Number(currentNum + e.target.value));
    }

    const handlerOperands = (e) => {

        if(!operand){
            console.log("there is NOT previous operand");
            setPreviousNum(currentNum);
            setResult(currentNum);
            setOperand(e.target.value);
            setCurrentNum('');
        }
        else if(currentNum && operand && result){
            console.log("there ARE currentNum, operand and result");
            setResult(calculateResult(result, currentNum, operand));
            setPreviousNum(calculateResult(result, currentNum, operand));
            setCurrentNum('');
            setOperand(e.target.value);
        }
    }

    const handlerEqual = () => {
        console.log("equal was pressed!");
        console.log(equalPressed);
        setEqualPressed(!equalPressed);
        setResult(calculateResult(result, currentNum, operand));
    }

    const clearAll = () => {
        setResult('');
        setOperand('');
        setPreviousNum('');
        setCurrentNum('');
        setEqualPressed(false);
    }

    const clearCurrentNumer = () => {
        setCurrentNum('0');
    }
    
    console.group();
    console.log("previousNum   " + previousNum);
    console.log('currentNum  ' + currentNum);
    console.log('result  ' + result);
    console.log('operand  ' + operand);
    console.groupEnd();
    

    return(
        <div className="wrapper-calculator">
            <div className="calculator calculator-style">
                <DisplayCalc 
                    previousNum={previousNum}
                    currentNum={currentNum}
                    result={result}
                    operand={operand}
                    equalPressed={equalPressed}
                />
                <ButtonsPad 
                    handlerPressButton = {handlerPressButton}
                    handlerOperands = {handlerOperands}
                    handlerEqual = {handlerEqual}
                    clearAll = {clearAll}
                    clearCurrentNumer = {clearCurrentNumer}
                />
            </div>
        </div>
    )
}
export default Calculator;