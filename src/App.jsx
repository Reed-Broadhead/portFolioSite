import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroPage from './components/IntroPage'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs/>} />
    </Routes>
  )
}

export default App
