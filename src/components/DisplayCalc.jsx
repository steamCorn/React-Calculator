import React from "react";

export default function DisplayCalc(props) {
	let topDisplay;
	let bottomDisplay;


	if (props.result === 0 && !props.equalPressed && !props.operand) {
		// topDisplay = `${props.result} ${props.operand}`;
		console.log("1 condition");
		bottomDisplay = `${props.currentNum}` || `${props.result}`;
	}
	// else if (props.currentNum===0 && props.operand && !props.equalPressed) {
	// 	console.log("2 condition");
	// 	topDisplay = `${props.currentNum} ${props.operand}`;
	// 	bottomDisplay = `${props.currentNum}`;
	// } 
	// else if ( props.currentNum  && props.operand) {
	// 	console.log("3 condition");
	// 	topDisplay = `${props.result} ${props.operand}`;
	// 	bottomDisplay = `${props.currentNum}`;
	// } 
	// else if (props.operand ) {
	// 	console.log("2 condition");
	// } 
	else if (props.equalPressed && !props.operand) {
		console.log("4 condition");
		topDisplay = `${props.currentNum} = `;
		bottomDisplay = `${props.result}`;
	}
	else if (props.equalPressed) {
		console.log("5 condition");
		topDisplay = `${props.previousNum} ${props.operand} ${props.currentNum} = `;
		bottomDisplay = `${props.result}`;
	}
	else {
		console.log("6 condition");
		topDisplay = `${props.previousNum} ${props.operand}`;
		bottomDisplay = `${props.currentNum}`;
	}

	return (
	<div>
		<div id="display">
			<div className="calculations">
				{topDisplay}
			</div>
			{/* <div className="results">
				{bottomDisplay || "0"}
			</div> */}

			{bottomDisplay || "0"}
		</div>
	</div>
	);
}
