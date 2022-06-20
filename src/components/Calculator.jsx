import React, { useState } from 'react';
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
		// setCurrentNum(Number(currentNum + e.target.value)); //add only integers

        if ( e.target.value === '0' && currentNum.length === 0 ) {
            console.log('Null pressed');
            setCurrentNum(currentNum);
        } else {
        setCurrentNum(currentNum + e.target.value);
        }
	};

	const handlerOperands = (e) => {
		if (currentNum.length === 0 && !result) {
			console.log('there IS NOT currentNum');
			setResult(0);
			setPreviousNum(0);
			setOperand(e.target.value);
		}
        else if (currentNum && operand ) {
			console.log('there ARE currentNum, operand and result');
			setResult(calculateResult(result, currentNum, operand));
			setPreviousNum(calculateResult(result, currentNum, operand));
			setCurrentNum('');
			setOperand(e.target.value);
		} else {
			console.log('there is NOT previous operand');
			setPreviousNum(currentNum);
			setResult(currentNum);
			setOperand(e.target.value);
			setCurrentNum('');
		}
	};

    const handlerDot = () => {
        console.log('DOT is pressed');
        if( currentNum.length === 0){
            setCurrentNum('0.');
        }
        else if( currentNum.toString().includes('.')){
            setCurrentNum(currentNum);
        } else {
            setCurrentNum(currentNum + '.')
        }
    }

	const handlerEqual = () => {
		console.log('equal was pressed!');
		console.log(equalPressed);
		setEqualPressed(!equalPressed);
		setResult(calculateResult(result, currentNum, operand));
	};

	const clearAll = () => {
		setResult('');
		setOperand('');
		setPreviousNum('');
		setCurrentNum('');
		setEqualPressed(false);
	};

	const clearCurrentNumer = () => {
		setCurrentNum('0');
	};

    console.log(currentNum);
    console.log(currentNum.length);
    console.log(typeof currentNum);

	// console.group();
	// console.log('previousNum   ' + typeof previousNum);
	// console.log('currentNum  ' + typeof currentNum);
	// console.log('result  ' + typeof result);
	// console.log('operand  ' + operand);
	// console.log('equalPressed  ' + equalPressed);
	// console.groupEnd();

	return (
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
					handlerPressButton={handlerPressButton}
					handlerOperands={handlerOperands}
					handlerEqual={handlerEqual}
					clearAll={clearAll}
					clearCurrentNumer={clearCurrentNumer}
                    handlerDot={handlerDot}
				/>
			</div>
		</div>
	);
}
export default Calculator;
