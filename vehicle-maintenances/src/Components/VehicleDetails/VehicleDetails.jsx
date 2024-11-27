import React from "react";
import "./VehicleDetails.css"; // Import custom CSS
import { useLocation, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const VehicleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get vehicle data passed through the state from VehicleNumberDisplay
  const { vehicleNumber, vehicleDetails = [] } = location.state || {
    vehicleNumber: "Unknown",
    vehicleDetails: [],
  };

  return (
    <div className="container-fluid p-0">
      {/* Upper Panel */}
      <div className=" text-light py-2 px-3 d-flex align-items-center justify-content-between btn-pannel">
        <button className="btn back-b" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="d-flex gap-2">
          <button className="btn btn-a">ADD</button>
          <button className="btn btn-a">EMISSION TEST</button>
          <button className="btn btn-a">REVENUE LICENCE</button>
          <button className="btn btn-a">FUEL USAGE</button>
          <button className="btn btn-a">MONTHLY DISTANCE</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-3">
        <div className="header">
          <div className="icon">🚴‍♂️</div>
          <h2 className="title">{vehicleNumber}</h2>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="table table-striped table-hover">
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
                  <td colSpan="6" className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
