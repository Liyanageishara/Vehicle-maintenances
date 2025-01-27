import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddMonthlydistance.css';

function AddMonthlydistance() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [distance, setDistance] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const monthlyDistanceData = {
      vehicleNumber,
      distance: parseFloat(distance),
      date,
      description,
    };

    try {
      const response = await fetch('https://javapaas-191377-0.cloudclusters.net/api/monthly-distance/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(monthlyDistanceData),
      });

      if (response.ok) {
        console.log("Data saved successfully");
        alert("Monthly distance data added successfully!");

        // Reset form fields to empty
        setDate('');
        setVehicleNumber('');
        setDistance('');
        setDescription('');

        // Navigate to the same page to stay on the form
        navigate("/AddMonthlydistance");
      } else {
        console.error("Failed to save data");
        alert("Failed to save data. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the data.");
    }
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <div className="container">
        <h2 className="text-center mb-4">Add Monthly Distance</h2>

        {/* Date Field */}
        <div className="form-group mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </div>

        {/* Vehicle Number Field */}
        <div className="form-group mb-3">
          <label htmlFor="vehicleNumber" className="form-label">Vehicle Number</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="Enter vehicle number"
            className="form-control"
          />
        </div>

        {/* Distance Field */}
        <div className="form-group mb-3">
          <label htmlFor="distance" className="form-label">Distance (in km)</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance"
            className="form-control"
          />
        </div>

        {/* Description Field */}
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="form-control"
            rows="3"
          ></textarea>
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
