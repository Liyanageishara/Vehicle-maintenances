import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './AddMonthlydistance.css'

function AddMonthlydistance() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [distance, setDistance] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming vehicle number is passed from the previous page or comes from a global state/context
    const storedVehicleNumber = "ABC123"; // Example vehicle number, replace with dynamic value
    setVehicleNumber(storedVehicleNumber);
  }, []);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Vehicle Number:", vehicleNumber);
    console.log("Distance:", distance);
    navigate("/some-other-page"); // Redirect after submit
  };

  const handleBack = () => {
    navigate("/previous-page"); // Navigate back to the previous page
  };

  return (
    <div className="container mt-5">
      <div className="container">
        <h2 className="text-center mb-4">Add Monthly Distance</h2>

        {/* Vehicle Number */}
        <div className="form-group mb-3">
          <label htmlFor="vehicleNumber" className="form-label">Vehicle Number</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            readOnly
            className="form-control bg-light"
          />
        </div>

        {/* Distance Input */}
        <div className="form-group mb-3">
          <label htmlFor="distance" className="form-label">Distance (in km)</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={handleDistanceChange}
            placeholder="Enter distance"
            className="form-control"
          />
        </div>

        {/* Submit and Back Buttons */}
        <div className="d-flex flex-column align-items-center mt-4">
          <button className="btn-custom-submit mb-3" onClick={handleSubmit}>Submit</button>
          <button className="btn-custom-back" onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default AddMonthlydistance;
