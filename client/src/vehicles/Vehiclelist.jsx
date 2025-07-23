import React from 'react'
import axios from 'axios'

const Vehiclelist = ({clients,fetchclients,setSelectedclient}) => {
 const deleteclient = async(id)=> {
  await axios.delete(`http://localhost:5700/api/users/${id}`);
  fetchclients();
 }

  return <>
  <div className="row">
      {clients.map((x) => (
        <div className="col-md-4 mb-4" key={x._id}>
          <div className="card text-white bg-dark h-100">
            <div className="card-body">
              <h5 className="card-title">{x.name}</h5>
              <p className="card-text"><strong>Vehicle Type:</strong> {x.vehicletype}</p>
              <p className="card-text"><strong>Location:</strong> {x.location}</p>
              <p className="card-text"><strong>Status:</strong> {x.status}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button
                className="btn btn-sm btn-light"
                onClick={()=>setSelectedclient(x)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={()=>deleteclient(x._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
}

export default Vehiclelist