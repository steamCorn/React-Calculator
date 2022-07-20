import React, { useState } from 'react';
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

    const [theme, setTheme] = useState('light');

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
            console.log('condition 1.1');
            return setCurrentNum(digit);
        } else if (currentNum === '0.') {
            console.log('condition 1.2');
            return setCurrentNum(currentNum + digit);
        } else if (isOperatorPressed) {
            console.log('condition 1.3');
            setIsOperatorPressed(false);
            return setCurrentNum(digit);
        } else if (isEqualPressed) {
            console.log('condition 1.4');
            clearAll();
            return setCurrentNum(digit);
        } else {
            console.log('condition 1.5');
            return setCurrentNum(currentNum + digit);
        }
    };

    const maxDigitWarning = () => {
        setCurrentNum(currentNum);
    };

    console.log('length of currentNum:   ' + currentNum.toString().length);

    const handlerPressButton = (e) => {
        const digit = e.target.value;
        const maxDisplaylength = 11; //for font-size 2rem

        if (isEqualPressed) {
            console.log('condition 2.1');
            clearAll();
            setCurrentNum(digit);
        } else if (isOperatorPressed) {
            console.log('condition 2.2');
            setIsOperatorPressed(false);
            setCurrentNum(digit);
        } else if (currentNum.toString().length <= maxDisplaylength) {
            if (digit === '0') {
                zeroButtonClickHandler(digit);
            } else if (currentNum === 0 || currentNum === '0') {
                console.log('condition 2.3');
                setCurrentNum(digit);
            } else {
                console.log('condition 2.4');
                setCurrentNum(currentNum + digit);
            }
        } else {
            console.log('maxDigitWarning!');
            maxDigitWarning();
        }
    };

    const handlerOperands = (e) => {
        const symbol = e.target.value;

        if (isEqualPressed) {
            console.log('condition 3.1');
            setIsOperatorPressed(true);
            setIsEqualPressed(false);
            setCurrentNum(0);
            setOperand(symbol);
            setPreviousNum(result);
        } else if (isOperatorPressed) {
            console.log('condition 3.5');
            setOperand(symbol);
        } else if (!operand) {
            console.log('condition 3.7');
            setIsOperatorPressed(true);
            setOperand(symbol);
            setPreviousNum(currentNum);
            setCurrentNum(currentNum);
        } else {
            console.log('condition 3.8');
            setIsOperatorPressed(true);
            setOperand(symbol);
            setResult(calculateResult(previousNum, currentNum, operand));
            setPreviousNum(calculateResult(previousNum, currentNum, operand));
            setCurrentNum(0);
        }
    };

    const handlerDot = () => {
        if (currentNum === 0) {
            console.log('condition 4.1');
            setCurrentNum('0.');
        } else if (isOperatorPressed) {
            console.log('condition 4.2');
            setIsOperatorPressed(false);
            setCurrentNum('0.');
        } else if (isEqualPressed) {
            console.log('condition 4.3');
            clearAll();
            setCurrentNum('0.');
        } else if (currentNum.toString().includes('.')) {
            console.log('condition 4.4');
            setCurrentNum(currentNum);
        } else {
            console.log('condition 4.5');
            setCurrentNum(currentNum + '.');
        }
    };

    const handlerEqual = () => {
        if (previousNum === 0 && !isOperatorPressed) {
            console.log('condition 5.1');
            setIsEqualPressed(true);
            setResult(currentNum);
        } else if (isEqualPressed) {
            console.log('condition 5.2');
            setPreviousNum(result);
            setResult(calculateResult(result, currentNum, operand));
        } else {
            console.log('condition 5.3');
            setIsEqualPressed(true);
            setResult(calculateResult(previousNum, currentNum, operand));
        }
    };

    const handleNegativeSign = () => {
        if (currentNum > 0) {
            console.log('condition 6.1');
            setCurrentNum('-' + currentNum);
        } else if (currentNum < 0) {
            console.log('condition 6.2');
            let newCurNum = currentNum.slice(1, currentNum.toString().length);
            setCurrentNum(newCurNum);
        } else {
            console.log('condition 6.3');
            return false;
        }
    };

    const toggelTheme = () => {
        setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="calculator" id={theme}>
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
