import React, { useState } from "react";
import axios from "axios";
import "./MonthlyDistancePage.css";

const MonthlyDistancePage = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDistance, setTotalDistance] = useState(null);
  const [error, setError] = useState(null);

  const fetchTotalDistance = async () => {
    try {
      // Ensure dates are formatted as yyyy-MM-dd
      const formattedStartDate = new Date(startDate).toISOString().split("T")[0];
      const formattedEndDate = new Date(endDate).toISOString().split("T")[0];

      const response = await axios.get("http://localhost:8090/api/monthly-distance", {
        params: {
          vehicleNumber,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        },
      });

      setTotalDistance(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching total distance:", error);
      setError("Failed to fetch total distance. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Monthly Distance</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-control"
        />
      </div>

      <button onClick={fetchTotalDistance} className="btn btn-primary">
        Get Total Distance
      </button>

      {totalDistance !== null && (
        <div className="result">
          <h4>Total Distance: {totalDistance} km</h4>
        </div>
      )}

      {error && <div className="error text-danger">{error}</div>}
    </div>
  );
};

export default MonthlyDistancePage;
