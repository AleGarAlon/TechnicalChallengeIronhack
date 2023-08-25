import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import PhonesDetailsPage from './pages/PhoneDetailsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/phones/:id" element={<PhonesDetailsPage/>} />
        <Route path="*" element={<h1>404 page</h1>} />
      </Routes>
    </div>
  )
}

export default App
