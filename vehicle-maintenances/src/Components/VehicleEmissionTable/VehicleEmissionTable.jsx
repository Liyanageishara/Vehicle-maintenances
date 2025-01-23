import React, { useEffect, useState } from "react";
import "./VehicleEmissionTable.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VehicleEmissionTable = () => {
  const navigate = useNavigate();
  const [vehicleEmissionData, setVehicleEmissionData] = useState([]);

  // Fetch vehicle emission data from the backend
  const fetchVehicleEmissionData = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/emission/all");
      setVehicleEmissionData(response.data); // Set fetched data to state
    } catch (error) {
      console.error("Error fetching vehicle emission data:", error);
    }
  };

  // Delete a record by ID
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8090/api/emission/delete/${id}`);
      if (response.status === 200) {
        alert("Record deleted successfully!");
        fetchVehicleEmissionData(); // Refresh data after deletion
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Failed to delete the record.");
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchVehicleEmissionData();
  }, []);

  const handleAdd = () => {
    navigate("/EmissionTestForm"); // Adjust navigation route as needed
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">VEHICLE EMISSION TEST CERTIFICATE</h2>

      {/* Add Button */}
      <button className="btn btn-add" onClick={handleAdd}>
        ADD
      </button>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle No</th>
              <th>Certificate No</th>
              <th>Date</th>
              <th>Status</th>
              <th>Test Fee</th>
              <th>Valid Till</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicleEmissionData.length > 0 ? (
              vehicleEmissionData.map((emission, index) => (
                <tr key={index}>
                  <td>{emission.vehicleNo}</td>
                  <td>{emission.certificateNo}</td>
                  <td>{new Date(emission.addDate).toLocaleDateString()}</td>
                  <td>{emission.status}</td>
                  <td>{emission.testFee}</td>
                  <td>{new Date(emission.validTill).toLocaleDateString()}</td>
                  <td>{emission.description}</td>
                  <td>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(emission.emissionRowId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No data available</td>
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

export default VehicleEmissionTable;
