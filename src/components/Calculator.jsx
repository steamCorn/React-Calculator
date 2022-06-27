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
	const [operPressed, setOperPressed] = useState(false);

	// const arrOperand = ['+', '-', '*', '/'];

	const clearAll = () => {
		setPreviousNum(0);
		setCurrentNum(0);
		setResult(0);
		setOperand('');
		setEqualPressed(false);
		setOperPressed(false);
	};

	const clearCurrentNumer = () => {
		if(equalPressed){
			clearAll();
		}
		setCurrentNum(0);
	};

	const handlerPressButton = (e) => {
		if ( e.target.value === '0') {
			if(currentNum==="0." || typeof currentNum === "string"){
				console.log('PressButton 1 condition');
				setCurrentNum(currentNum + e.target.value);
			} 
			else if (currentNum === 0) {
				console.log('PressButton 2 condition');
				setCurrentNum(currentNum);
			}
			else {
				console.log('PressButton 3 condition');
			}
        } 

		//---- change here

		// else if (currentNum === 0 || previousNum) {
		// 	console.log('PressButton 8 condition');
        //     setCurrentNum(e.target.value);
        // }  
		
		else if (currentNum === 0) {
			console.log('PressButton 9 condition');
            setCurrentNum(e.target.value);
        } 

		//--------

		
		// if ( e.target.value === '0' && currentNum === 0 || currentNum==="0.") {
		// 	console.log('PressButton 1 condition');
		// 	setCurrentNum(currentNum);       
        // } 

		
		// ------ added this for ( 7.001 - 0.002 + ..)
		else if (operPressed) {
			console.log('PressButton 4 condition');
			setOperPressed(false)
        	setCurrentNum(e.target.value);
        } 


		else if (equalPressed && currentNum === 0) {
			console.log('PressButton 5 condition');
			setEqualPressed(false);
			setCurrentNum(e.target.value);
        } 
		else if (equalPressed) {
			console.log('PressButton 6 condition');
            clearAll();
            setCurrentNum(e.target.value);
        } else {
			console.log('PressButton 7 condition')
        	setCurrentNum(currentNum + e.target.value);
        }
	};

	const handlerOperands = (e) => {
		if (equalPressed) {
			console.log('handlerOperands 1 condition');
			setEqualPressed(false);
			setCurrentNum(0);
			setOperand(e.target.value);
			setPreviousNum(result);
			setResult(result);
			setOperPressed(true)
		} else if (e.target.value === '%') {
			console.log('handlerOperands 2 condition');
			setCurrentNum(currentNum * 0.01);
		} 
		// ------ chack here
		else if (operand  && !result) {
			console.log('handlerOperands 3 condition');
			setResult(calculateResult(previousNum, currentNum, operand))
			setPreviousNum(calculateResult(previousNum, currentNum, operand))
			setOperand(e.target.value);
			setCurrentNum(currentNum);
			setOperPressed(true)
		}
		else if (operand) {
			console.log('handlerOperands 4 condition');
			setOperand(e.target.value);
			setResult(calculateResult(previousNum, currentNum, operand));
			setPreviousNum(calculateResult(previousNum, currentNum, operand));
			
			// ------ check here
			setCurrentNum(0);
			setOperPressed(true)
		}
		else {
			console.log('handlerOperands 5 condition');
			setPreviousNum(currentNum);
			setOperand(e.target.value);

			// ----- changed code here ---- was --  setCurrentNum(0); 
			// now: 1 (prN), + , = --- 2(result) and 1(crN) work corecctly
			// ------ need to retert (0)
			setCurrentNum(currentNum);
			setOperPressed(true)
		}
	};

    const handlerDot = () => {
        if( !currentNum){
			console.log('handlerDot 1 condition');
            setCurrentNum('0.');
        } else if( currentNum.toString().includes('.')){
			console.log('handlerDot 2 condition');
            setCurrentNum(currentNum);
        } else if(equalPressed){
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
			setEqualPressed(true);
			setResult(currentNum);
		} else if(!result && previousNum){
			//changes here
			console.log('Equal 2 condition');
			setEqualPressed(true);
			setOperand(operand);
			setResult(calculateResult(previousNum, currentNum, operand));
			//check 
		} else if(equalPressed){
			console.log('Equal 3 condition');
			setPreviousNum(result);
			setResult(calculateResult(result, currentNum, operand));
		} else {
			console.log('Equal 4 condition');
			setEqualPressed(true);
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
