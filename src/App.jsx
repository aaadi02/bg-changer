import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('white');
  return (
   <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>

          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "blue"}} onClick={() => setColor("Blue")}>Blue</button>
          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "green"}} onClick={() => setColor("Green")}>Green</button>
          <button className='outline-none text-black px-4 py-1 rounded-full' style={{backgroundColor: "yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
          <button className='outline-none text-black px-4 py-1 rounded-full' style={{backgroundColor: "Pink"}} onClick={() => setColor("Pink")}>Pink</button>
          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "Gray"}} onClick={() => setColor("gray")}>Gray</button>
          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
          <button className='outline-none text-black px-4 py-1 rounded-full' style={{backgroundColor: "lavender"}} onClick={() => setColor("lavender")}>Lavander</button>
          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
          <button className='outline-none text-white px-4 py-1 rounded-full' style={{backgroundColor: "black"}} onClick={() => setColor("black")}>Black</button>

        </div>
      </div>
   </div>
  )
}

export default App
