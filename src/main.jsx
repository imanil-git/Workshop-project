import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Test from './Test.jsx'
import './index.css'
import Count from './components/Count.jsx'
import Person from './components/Person.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Test name="Anil" location ="Dharan" />
    <Count />
    <Person name ="Sahil" age = "22"  />
  </React.StrictMode>,
)
