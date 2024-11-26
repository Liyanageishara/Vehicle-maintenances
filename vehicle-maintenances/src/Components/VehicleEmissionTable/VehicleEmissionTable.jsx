import React from "react";
import "./VehicleEmissionTable.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";

const VehicleEmissionTable = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">VEHICLE EMISSION TEST CERTIFICATE</h2>

      {/* Add Button */}
      <button className="btn btn-add">ADD</button>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle No</th>
              <th>Certificate No</th>
              <th>Date</th>
              <th>Pass/Fail</th>
              <th>Test Fee</th>
              <th>Valid Til</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Example empty rows */}
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Close Button */}
      <button className="btn btn-close">CLOSE</button>
    </div>
  );
};

export default VehicleEmissionTable;
