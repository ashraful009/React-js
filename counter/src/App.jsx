import { useState } from "react";


function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log('Value Added', counter);
    setCounter(counter < 20 ? counter + 1 : counter)
  }
  const removeValue = () =>{
    setCounter(counter > 0 ? counter - 1 : counter)
  }
  return (
    
    <>
      <h1>Chaai Or React</h1>
      <h2>counrt value: {counter}</h2>
      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
