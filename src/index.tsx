import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/nav/nav-bar'
import Main from './components/body/main'
import Footer from './components/footer/footer'
import MainVans from './components/body/mainVans'

function App() {
  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home() {
  return (
    <div className='Home'>
      <NavBar/>
      <Main/>
      <Footer/>
    </div>
  )
}

function About() {
  return (
    <div className='Home'>
      <NavBar/>
      <MainVans/>
      <Footer/>
    </div>
  )
}

export default App
