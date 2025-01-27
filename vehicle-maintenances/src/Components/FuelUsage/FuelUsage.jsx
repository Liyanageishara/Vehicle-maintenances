import React, { useState } from "react";
import "./FuelUsage.css"; // Custom CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FuelUsage = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setForm] = useState({
    date: "",
    vehicleNumber: "",
    cost: "",
    fuelLiters: "",
    description: "",
  });

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://javapaas-191377-0.cloudclusters.net/api/fuel-usage/save", formData);
      if (response.status === 200) {
        alert("Fuel usage data added successfully!");
        setForm({
          date: "",
          vehicleNumber: "",
          cost: "",
          fuelLiters: "",
          description: "",
        });
        navigate("/FuelUsageTable");
      }
    } catch (error) {
      console.error("Error saving fuel usage data:", error);
      alert("Failed to save fuel usage data. Please try again.");
    }
  };

  const handleView = () => {
    navigate("/FuelUsageTable");
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">Fuel Usage</h2>

      {/* Input Fields */}
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="cost"
          placeholder="Cost"
          value={formData.cost}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="fuelLiters"
          placeholder="Fuel Liters"
          value={formData.fuelLiters}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleFormChange}
        />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="btn btn-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        <button className="btn btn-view" onClick={handleView}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default FuelUsage;
