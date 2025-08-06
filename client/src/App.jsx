import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Admin from './components/Admin';
import RideHistory from './profile/RideHistory';
import Card from './cards/Card';
import Banner from './cards/Banner';
import Userprofile from './profile/Userprofile';
import About from './components/About';
import Contact from './components/Contact';
import Bookingform from './components/Bookingform';
import Payment from './components/Payment';
import Usersform from './Admindashboard/Usersform';
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
      <Route path='/card' element={<Card/>}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      <Route path='/' element={<Banner/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/book/:id' element={<Bookingform/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/users' element={<Usersform/>}/>
    </Routes>
  </BrowserRouter>

  </>
}

export default App