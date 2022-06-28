import React from "react";

export default function DisplayCalc(props) {
	let topDisplay;
	let bottomDisplay;


	if (!props.result && !props.isEqual && !props.operand) {
		topDisplay = false;
		console.log("1 condition");
		bottomDisplay = `${props.currentNum}` || `${props.result}`;
	}
	else if (props.isEqual && !props.operand) {
		console.log("3 condition");
		topDisplay = `${props.result} = `;
		bottomDisplay = `${props.currentNum}`;
	}
	else if (props.isEqual) {
		console.log("4 condition");
		topDisplay = `${props.previousNum} ${props.operand} ${props.currentNum} = `;
		bottomDisplay = `${props.result}`;
	}
	else if (props.result && !props.currentNum) {
		console.log("5 condition");
		topDisplay = `${props.result} ${props.operand}`;
		bottomDisplay = `${props.result}`;
	}
	// else if (props.isNegative) {
	// 	console.log("6 condition");
	// 	topDisplay = `${props.previousNum} ${props.operand} - `;
	// 	bottomDisplay = `${props.currentNum}`;
	// }
	else {
		console.log("7 condition");
		topDisplay = `${props.previousNum} ${props.operand}`;
		bottomDisplay = `${props.currentNum}`;
	}

	return (
	<div>
		<div className="whole-display">
			<div className="calculations">
				{topDisplay}
			</div>
			<div className="results" id="display">
				{bottomDisplay}
			</div>
		</div>
	</div>
	);
}
