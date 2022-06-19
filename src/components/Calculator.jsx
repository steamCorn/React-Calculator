import React, { useState } from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';

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

        // setResult(previousNum);

        if(!operand){
            console.log("there is NOT operand");
            setResult(currentNum);
            setOperand(e.target.value);
            setCurrentNum('');
        }
        else if(currentNum && operand && result){
            console.log("there ARE currentNum, operand and result");
            calculateResult(result, currentNum, operand);
            setCurrentNum('');
            setOperand(e.target.value);
        }
        // else if(operand){
        //     console.log("there IS operand");
        //     setPreviousNum(calculateResult(previousNum, currentNum, operand));
        //     setOperand(e.target.value);
        //     setCurrentNum('');
            
        // }
        // else {
        //     console.log("another way");
        //     setOperand(e.target.value);
        //     setPreviousNum(currentNum);
        //     // setResult(previousNum);
        //     setCurrentNum('');
        // }
    }

    const handlerEqual = () => {
        calculateResult(result, currentNum, operand);
        setEqualPressed(true);
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

    const calculateResult = (A, B, mathOperand) => {
        switch (mathOperand){
            case '+':
                setResult(A + B);
                break;
            case '-':
                setResult(A - B);
                break;
            case '*':
                setResult(A * B);
                break;
            case '/':
                setResult(A / B);
                break;
            default:
                setResult(B);    
        }
        return result;
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