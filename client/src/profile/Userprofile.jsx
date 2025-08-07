import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RideHistory from './RideHistory';
import { useNavigate } from 'react-router-dom';


const Userprofile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();


  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return setError('No token found. Please login.');

      const res = await axios.get('http://localhost:5700/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch user data');
    }
  };


  useEffect(() => {
    fetchProfile();
  }, []);

  if (error) return <div className="alert alert-danger text-center mt-4">{error}</div>;
  if (!user) return <div className="text-center mt-4">Loading profile...</div>;

  return <>

    <div className="container py-4" style={{ marginTop: "90px" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow rounded">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="fas fa-user-circle fa-5x text-secondary"></i>
                <p className="text-muted mt-1">No Image</p>
              </div>
              <h3 className="mb-3"><i className="fas fa-user me-2"></i>{user.name}</h3>
              <p><i className="fas fa-envelope me-2"></i>Email: {user.email}</p>
              <p><i className="fas fa-phone-alt me-2"></i>Phone: {user.phone}</p>
              <p><i className="fas fa-map-marker-alt me-2"></i>Location: {user.address || 'Not Provided'}</p>
              <p><i className="fas fa-calendar-alt me-2"></i>Joined On: {new Date(user.createdAt).toLocaleDateString()}</p>
              <p><i className="fas fa-user-tag me-2"></i>Role: {user.role}</p>
              
              {user.role === 'admin' && (
                <div className="d-flex flex-column align-items-center gap-2 mt-3">
                  <button className="btn btn-primary w-75" onClick={() => navigate('/admin')}>
                    <i className="fas fa-car me-2"></i>Vehicles
                  </button>
                  <button className="btn btn-secondary w-75" onClick={() => navigate('/users')}>
                    <i className="fas fa-users me-2"></i>Users
                  </button>
                  
                </div>
              )}


            </div>
          </div>
        </div>
      </div>
    </div>
    <RideHistory />
  </>
};

export default Userprofile