import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Vehiclelist from '../vehicles/Vehiclelist';


const Home = () => {
  const [clients, setClients] = useState([]);
  const [selectedclient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const fetchClients = async () => {
    const res = await axios.get('http://localhost:5700/api/users');
    setClients(res.data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return <>
    <nav className="navbar navbar-expand-lg navbar-light px-4 nav">
      <Link className="navbar-brand titl" to="#"><span className='title1'>Ride</span>Intelli<span className='title2'>X</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link hm" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link at" to="/about">About</Link>
          </li>
          <li className="nav-item dropdown">

            <Link className="nav-link dropdown-toggle lts" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              List
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/vehiclelist">Bikes</Link>
              <a className="dropdown-item" href="#">Scooters</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Bycicle</a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link cnt" to="/admin">Contact</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <Link to="/login"><i class="far fa-user login"></i></Link>
      </div>
    </nav>
    <div className="container mt-4">
      <h2 className="mb-3">Users Details</h2>
      <Vehiclelist
        clients={filteredClients}
        fetchclients={fetchClients}
        setSelectedclient={setSelectedClient}
      />
    </div>
    {selectedclient && (
      <div className="overlay">
        <Vehicleform
          fetchclient={fetchClients}
          selectedclient={selectedclient}
          setSelectedclient={setSelectedClient}
        />
      </div>
    )}
  </>
}

export default Home