import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHook() {
  const [name,setName] = useState('');
  const renderCount = useRef(0);//to update value with out rerendering component
  const inputRef = useRef();//to reference a dom element

  const prevName = useRef('');

  useEffect(()=>{
      //setRenderCount(prevCount => prevCount+1);
      prevName.current = name;
      renderCount.current = renderCount.current +1;
  })

  function focusInput() {
    inputRef.current.focus()
  }
  return (
    <>
      <input type='text' ref={inputRef} value={name} onChange={e=>setName(e.target.value)}></input>
      <p>my name is {name}</p>
      <p>rendered {renderCount.current}</p>
      <p>old name {prevName.current}</p>
      <button onClick={focusInput}>focus</button>
    </>
  )
}
