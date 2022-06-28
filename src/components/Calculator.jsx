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
		if(isEqual){
			clearAll();
		}
		setCurrentNum(0);
	};

	const handlerPressButton = (e) => {

		//big problem with 0
		//when there are cur, pr, eq -> setting 0 works incorrect
		if ( e.target.value === '0') {
			if(currentNum==="0." || typeof currentNum === "string"){
				console.log('PressButton 1.0 condition');
				setCurrentNum(currentNum + e.target.value);
			} 
			else if (currentNum === 0) {
				console.log('PressButton 1.1 condition');
				setCurrentNum(currentNum);
			}
			else {
				console.log('PressButton 1.2 condition');
			}
        } 

		else if (isEqual){
			if(currentNum === 0){
				console.log('PressButton 1.3 condition');
				setIsEqual(false);
				setCurrentNum(e.target.value);
			} else {
				console.log('PressButton 1.4 condition');
				clearAll();
				setCurrentNum(e.target.value);
			}
		}
		
		else if (currentNum === 0) {
			if(isOperator){
				console.log('PressButton 1.5 condition');
				setIsOperator(false);
				setCurrentNum(e.target.value);
			} else{
				console.log('PressButton 1.6 condition');
				setCurrentNum(e.target.value);
			}
			
        } 

		else if (isOperator) {
			console.log('PressButton 1.7 condition');
			setIsOperator(false)
			setCurrentNum(e.target.value);
			if (isNegative){

			}
        } 

		else {
			console.log('PressButton 1.8 condition')
        	setCurrentNum(currentNum + e.target.value);
        }
	};

	const handlerOperands = (e) => {
		
		if (isEqual) {
			console.log('handlerOperands 2.0 condition');
			setIsOperator(true);
			setIsEqual(false);
			setCurrentNum(0);
			setOperand(e.target.value);
			setPreviousNum(result);
			setResult(result);
			
		} 
		else if (e.target.value === '%') {
			console.log('handlerOperands 2.1 condition');
			setIsOperator(true);
			setCurrentNum(currentNum * 0.01);
		} 

		else if (isOperator) {
			let isNegativeSign = e.target.value === '-';
			let isPositive = e.target.value === '+';
			let isOperandMultiplyOrDevide = operand === '*'|| operand === '/';

			if(isNegativeSign && isOperandMultiplyOrDevide) {
				console.log('handlerOperands 2.2 condition');
				setOperand(operand);
				setNegative(true);
			}
			else if (isPositive){
				setNegative(false);
				setOperand(e.target.value);
			}
            else {
				console.log('handlerOperands 2.3 condition');
				setOperand(e.target.value);
			}
		}

		// else if (operand  && !result) {
		// 	console.log('handlerOperands 2.6 condition');
		// 	setIsOperator(true);
		// 	setResult(calculateResult(previousNum, currentNum, operand))
		// 	setPreviousNum(calculateResult(previousNum, currentNum, operand))
		// 	setOperand(e.target.value);
		// 	setCurrentNum(currentNum);
		// }

        else if(isNegative){
            console.log('handlerOperands 2.7 condition');
            setIsOperator(true);
			setOperand(e.target.value);
            setNegative(false);
            setResult(calculateResult(previousNum, '-'+currentNum, operand));
            setPreviousNum(calculateResult(previousNum, '-'+currentNum, operand));
            setCurrentNum(0);
        }
        else if (!operand) {
			console.log('handlerOperands 2.5 condition');
			setIsOperator(true);
			setOperand(e.target.value);
			setPreviousNum(currentNum);
			setCurrentNum(currentNum);
		}
		else {
            console.log('handlerOperands 2.4 condition');
			setIsOperator(true);
			setOperand(e.target.value);
			setResult(calculateResult(previousNum, currentNum, operand));
			setPreviousNum(calculateResult(previousNum, currentNum, operand));
			setCurrentNum(0);
		}
	};

    const handlerDot = () => {
        if( !currentNum){
			console.log('handlerDot 1 condition');
            setCurrentNum('0.');
        } else if( currentNum.toString().includes('.')){
			console.log('handlerDot 2 condition');
            setCurrentNum(currentNum);
        } else if(isEqual){
			console.log('handlerDot 3 condition');
            clearAll();
            setCurrentNum('0.');
        } else {
			console.log('handlerDot 4 condition');
            setCurrentNum(currentNum + '.')
        }
    }



	const handlerEqual = () => {
		if(previousNum === 0 && !operand){
			console.log('Equal 1 condition');
			setIsEqual(true);
			setResult(currentNum);
		} 
		else if(isNegative){
            console.log('Equal 4 condition');
            setIsEqual(true);
            setNegative(false);
            setResult(calculateResult(previousNum, '-'+currentNum, operand));
            setCurrentNum('-'+currentNum);
        }
        else if(!result && previousNum){
			console.log('Equal 2 condition');
			setIsEqual(true);
			setOperand(operand);
			setResult(calculateResult(previousNum, currentNum, operand));
		} else if(isEqual){
			console.log('Equal 3 condition');
			setPreviousNum(result);
			setResult(calculateResult(result, currentNum, operand));
		} else {
			console.log('Equal 5 condition');
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
                    isNegative = {isNegative}
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
