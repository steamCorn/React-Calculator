import React from "react";

function ButtonsPad(props) {
    return(
        <div className="buttons-pad-calculator">
            <div className="operators">
                <button id="add" value="+" onClick={props.handlerOperands}>
                    +
                </button>
                <button id="subtract" value="-" onClick={props.handlerOperands}>
                    -
                </button>
                <button id="multiply" value="*" onClick={props.handlerOperands}> 
                    * 
                </button>
                <button id="divide" value="/" onClick={props.handlerOperands}> 
                    / 
                </button>
                <button id="percent" value="%" onClick={props.handlerOperands}> 
                    % 
                </button>
                <button id="clear" value="C" onClick={props.clearAll}> 
                    C 
                </button>
                <button id="clear-element" value="CE" onClick={props.clearCurrentNumer}> 
                    CE 
                </button>
            </div>

            <div className="digits">
                <button id="seven" value="7" onClick={props.handlerPressButton}>
                    7
                </button>
                <button id="eight" value="8" onClick={props.handlerPressButton}>
                    8
                </button>
                <button id="nine" value="9" onClick={props.handlerPressButton}>
                    9
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
                <button id="one" value="1" onClick={props.handlerPressButton}>
                    1
                </button>
                <button id="two" value="2" onClick={props.handlerPressButton}>
                    2
                </button>
                <button id="three" value="3" onClick={props.handlerPressButton}>
                    3
                </button>
                <button id="decimal" value="." onClick={props.handlerPressButton}> 
                    . 
                </button>

                <button id="zero" value="0" onClick={props.handlerPressButton}>
                    0
                </button>
                <button id="equals" value="=" onClick={props.handlerEqual}>
                    =
                </button>
            </div>
        </div>
    )
}
export default ButtonsPad;