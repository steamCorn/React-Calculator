import React from "react";

export default function DisplayCalc(props) {
	let topDisplay;
	let bottomDisplay;

	if (props.result && !props.equalPressed) {
	topDisplay = props.result + "  " + props.operand;
	bottomDisplay = props.currentNum || props.result;
	} else if (props.equalPressed) {
	console.log(props.equalPressed);
	topDisplay = props.previousNum + "  " + props.operand + "  " + props.currentNum + "  " + "=";
	bottomDisplay = props.result;
	} else {
	topDisplay = props.previousNum + "  " + props.operand;
	bottomDisplay = props.currentNum;
	}

	return (
	<div>
		<div id="display">
		<div className="calculations">{topDisplay}</div>
		<div className="results">
			{bottomDisplay || "0"}
			{/* {props.currentNum  || bottomDisplay ||  '0'} */}
		</div>
		</div>
	</div>
	);
}
