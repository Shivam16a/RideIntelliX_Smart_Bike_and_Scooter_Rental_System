import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const hc = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const hs = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5700/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  return <>
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <form
        onSubmit={hs}
        className="bg-white p-5 rounded-4 shadow-lg w-100"
        style={{ maxWidth: '420px' }}
      >
        <h2 className="text-center mb-4 text-primary">
          <i className="fas fa-sign-in-alt me-2"></i>
          Login
        </h2>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">
            <i className="fas fa-envelope me-2 text-secondary"></i>
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={hc}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="form-label">
            <i className="fas fa-lock me-2 text-secondary"></i>
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={hc}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100 fw-bold shadow-sm"
        >
          <i className="fas fa-sign-in-alt me-2"></i>
          Login
        </button>
        <span>Forgot password <Link to={'/register'}> Create Account</Link></span>
      </form>
    </div>
  </>
};

export default Login;
