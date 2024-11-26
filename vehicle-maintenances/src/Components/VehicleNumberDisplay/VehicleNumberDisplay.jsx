import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VehicleNumberDisplay.css"; // Import the custom CSS
import { useNavigate } from "react-router-dom";

const VehicleNumberDisplay = () => {
  const navigate = useNavigate();

  // Example Data
  const vehicleType = "car"; // Replace with dynamic data if needed
  const vehicleNumbers = [
    { number: "ABC - 0012", details: [{ date: "2024-11-25", type: "Service", description: "Oil Change", cost: "$50", place: "Garage A", millage: "12,000 km" }] },
    { number: "DEF - 1234", details: [{ date: "2024-11-22", type: "Repair", description: "Brake Pads", cost: "$100", place: "Garage B", millage: "20,000 km" }] },
    { number: "GHI - 5678", details: [] },
    { number: "JKL - 9101", details: [{ date: "2024-11-10", type: "Inspection", description: "Routine Check", cost: "$30", place: "Garage C", millage: "15,000 km" }] },
    { number: "MNO - 1213", details: [] },
  ];

  // Icons for vehicle types
  const vehicleIcons = {
    bike: "🚴‍♂️",
    car: "🚗",
    truck: "🚚",
  };

  const vehicleIcon = vehicleIcons[vehicleType] || "🚗";

  return (
    <div className="container">
      {/* Icon and Title */}
      <div className="icon">{vehicleIcon}</div>
      <h2 className="title">VEHICLE NUMBER</h2>

      {/* Vehicle Numbers */}
      <div className="list-group">
        {vehicleNumbers.map((vehicle, index) => (
          <button
            key={index}
            className="list-group-item"
            onClick={() =>
              navigate("/VehicleDetails", {
                state: { vehicleNumber: vehicle.number, vehicleDetails: vehicle.details },
              })
            }
          >
            {vehicle.number}
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
