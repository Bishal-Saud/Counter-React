import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  
      <div className="card">
        <p className='count'>
        {count}
          </p> 
         <div className='btns'>

        <button onClick={() => setCount((count) => count + 1)}>
        Inc
        </button>
<button onClick={() => setCount((count) => count - 1)}>
        Dec
        </button>
         </div>

      </div>
    
    </>
  )
}

export default App
