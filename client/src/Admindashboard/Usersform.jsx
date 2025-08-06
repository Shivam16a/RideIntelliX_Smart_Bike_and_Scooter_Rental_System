import React, { useEffect, useState } from "react";
import axios from "axios";

const Usersform = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5700/api/auth/reg-user");
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5700/api/auth/delete-user/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
    });
  };

  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5700/api/auth/update-user/${id}`, editData);
      setEditingUserId(null);
      fetchUsers();
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  const handleCancel = () => {
    setEditingUserId(null);
  };

  return<>
    <div className="container py-4">
      <h2 className="mb-4">Registered Users</h2>
      <div className="row">
        {users.map((user) => (
          <div key={user._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                {editingUserId === user._id ? (
                  <>
                    <input
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="form-control mb-2"
                    />
                    <input
                      name="email"
                      value={editData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="form-control mb-2"
                    />
                    <input
                      name="phone"
                      value={editData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="form-control mb-2"
                    />
                    <input
                      name="address"
                      value={editData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      className="form-control mb-2"
                    />
                    <select
                      name="role"
                      value={editData.role}
                      onChange={handleInputChange}
                      className="form-select mb-3"
                    >
                      <option value="Customer">Customer</option>
                      <option value="Admin">Admin</option>
                    </select>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleUpdate(user._id)}
                        className="btn btn-success btn-sm"
                      >
                        <i className="fa fa-save me-1"></i>Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fa fa-times me-1"></i>Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">
                      <strong>Email:</strong> {user.email}<br />
                      <strong>Phone:</strong> {user.phone}<br />
                      <strong>Address:</strong> {user.address}<br />
                      <strong>Role:</strong> {user.role}<br />
                      <strong>Created:</strong>{" "}
                      {new Date(user.createdAt).toLocaleString()}
                    </p>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleEditClick(user)}
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fa fa-edit me-1"></i>Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa fa-trash me-1"></i>Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
};

export default Usersform;
