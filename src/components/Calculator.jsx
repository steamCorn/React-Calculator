import React, { useState } from "react";
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';
import './styles/calculator.css';

function Calculator() {

//     const [previousNum, setPreviousNum] = useState('');
//     const [currentNum, setCurrentNum] = useState('');
//     const [result, setResult] = useState('');
//     const [operator, setOperator] = useState('');

//     const handlerPressButton = (e) => {
//         setCurrentNum(Number(currentNum + e.target.value));
//     }

//     const handlerOperators = (e) => {
//         setOperator(e.target.value);
//         setPreviousNum(currentNum);
//         setCurrentNum('');
//     }

//     const validationEnteredNumber = (num) => {

//     }

// // console.log(typeof currentNum);
// // console.log(typeof previousNum);

//     const calculateResult = () => {
//         switch (operator){
//             case '+':
//                 setResult(previousNum + currentNum);
//                 break;
//             case '-':
//                 setResult(previousNum - currentNum);
//                 break;
//             case '*':
//                 setResult(previousNum * currentNum);
//                 break;
//             case '/':
//                 setResult(previousNum / currentNum);
//                 break;
//             default:
//                 setResult(currentNum);    
//         }
//         return result;
//     }

//     const clearAll = () => {
//         setResult('');
//         setOperator('');
//         setPreviousNum('');
//         setCurrentNum('');
//     }

//     const clearCurrentNumer = () => {
//         setCurrentNum('0');
//     }

    
    const [currentNum, setCurrentNum] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');

    const handlerPressButton = (e) => {
        setCurrentNum(Number(currentNum + e.target.value));
    }

    const handlerOperators = (e) => {
        setOperator(e.target.value);
        setResult(currentNum);
        setCurrentNum('');
    }

    const validationEnteredNumber = (num) => {

    }

    const calculateResult = () => {
        switch (operator){
            case '+':
                setResult(result + currentNum);
                break;
            case '-':
                setResult(result - currentNum);
                break;
            case '*':
                setResult(result * currentNum);
                break;
            case '/':
                setResult(result / currentNum);
                break;
            default:
                setResult(currentNum);    
        }
        return result;
    }

    const clearAll = () => {
        setResult('');
        setOperator('');
        setCurrentNum('');
    }

    const clearCurrentNumer = () => {
        setCurrentNum('0');
    }

    return(
        <div className="wrapper-calculator">
            <div className="calculator calculator-style">
                <DisplayCalc 
                    currentNum={currentNum}
                    // previousNum = {previousNum}
                    result={result}
                />
                <ButtonsPad 
                    handlerPressButton = {handlerPressButton}
                    handlerOperators = {handlerOperators}
                    calculateResult = {calculateResult}
                    clearAll = {clearAll}
                    clearCurrentNumer = {clearCurrentNumer}
                />
            </div>
        </div>
    )
}
export default Calculator;