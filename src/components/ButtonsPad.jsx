import React from 'react';

function ButtonsPad(props) {
    return (
        <div className="buttons-pad-calculator button-grid">
            <button id="clear" value="C" onClick={props.clearAll}>
                C
            </button>
            <button
                id="clear-element"
                value="CE"
                onClick={props.clearCurrentNumer}
            >
                CE
            </button>
            <button
                id="percent"
                value="negative"
                onClick={props.handleNegativeSign}
            >
                +/-
            </button>
            <button id="divide" value="÷" onClick={props.handlerOperands}>
                ÷
            </button>

            <button id="seven" value="7" onClick={props.handlerPressButton}>
                7
            </button>
            <button id="eight" value="8" onClick={props.handlerPressButton}>
                8
            </button>
            <button id="nine" value="9" onClick={props.handlerPressButton}>
                9
            </button>
            <button id="multiply" value="×" onClick={props.handlerOperands}>
                ×
            </button>
            <button id="four" value="4" onClick={props.handlerPressButton}>
                4
            </button>
            <button id="five" value="5" onClick={props.handlerPressButton}>
                5
            </button>
            <button id="six" value="6" onClick={props.handlerPressButton}>
                6
            </button>
            <button id="subtract" value="-" onClick={props.handlerOperands}>
                -
            </button>
            <button id="one" value="1" onClick={props.handlerPressButton}>
                1
            </button>
            <button id="two" value="2" onClick={props.handlerPressButton}>
                2
            </button>
            <button id="three" value="3" onClick={props.handlerPressButton}>
                3
            </button>
            <button
                className="grid-row-span-2"
                id="add"
                value="+"
                onClick={props.handlerOperands}
            >
                +
            </button>
            <button id="zero" value="0" onClick={props.handlerPressButton}>
                0
            </button>
            <button id="decimal" value="." onClick={props.handlerDot}>
                .
            </button>
            <button id="equals" value="=" onClick={props.handlerEqual}>
                =
            </button>
        </div>
    );
}
export default ButtonsPad;
