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
        const response = await axios.get("http://localhost:8090/api/fuel-usage/all"); // Replace with your backend URL
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

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">Fuel Usage</h2>

      {/* Add Button */}
      <button
        className="btn btn-add"
        onClick={() => navigate("/FuelUsage")}
      >
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
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>

      {/* Close Button */}
      <button className="btn btn-close" onClick={() => navigate(-1)}>
        CLOSE
      </button>
    </div>
  );
};

export default FuelUsageTable;
