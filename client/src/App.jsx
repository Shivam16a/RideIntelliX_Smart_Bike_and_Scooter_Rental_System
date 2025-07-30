import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Admin from './components/Admin';
import RideHistory from './profile/RideHistory';
const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return <>
  <BrowserRouter>
      <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/ridehistory' element={<RideHistory/>}/>
    </Routes>
  </BrowserRouter>

  </>
}

export default App