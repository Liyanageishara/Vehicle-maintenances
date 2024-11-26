import React from "react";
import "./RevenueLicenceTable.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";

const RevenueLicenceTable = () => {
  const navigate = useNavigate();

  // Example data for the table (replace with dynamic data from API or state)
  const revenueLicenceData = [
    {
      vehicleNumber: "ABC - 0012",
      date: "2024-11-25",
      cost: "$50",
      validate: "2025-11-25",
      description: "Annual Licence Renewal",
    },
    {
      vehicleNumber: "DEF - 1234",
      date: "2024-10-15",
      cost: "$60",
      validate: "2025-10-15",
      description: "Licence Update",
    },
  ];

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">VEHICLE REVENUE LICENCE</h2>

      {/* Add Button */}
      <button
        className="btn btn-add"
        onClick={() => navigate("/VehicleRevenueLicence")}
      >
        ADD
      </button>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle No</th>
              <th>Date</th>
              <th>Cost</th>
              <th>Validate</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {revenueLicenceData.length > 0 ? (
              revenueLicenceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.vehicleNumber}</td>
                  <td>{item.date}</td>
                  <td>{item.cost}</td>
                  <td>{item.validate}</td>
                  <td>{item.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Close Button */}
      <button className="btn btn-close" onClick={() => navigate(-1)}>
        CLOSE
      </button>
    </div>
  );
};

export default RevenueLicenceTable;
