import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
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
                <a className="dropdown-item" href="#">Bikes</a>
                <a className="dropdown-item" href="#">Scooters</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Bycicle</a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link cnt" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  </>
}

export default Home