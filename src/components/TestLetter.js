import React from 'react'

export function TestLetter(props) {
    // console.log(props);
    return (
        <span className={props.letterInfo.status}>
            {props.letterInfo.testLetter}
        </span>
    );
}
