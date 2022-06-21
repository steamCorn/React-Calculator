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
	const [equalPressed, setEqualPressed] = useState(false);

	const clearAll = () => {
		setPreviousNum(0);
		setCurrentNum(0);
		setResult(0);
		setOperand('');
		setEqualPressed(false);
	};

	const handlerPressButton = (e) => {

		if ( e.target.value === '0' && currentNum === 0) {
			console.log('handlerPressButton 1 condition');
			setCurrentNum(currentNum);       
        } else if (equalPressed && currentNum === 0) {
			console.log('handlerPressButton 2 condition');

        } else if (currentNum === 0) {
			console.log('handlerPressButton 3 condition');
            setCurrentNum(e.target.value);
        } else if (equalPressed) {
			console.log('handlerPressButton 4 condition');
            clearAll();
            setCurrentNum(e.target.value);
        } else {
        setCurrentNum(currentNum + e.target.value);
        }

	};

	const handlerOperands = (e) => {
		if (currentNum === 0 && !result) {
			console.log('handlerOperands 1 condition');
			setResult(0);
			setPreviousNum(0);
			setOperand(e.target.value);
		}
        else if (!currentNum) {
			console.log('handlerOperands 2 condition');
			setOperand(e.target.value);
		}  
		else if (currentNum && operand && !equalPressed) {
			console.log('handlerOperands 3 condition');
			setResult(calculateResult(result, currentNum, operand));
			setPreviousNum(calculateResult(result, currentNum, operand));
			setCurrentNum(0);
			setOperand(e.target.value);
		} 
		else if (equalPressed) {
			console.log('handlerOperands 4 condition');
			setEqualPressed(false);
			setCurrentNum(0);
			setOperand(e.target.value);

			setPreviousNum(result);
			setResult(result);

		}
		else {
			console.log('handlerOperands 5 condition');
			setPreviousNum(currentNum);
			setResult(currentNum);
			setOperand(e.target.value);
			setCurrentNum(0);
		}
	};

    const handlerDot = () => {
        if( !currentNum){
            setCurrentNum('0.');
        } else if( currentNum.toString().includes('.')){
            setCurrentNum(currentNum);
        } else if(equalPressed){
            clearAll();
            setCurrentNum('0.');
        } else {
            setCurrentNum(currentNum + '.')
        }
    }


	const handlerEqual = () => {
		if(previousNum === 0 && !operand){
			console.log('Equal 1 condition');
			setEqualPressed(true);
			setResult(currentNum);
		}
		else if(equalPressed){
			console.log('Equal 2 condition');
			setPreviousNum(result);
			setResult(calculateResult(result, currentNum, operand));
		}
		else {
			console.log('Equal 3 condition');
			setEqualPressed(true);
			setResult(calculateResult(result, currentNum, operand));
		}
	};

	const clearCurrentNumer = () => {
		setCurrentNum('0');
	};

    
    // console.log(result);
    // console.log(typeof result);

	// console.group();
	// console.log('previousNum   ' +  previousNum);
	// console.log('currentNum  ' + currentNum);
	// console.log('result  ' + result);
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
