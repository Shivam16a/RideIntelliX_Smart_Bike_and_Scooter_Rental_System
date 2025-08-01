import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5700/api/auth/reg-user")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  return <>
    <div className="container " style={{margin:"90px"}}>
      <h2 className="mb-4 fw-bold text-primary">User Profiles</h2>

      <div className="row">
        {users.map((user, index) => {
          const {
            name,
            phone,
            address,
            profileImage,
            createdAt,
          } = user;

          const initials = name?.charAt(0).toUpperCase();

          return (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body d-flex align-items-center">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}
                    >
                      {initials}
                    </div>
                  )}

                  <div>
                    <h5 className="card-title mb-1">{name}</h5>
                    <p className="mb-1 text-muted">
                      <i className="fas fa-phone-alt me-2"></i>
                      {phone || "N/A"}
                    </p>
                    <p className="mb-1 text-muted">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {address || "N/A"}
                    </p>
                    <p className="mb-0 text-muted">
                      <i className="fas fa-clock me-2"></i>
                      Joined: {new Date(createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
};

export default UserProfile;
