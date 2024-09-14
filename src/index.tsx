import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/nav/nav-bar'
import Main from './components/body/main'
import Footer from './components/footer/footer'
import MainVans from './components/body/mainVans'
import Vans from './components/body/vans'

function App() {  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<VansCollection/>}/>
          <Route path="/vans/:id" element={<OneVan/>}/>
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

function VansCollection() {
  return (
    <div className='Home'>
      <NavBar/>
      <Vans/>
      <Footer/>
    </div>
  )
}

function OneVan() {
  return (
    <div className='Home'>
      <NavBar/>
      <Footer/>
    </div>
  )
}


export default App
