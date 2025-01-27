import React, { useState } from "react";
import axios from "axios";
import "./ViewRoutingDetailsPage.css";

const ViewRoutingDetailsPage = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [routingDetails, setRoutingDetails] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setVehicleNumber(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get(`https://javapaas-191377-0.cloudclusters.net/api/routing-details`, {
        params: { vehicleNumber },
      });

      if (response.data.length > 0) {
        setRoutingDetails(response.data);
      } else {
        setError("No routing details found for this vehicle number.");
      }
    } catch (error) {
      console.error("Error fetching routing details:", error);
      setError("Failed to fetch routing details. Please try again.");
    }
  };

  return (
    <div className="view-routing-container">
      <h2 className="view-routing-title">View Routing Details</h2>
      <form className="view-routing-form" onSubmit={handleSearch}>
        <label>Vehicle Number:</label>
        <input
          type="text"
          name="vehicleNumber"
          value={vehicleNumber}
          onChange={handleInputChange}
          placeholder="Enter vehicle number"
          required
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {routingDetails.length > 0 && (
        <div className="routing-details-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Vehicle Number</th>
                <th>Distance (km)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {routingDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.date}</td>
                  <td>{detail.vehicleNumber}</td>
                  <td>{detail.distance}</td>
                  <td>{detail.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewRoutingDetailsPage;
