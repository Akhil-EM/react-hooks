import React, { useState,useMemo } from "react";

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  },[number]);//memorizing the number variable otherwise get called 
  //every time

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );

  function slowFunction(number) {
    console.log("running slow function");
    for (let i = 0; i < 100000; i++) {}

    return number * 2;
  }
}
