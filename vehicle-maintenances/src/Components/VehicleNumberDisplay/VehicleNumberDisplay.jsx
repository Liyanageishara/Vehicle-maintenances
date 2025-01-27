import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import "./VehicleNumberDisplay.css";

// Map vehicle types to their respective icons
const vehicleIcons = {
  bike: "fas fa-motorcycle",
  tuk_tuk: "fas fa-taxi",
  car: "fas fa-car",
  van: "fas fa-shuttle-van",
  cab: "fas fa-taxi",
  lorry: "fas fa-truck",
  other: "fas fa-car-side",
};

const VehicleNumberDisplay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleType } = location.state || { vehicleType: "Unknown" };

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
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-danger">
        <p>{error}</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="text-warning">
          <i
            className={`${vehicleIcons[vehicleType] || vehicleIcons["other"]} me-2`}
          ></i>
          Vehicle Numbers - {vehicleType.toUpperCase()}
        </h2>
      </div>

      {/* Vehicle Numbers List */}
      <div className="row justify-content-center">
  {vehicleNumbers.length > 0 ? (
    vehicleNumbers.map((vehicleNumber, index) => (
      <div className="col-12 mb-3" key={index}>
        <div className="card bg-dark text-white shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <i
                className={`${vehicleIcons[vehicleType] || vehicleIcons["other"]} vehicle-icon`}
              ></i>
              <h5>{vehicleNumber}</h5>
            </div>
            <button
              className="btn btn-warning btn-sm text-dark fw-bold"
              onClick={() =>
                navigate("/VehicleDetails", { state: { vehicleNumber } })
              }
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-muted">
      No vehicles found for {vehicleType}.
    </p>
  )}
</div>


      {/* Back Button */}
      <div className="text-center mt-5">
  <button
    className="btn back-button-modern"
    onClick={() => navigate(-1)}
  >
    <i className="fas fa-arrow-left me-2"></i> Back
  </button>
</div>


    </div>
  );
};

export default VehicleNumberDisplay;
