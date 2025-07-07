
// import './App.css'

import { useState } from "react"

// import Card from './components/Card'
function App() {
  const [color, setColor] = useState('white')

  return (
    <div className="w-full h-screen duration-2000" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button onClick={() => setColor("red")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("green")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("blue")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("olive")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "olive" }}>Olive</button>

          <button onClick={() => setColor("gray")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "gray" }}>Gray</button>

          <button onClick={() => setColor("yellow")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={() => setColor("Pink")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "Pink" }}>Pink</button>

          <button onClick={() => setColor("Purple")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "Purple" }}>Purple</button>

          <button onClick={() => setColor("Lavender")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "Lavender" }}>Lavender</button>

          <button onClick={() => setColor("Black")} 
          className="px-4 py-1 rounded-full text-white shadow-lg" 
          style={{ backgroundColor: "Black" }}>Black</button>

        </div>
      </div>
    </div>
  );
}
export default App
