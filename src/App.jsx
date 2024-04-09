import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{
        height :'90vh',
        width: '100%',
        display: 'flex',
        alignItems:'center',
        justifyContent : 'center'
      }}>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
