import React from "react";
import "./VehicleDetails.css"; // Import custom CSS
import { useLocation, useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get vehicle data passed through the state from VehicleNumberDisplay
  const { vehicleNumber, vehicleDetails = [] } = location.state || {
    vehicleNumber: "Unknown",
    vehicleDetails: [],
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="header">
        <div className="icon">🚴‍♂️</div>
        <h2 className="title">{vehicleNumber}</h2>
        <button className="btn btn-add">ADD</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Place</th>
              <th>Millage</th>
            </tr>
          </thead>
          <tbody>
            {vehicleDetails.length > 0 ? (
              vehicleDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.date}</td>
                  <td>{detail.type}</td>
                  <td>{detail.description}</td>
                  <td>{detail.cost}</td>
                  <td>{detail.place}</td>
                  <td>{detail.millage}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleDetails;
