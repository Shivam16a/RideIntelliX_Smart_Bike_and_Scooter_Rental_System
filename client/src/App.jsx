import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import VehicleList from './vehicles/Vehiclelist';
const App = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/vehiclelist' element={<VehicleList/>}/>
    </Routes>
  </BrowserRouter>

  </>
}

export default App