import React from 'react';

export default function DisplayCalc(props) {
    let topDisplay;
    let bottomDisplay;

    if (!props.result && !props.isEqualPressed && !props.operand) {
        topDisplay = false;
        bottomDisplay = `${props.currentNum}` || `${props.result}`;
    } else if (props.isEqualPressed && !props.operand) {
        topDisplay = `${props.result} = `;
        bottomDisplay = `${props.currentNum}`;
    } else if (props.isEqualPressed) {
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
            <div className="display">
                <div className="formula">{topDisplay}</div>
                <div className="results">{bottomDisplay}</div>
            </div>
        </div>
    );
}
