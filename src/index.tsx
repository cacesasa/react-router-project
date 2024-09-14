import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/body/main'
import MainVans from './components/body/mainVans'
import Vans from './components/body/vans'
import VanPage from './components/body/vanPage'
import { vans as data } from "./server.js";
import Layout from './components/layout/Layout'
import Dashboard from './host/Dashboard'
import Income from './host/Income'
import Reviews from './host/Review'
import HostLayout from './host/HostLayout'
import MyVans from './host/MyVans'
import VanDetails from './host/VanDetails.js'

function App() {  

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main/>}/>
            <Route path="about" element={<MainVans/>}/>
            <Route path="vans" element={<Vans data={data}/>}/>
            <Route path="vans/:id" element={<VanPage data={data}/>}/>

            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="myvans" element={<MyVans/>}/>
              <Route path="myvans/:id" element={<VanDetails/>}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
