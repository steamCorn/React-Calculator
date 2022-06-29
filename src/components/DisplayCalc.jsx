import React from 'react';

export default function DisplayCalc(props) {
	let topDisplay;
	let bottomDisplay;

	if (!props.result && !props.isEqual && !props.operand) {
		topDisplay = false;
		bottomDisplay = `${props.currentNum}` || `${props.result}`;
	} else if (props.isEqual && !props.operand) {
		topDisplay = `${props.result} = `;
		bottomDisplay = `${props.currentNum}`;
	} else if (props.isEqual) {
		topDisplay = `${props.previousNum} ${props.operand} ${props.currentNum} = `;
		bottomDisplay = `${props.result}`;
	} else if (props.result && !props.currentNum) {
		topDisplay = `${props.result} ${props.operand}`;
		bottomDisplay = `${props.result}`;
	} else {
		topDisplay = `${props.previousNum} ${props.operand}`;
		bottomDisplay = `${props.currentNum}`;
	}

	return (
		<div>
			<div className="whole-display">
				<div className="calculations">{topDisplay}</div>
				<div className="results" id="display">
					{bottomDisplay}
				</div>
			</div>
		</div>
	);
}
