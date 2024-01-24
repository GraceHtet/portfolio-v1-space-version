import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Cv from './pages/home/cv/Cv'
import Project from './pages/home/project/Project'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project type='page'/>} />
        <Route path="/cv" element={<Cv type='page'/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
