import React from "react";

export default function DisplayCalc(props) {

    return(
        <div>
            <div id="display">
                {props.result || props.currentNum || props.previousNum || '0'}
            </div>
        </div>
    )
}
