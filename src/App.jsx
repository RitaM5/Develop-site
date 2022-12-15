import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Services from './Pages/Services/Services'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import NoFound from './Pages/Shared/NoFound/NoFound'
import Team from './Pages/Team/Team'
//import Theme from './Pages/Theme/Theme'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NoFound />}></Route>
      </Routes>
      <a href="#" className="scroll-top d-flex align-items-center justify-content-end pb-5 fixed-bottom">
        <img src="https://img.icons8.com/bubbles/50/null/long-arrow-up.png" className='bg-danger rounded-5' />
      </a>
      <Footer />
    </div>
  )
}

export default App
