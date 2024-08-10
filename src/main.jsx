import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Test from './Test.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NWRapper from './wrapper/NWRapper.jsx'
// import Count from './components/Count.jsx'
// import Person from './components/Person.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NWRapper />
    </BrowserRouter>
  </React.StrictMode>,
)