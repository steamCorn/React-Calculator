import React, { useState } from 'react';
import DisplayCalc from './DisplayCalc';
import ButtonsPad from './ButtonsPad';

import calculateResult from '../utils/counterUtils';

import './styles/calculator.css';

function Calculator() {
	const [previousNum, setPreviousNum] = useState(0);
	const [currentNum, setCurrentNum] = useState(0);
	const [result, setResult] = useState(0);
	const [operand, setOperand] = useState('');
	const [isEqual, setIsEqual] = useState(false);
	const [isOperator, setIsOperator] = useState(false);
	const [isNegative, setNegative] = useState(false);

	const clearAll = () => {
		setPreviousNum(0);
		setCurrentNum(0);
		setResult(0);
		setOperand('');
		setIsEqual(false);
		setIsOperator(false);
		setNegative(false);
	};

	const clearCurrentNumer = () => {
		if (isEqual) {
			clearAll();
		}
		setCurrentNum(0);
	};

	const handlerPressButton = (e) => {
		if (e.target.value === '0') {
			if (currentNum === 0 || currentNum === '0') {
				setCurrentNum(currentNum);
			} else if (isEqual) {
				clearAll();
				setCurrentNum(e.target.value);
			} else {
				setCurrentNum(currentNum + e.target.value);
			}
		} else if (isEqual) {
			if (currentNum === 0) {
				setIsEqual(false);
				setCurrentNum(e.target.value);
			} else {
				clearAll();
				setCurrentNum(e.target.value);
			}
		} else if (currentNum === 0) {
			if (isOperator) {
				setIsOperator(false);
				setCurrentNum(e.target.value);
			} else {
				setCurrentNum(e.target.value);
			}
		} else if (isOperator) {
			setIsOperator(false);
			setCurrentNum(e.target.value);
			if (isNegative) {
			}
		} else {
			setCurrentNum(currentNum + e.target.value);
		}
	};

	const handlerOperands = (e) => {
		if (isEqual) {
			setIsOperator(true);
			setIsEqual(false);
			setCurrentNum(0);
			setOperand(e.target.value);
			setPreviousNum(result);
			setResult(result);
		} else if (e.target.value === '%') {
			setIsOperator(true);
			setCurrentNum(currentNum * 0.01);
		} else if (isOperator) {
			let isNegativeSign = e.target.value === '-';
			let isPositive = e.target.value === '+';
			let isOperandMultiplyOrDevide = operand === '*' || operand === '/';

			if (isNegativeSign && isOperandMultiplyOrDevide) {
				setOperand(operand);
				setNegative(true);
			} else if (isPositive) {
				setNegative(false);
				setOperand(e.target.value);
			} else {
				setOperand(e.target.value);
			}
		} else if (isNegative) {
			setIsOperator(true);
			setOperand(e.target.value);
			setNegative(false);
			setResult(calculateResult(previousNum, '-' + currentNum, operand));
			setPreviousNum(calculateResult(previousNum, '-' + currentNum, operand));
			setCurrentNum(0);
		} else if (!operand) {
			setIsOperator(true);
			setOperand(e.target.value);
			setPreviousNum(currentNum);
			setCurrentNum(currentNum);
		} else {
			setIsOperator(true);
			setOperand(e.target.value);
			setResult(calculateResult(previousNum, currentNum, operand));
			setPreviousNum(calculateResult(previousNum, currentNum, operand));
			setCurrentNum(0);
		}
	};

	const handlerDot = () => {
		if (!currentNum) {
			setCurrentNum('0.');
		} else if (currentNum.toString().includes('.')) {
			setCurrentNum(currentNum);
		} else if (isEqual) {
			clearAll();
			setCurrentNum('0.');
		} else {
			setCurrentNum(currentNum + '.');
		}
	};

	const handlerEqual = () => {
		if (previousNum === 0 && !operand) {
			setIsEqual(true);
			setResult(currentNum);
		} else if (isNegative) {
			setIsEqual(true);
			setNegative(false);
			setResult(calculateResult(previousNum, '-' + currentNum, operand));
			setCurrentNum('-' + currentNum);
		} else if (!result && previousNum) {
			setIsEqual(true);
			setOperand(operand);
			setResult(calculateResult(previousNum, currentNum, operand));
		} else if (isEqual) {
			setPreviousNum(result);
			setResult(calculateResult(result, currentNum, operand));
		} else {
			setIsEqual(true);
			setResult(calculateResult(previousNum, currentNum, operand));
		}
	};

	return (
		<div className="wrapper-calculator">
			<div className="calculator calculator-style">
				<DisplayCalc
					previousNum={previousNum}
					currentNum={currentNum}
					result={result}
					operand={operand}
					isEqual={isEqual}
					isNegative={isNegative}
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
