import React, { useEffect, useState } from 'react';

export function Timer(props) {
    const [counter, setCounter] = useState(60);
    const [timeZero,setTimeZero] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
          if(counter === 1){
            setTimeZero(true);
          }
          if (counter <= 0) {
            clearInterval(interval);
          } else {
            setCounter(counter - 1);
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      });
      // console.log("component rerendering",counter)

    useEffect(() =>{
      if(timeZero){
        props.isTimeZero(timeZero)
      }
    },[timeZero])
    return (
        <div className="timer">
            {counter > 0 && <div>{counter}</div>}
            {counter === 0 && <div>Click Reset to Restart The Game!!!</div>}
        </div>

    );
}



// const startTimer = (currentTime, setTime) => {
//     return setInterval(() => {
//         setTime(currentTime - 1);
//     }, 1000);
// };
// function Component({ prop1 }) {
//     const [currentTime, setTime] = useState(60);
//     let timed;
//     if (currentTime === 0) clearInterval(timed);
//     useEffect(() => {
//         if (prop1) {
//             timed = startTimer(currentTime, setTime);
//         }
//     }, []);
