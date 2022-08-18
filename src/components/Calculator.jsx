import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';

import { CgSun } from 'react-icons/cg';
import { HiOutlineMoon, HiOutlineMenuAlt4 } from 'react-icons/hi';

import { calculateResult } from '../utils/counterUtils';

import './styles/calculator.css';

function Calculator() {
    const [previousNum, setPreviousNum] = useState(0);
    const [currentNum, setCurrentNum] = useState(0);
    const [result, setResult] = useState(0);
    const [operand, setOperand] = useState('');
    const [isEqualPressed, setIsEqualPressed] = useState(false);
    const [isOperatorPressed, setIsOperatorPressed] = useState(false);

    const {theme, setTheme} = useContext(ThemeContext);

    const toggelTheme = () => {
        setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'));
    };

    const clearAll = () => {
        setPreviousNum(0);
        setCurrentNum(0);
        setResult(0);
        setOperand('');
        setIsEqualPressed(false);
        setIsOperatorPressed(false);
    };

    const clearCurrentNumer = () => {
        if (isEqualPressed) {
            clearAll();
        } else setCurrentNum(0);
    };

    const zeroButtonClickHandler = (digit) => {
        if (currentNum === 0 || currentNum === '0') {
            return setCurrentNum(digit);
        } else if (currentNum === '0.') {
            return setCurrentNum(currentNum + digit);
        } else if (isOperatorPressed) {
            setIsOperatorPressed(false);
            return setCurrentNum(digit);
        } else if (isEqualPressed) {
            clearAll();
            return setCurrentNum(digit);
        } else {
            return setCurrentNum(currentNum + digit);
        }
    };

    const maxDigitWarning = () => {
        console.log('Digit Length Limit');
        setCurrentNum(currentNum);
    };

    const handlerPressButton = (e) => {
        const digit = e.target.value;
        const maxDisplaylength = 9; //for font-size 2rem

        if (isEqualPressed) {
            clearAll();
            setCurrentNum(digit);
        } else if (isOperatorPressed) {
            setIsOperatorPressed(false);
            setCurrentNum(digit);
        } else if (currentNum.toString().length <= maxDisplaylength) {
            if (digit === '0') {
                zeroButtonClickHandler(digit);
            } else if (currentNum === 0 || currentNum === '0') {
                setCurrentNum(digit);
            } else {
                setCurrentNum(currentNum + digit);
            }
        } else {
            maxDigitWarning();
        }
    };

    const handlerOperands = (e) => {
        const symbol = e.target.value;

        if (isEqualPressed) {
            setIsOperatorPressed(true);
            setIsEqualPressed(false);
            setCurrentNum(0);
            setOperand(symbol);
            setPreviousNum(result);
        } else if (isOperatorPressed) {
            setOperand(symbol);
        } else if (!operand) {
            setIsOperatorPressed(true);
            setOperand(symbol);
            setPreviousNum(currentNum);
            setCurrentNum(currentNum);
        } else {
            setIsOperatorPressed(true);
            setOperand(symbol);
            setResult(calculateResult(previousNum, currentNum, operand));
            setPreviousNum(calculateResult(previousNum, currentNum, operand));
            setCurrentNum(0);
        }
    };

    const handlerDot = () => {
        if (currentNum === 0) {
            setCurrentNum('0.');
        } else if (isOperatorPressed) {
            setIsOperatorPressed(false);
            setCurrentNum('0.');
        } else if (isEqualPressed) {
            clearAll();
            setCurrentNum('0.');
        } else if (currentNum.toString().includes('.')) {
            setCurrentNum(currentNum);
        } else {
            setCurrentNum(currentNum + '.');
        }
    };

    const handlerEqual = () => {
        if (previousNum === 0 && !isOperatorPressed) {
            setIsEqualPressed(true);
            setResult(currentNum);
        } else if (isEqualPressed) {
            setPreviousNum(result);
            setResult(calculateResult(result, currentNum, operand));
        } else {
            setIsEqualPressed(true);
            setResult(calculateResult(previousNum, currentNum, operand));
        }
    };

    const handleNegativeSign = () => {
        if (currentNum > 0) {
            setCurrentNum('-' + currentNum);
        } else if (currentNum < 0) {
            let newCurNum = currentNum.slice(1, currentNum.toString().length);
            setCurrentNum(newCurNum);
        } else {
            return false;
        }
    };

   

    return (
        <div className="calculator">
            <div className="top-section">
                <div>
                    <HiOutlineMenuAlt4 />
                </div>
                <h3>Calculator</h3>
                <div onClick={toggelTheme}>
                    {theme === 'light' ? <HiOutlineMoon /> : <CgSun />}
                </div>
            </div>

            <DisplayCalc
                previousNum={previousNum}
                currentNum={currentNum}
                result={result}
                operand={operand}
                isEqualPressed={isEqualPressed}
            />
            <ButtonsPad
                handlerPressButton={handlerPressButton}
                handlerOperands={handlerOperands}
                handlerEqual={handlerEqual}
                clearAll={clearAll}
                clearCurrentNumer={clearCurrentNumer}
                handlerDot={handlerDot}
                handleNegativeSign={handleNegativeSign}
            />
        </div>
    );
}
export default Calculator;
