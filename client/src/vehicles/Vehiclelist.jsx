import React from "react";
import { Table, Button, Image } from "react-bootstrap";

const VehicleList = ({ vehicles, deleteVehicle }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Fuel</th>
          <th>Price</th>
          <th>Image</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((v, i) => (
          <tr key={i}>
            <td>{v.name}</td>
            <td>{v.type}</td>
            <td>{v.fuel}</td>
            <td>₹{v.price}</td>
            <td>
              <Image src={v.imageUrl} alt={v.name} width="100" thumbnail />
            </td>
            <td>{v.location}</td>
            <td>
              <Button variant="danger" onClick={() => deleteVehicle(i)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default VehicleList;
