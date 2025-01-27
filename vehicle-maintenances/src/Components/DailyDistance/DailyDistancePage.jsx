import React, { useState } from "react";
import axios from "axios";
import "./DailyDistancePage.css";

const DailyDistancePage = () => {
  const [formData, setFormData] = useState({
    date: "",
    vehicleNumber: "",
    distance: "",
    description: "", // New description field
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://javapaas-191377-0.cloudclusters.net/api/daily-distance/add", {
        date: formData.date,
        vehicleNumber: formData.vehicleNumber,
        distance: parseInt(formData.distance),
        description: formData.description, // Send description to backend
      });

      alert("Daily Distance Saved Successfully!");
      setFormData({ date: "", vehicleNumber: "", distance: "", description: "" });
    } catch (error) {
      console.error("Error saving daily distance:", error);
      alert("Failed to save daily distance.");
    }
  };

  return (
    <div className="daily-distance-container">
      <h2 className="daily-distance-title">Add Daily Distance</h2>
      <form className="daily-distance-form" onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <label>Vehicle Number:</label>
        <input
          type="text"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleInputChange}
          placeholder="Enter vehicle number"
          required
        />

        <label>Distance (km):</label>
        <input
          type="number"
          name="distance"
          value={formData.distance}
          onChange={handleInputChange}
          placeholder="Enter distance"
          required
        />

        <label>Description:</label> {/* New description field */}
        <input
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter description for the route"
          required
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DailyDistancePage;
