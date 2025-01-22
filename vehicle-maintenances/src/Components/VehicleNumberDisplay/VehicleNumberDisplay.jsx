import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VehicleNumberDisplay.css"; // Import the custom CSS
import { useLocation, useNavigate } from "react-router-dom";

const VehicleNumberDisplay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleType } = location.state || { vehicleType: "Unknown" }; // Safely retrieve vehicle type from Dashboard

  const [vehicleNumbers, setVehicleNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch vehicle numbers from the backend
    const fetchVehicleNumbers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8090/vehicle-info/getVehicleNumbersByType/${vehicleType}`
        );
        if (response.ok) {
          const data = await response.json();
          setVehicleNumbers(data);
        } else {
          setError("Failed to fetch vehicle numbers. Please try again.");
        }
      } catch (error) {
        setError("An error occurred while fetching vehicle numbers.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleNumbers();
  }, [vehicleType]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="text-danger">{error}</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Icon and Title */}
      <div className="icon">{vehicleType === "car" ? "🚗" : "🚚"}</div>
      <h2 className="title">Vehicle Numbers - {vehicleType.toUpperCase()}</h2>

      {/* Vehicle Numbers */}
      <div className="list-group">
        {vehicleNumbers.length > 0 ? (
          vehicleNumbers.map((vehicleNumber, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() =>
                navigate("/VehicleDetails", {
                  state: { vehicleNumber },
                })
              }
            >
              {vehicleNumber}
            </button>
          ))
        ) : (
          <p className="text-center text-muted">No vehicles found for {vehicleType}.</p>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-4 text-center">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default VehicleNumberDisplay;
