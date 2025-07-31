import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch authenticated user
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('http://localhost:5700/api/auth/get-user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(res.data.user);
        } catch (err) {
          console.log('Invalid token or user fetch failed');
          localStorage.removeItem('token');
          setUser(null);
        }
      }
    };
    fetchUser();
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };
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
          <li className="nav-item">
            <Link className="nav-link at" to="/about">Profile</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle lts" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              List
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/ridehistory">Bikes</Link>
              <Link className="dropdown-item" to="/wallet">Scooters</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/userprofile">Bicycle</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link cnt" to="/admin">Contact</Link>
             <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div className="ml-auto d-flex align-items-center">
            {user ? (
              <>
                <span className="mr-3 text-dark">
                  <i className="fas fa-user-circle mr-1 text-prime"></i> {user.name}
                </span>
                <button onClick={handleLogout} className="btn btn-sm btn-outline-dark">Logout</button>
              </>
            ) : (
              <Link to="/login">
                <i className="far fa-user login"></i>
              </Link>
            )}
          </div>

      </div>
    </nav>
  </>
}

export default Home;
