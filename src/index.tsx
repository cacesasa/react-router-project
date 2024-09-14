import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/body/main'
import MainVans from './components/body/mainVans'
import Vans from './components/body/vans'
import VanPage from './components/body/vanPage'
import { vans as data } from "./server.js";
import Layout from './components/layout/Layout'
function App() {  

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<MainVans/>}/>
            <Route path="/vans" element={<Vans data={data}/>}/>
            <Route path="/vans/:id" element={<VanPage data={data}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
