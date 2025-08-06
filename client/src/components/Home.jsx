import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  //  Check token directly from localStorage
  const token = localStorage.getItem('token');

  //  Fetch user profile if token exists
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token) {
          const res = await axios.get('http://localhost:5700/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [token]);



  //  Simplified logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-4 nav">
        <Link className="navbar-brand titl" to="#">
          <span className='title1'>Ride</span>Intelli<span className='title2'>X</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          {token && (
            <>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link hm" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link at" to="/about">About</Link>
                </li>
                

                <li className="nav-item">
                  <Link className="nav-link cnt" to="/contact">Contact</Link>
                </li>
              </ul>

              {/* Show search bar only when logged in */}
              <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </>
          )}

          {/* Right-side user info */}
          <div className="ml-auto d-flex align-items-center">
            {token ? (
              <>
                <span className="mr-3 text-dark fs-3"> {user?.name || ''}
                  <Link to={"/userprofile"}>
                    <i className="fas fa-user-circle mr-1 text-prime login" id='user'></i>
                  </Link>
                </span>
                <button onClick={handleLogout} className="btn btn-sm btn-outline-dark">Logout</button>
              </>
            ) : (
              <Link to="/login">
                <i class="fas fa-sign-in-alt login"></i>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
