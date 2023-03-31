
import React,{useState} from 'react'

function runComponent() {
    console.log('running component');
    return 4;
}
export default function UseStateHook() {
  //const [count,setCount] = useState(()=>runComponent());//runs only one time
  //const [count,setCount] = useState(runComponent());//runs every time on render

  const [state,setstate] = useState({count:0,theme:"black"});
  const {count,theme} = state;

  function decrementCount(){
    // setCount(prevCount => prevCount - 1);
    setstate(prevState => {
        return {...prevState,count:prevState.count - 1};
    });
  }

  function incrementCount(){
    // setCount(prevCount => prevCount + 1);
  }

  return (
    <>
     <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <span>{theme}</span>
     <button onClick={incrementCount}>+</button>
    </>
  )
}
