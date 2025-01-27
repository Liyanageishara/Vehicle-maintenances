import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FuelUsageTable.css";
import { useNavigate } from "react-router-dom";

const FuelUsageTable = () => {
  const [fuelUsageData, setFuelUsageData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    const fetchFuelUsageData = async () => {
      try {
        const response = await axios.get("https://javapaas-191377-0.cloudclusters.net/api/fuel-usage/all"); // Replace with your backend URL
        setFuelUsageData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching fuel usage data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };

    fetchFuelUsageData();
  }, []);

  // Handle delete functionality
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8090/api/fuel-usage/delete/${id}`);
      if (response.status === 200) {
        alert("Record deleted successfully!");
        // Refresh data after deletion
        setFuelUsageData(fuelUsageData.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Failed to delete the record.");
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">Fuel Usage</h2>

      {/* Add Button */}
      <button className="btn btn-add" onClick={() => navigate("/FuelUsage")}>
        ADD
      </button>

      {/* Table */}
      <div className="table-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : fuelUsageData.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Vehicle Number</th>
                <th>Costs</th>
                <th>Fuel Liters</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fuelUsageData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.vehicleNumber}</td>
                  <td>{item.cost}</td>
                  <td>{item.fuelLiters}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>

    
    </div>
  );
};

export default FuelUsageTable;
