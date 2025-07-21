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