# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




import React from 'react'
import axios from 'axios'

const Vehiclelist = ({clients,fetchclients,setSeletedclient}) => {
 const deleteclient = async(id)=> {
  await axios.delete(`http://localhost:5700/api/users/${id}`);
  fetchclients();
 }

  return <>
  <table className='table table-dark'>
  <tr>
    <th>name</th>
     <th>sector</th>
      <th>location</th>
       <th>status</th>
       <th>Action</th>
  </tr>
  {
    clients.map(x=>(
        <tr>
        <td>{x.name}</td>
        <td>{x.sector}</td>
        <td>{x.location}</td>
        <td>{x.status}</td>
        <td>
            <button className='btn btn-dark' onClick={()=>setSeletedclient(x)}>Edit</button>
             <button className='btn btn-danger' onClick={()=>deleteclient(x._id)}>Delete</button>
        </td>
        </tr>
    ))
  }

  </table>

  </>
}

export default Vehiclelist


import React,{useState,useEffect} from 'react'
import axios from "axios"

const Vehicleform = ({fetchclient,selectedclient,setSelectedclient}) => {
    const [form,setForm] = useState({name:"",sector:"",location:"",status:""});
    useEffect(()=>{
        if(selectedclient) setForm(selectedclient);
    },[selectedclient]);

    const hc = (e)=>{
     setForm({...form,[e.target.name]:e.target.value});
    };
    const hs= async(e)=>{
     e.preventDefault();
     if(selectedclient) {
        await axios.put(`http://localhost:5700/api/users/${selectedclient._id}`,form);
        setSelectedclient(null);
     } else {
         await axios.post('http://localhost:5700/api/users',form);
     }
     setForm({name:"",sector:"",location:"",status:""});
     fetchclient();
    };

    
  return <>
  <form onSubmit={hs}>
   <div className='form-group'>
    <label>Name:</label>
    <input 
        type='text'
        name='name'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.name}
    />
   </div>
   <div className='form-group'>
    <label>Sector:</label>
    <input 
        type='text'
        name='sector'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.sector}
    />
   </div>
   <div className='form-group'>
    <label>Location:</label>
    <input 
        type='text'
        name='location'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.location}
    />
    
   </div>
   <div className='form-group'>
    <label>Status:</label>
    <input 
        type='text'
        name='status'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.status}
    />
   </div>
 <button type='submit'>{selectedclient ? "Update":"Add"} Client</button>
  </form>


  </>
}

export default Vehicleform


//Login page
import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Login = () => {


  
  return <>
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow-sm log" style={{ width: '100%', maxWidth: '400px' }}>
            <Link to={'/'}><i class="fas fa-times cut-btn"></i></Link>
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Login</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mt-3 mb-0">
              <Link to="/">Forgot password?</Link> <span><Link className='cna' to={'/register'}> Create new account</Link></span>
            </p>
          </div>
        </div>
      </div>
  </>
}

export default Login