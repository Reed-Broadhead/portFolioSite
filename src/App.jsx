import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Work from './components/Work'
import IntroPage from './components/IntroPage'
import HomePage from './components/HomePage'
import Projects from './components/Projects'
import {Route, Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
  
    </Routes>
  )
}

export default App
