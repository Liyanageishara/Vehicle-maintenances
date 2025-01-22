import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VehicleNumberDisplay.css"; // Import the custom CSS
import { useLocation, useNavigate } from "react-router-dom";

const VehicleNumberDisplay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleType } = location.state; // Retrieve vehicle type from Dashboard

  const [vehicleNumbers, setVehicleNumbers] = useState([]);
  const [loading, setLoading] = useState(true);

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
          console.error("Failed to fetch vehicle numbers");
        }
      } catch (error) {
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

  return (
    <div className="container">
      {/* Icon and Title */}
      <div className="icon">{vehicleType === "car" ? "🚗" : "🚚"}</div>
      <h2 className="title">VEHICLE NUMBER</h2>

      {/* Vehicle Numbers */}
      <div className="list-group">
        {vehicleNumbers.map((vehicleNumber, index) => (
          <button
            key={index}
            className="list-group-item"
            onClick={() =>
              navigate("/VehicleDetails", {
                state: { vehicleNumber },
              })
            }
          >
            {vehicleNumber}
          </button>
        ))}
      </div>

      {/* Back Button */}
      <button className="btn-back mt-4" onClick={() => navigate(-1)}>
        BACK
      </button>
    </div>
  );
};

export default VehicleNumberDisplay;
