import './App.css';
import React, { useState } from 'react';
import { Timer } from "./components/Timer"
import { Typing } from './components/Typing'



function App() {

  const [toggleTimer, setToggleTimer] = useState(false);
  const [timeZero, setTimeZero] = useState(false);

  const isToggleTimer = (data) => {
    setToggleTimer(data)
  }

  const isTimeZero = (data) => {
    setTimeZero(data)
  }

  return (
    <div className="App">
      {toggleTimer === false && <div className="timer">60</div>}
      {toggleTimer === true && <Timer isTimeZero={isTimeZero} />}
      <div id="textArea">
        <Typing isToggleTimer={isToggleTimer} 
        timeZero={timeZero}
        />
      </div>

      <div><button onClick={() => window.location.reload()}>Reset</button></div>
    </div>
  );
}

export default App;
