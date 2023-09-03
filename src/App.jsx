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
        <Route path="/portfolio-v1-space-version/" element={<Home />} />
        <Route path="/portfolio-v1-space-version/project" element={<Project type='page'/>} />
        <Route path="/portfolio-v1-space-version/cv" element={<Cv type='page'/>} />
        <Route path="/portfolio-v1-space-version/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
