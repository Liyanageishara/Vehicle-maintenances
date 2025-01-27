// AddVehicleForm.jsx
import React, { useState } from "react";
import "./AddVehicleForm.css"; // Import the custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AddVehicleForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    vehicleNo: "",
    vehicleType: "",
    date: "",
    totalDistanceCovered: "",
    serviceDistance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8090/vehicle-info/saveVehicle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Vehicle added successfully!");
        setFormData({
          vehicleNo: "",
          vehicleType: "",
          date: "",
          totalDistanceCovered: "",
          serviceDistance: "",
        });
      } else {
        alert("Failed to add vehicle. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleView = () => {
    navigate("/dashboard"); // Adjust this route based on your frontend setup
  };

  return (
    <div className="container">
      <h2 className="title">ADD VEHICLES</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="vehicleNo"
            placeholder="Vehicle No"
            value={formData.vehicleNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="bike">Bike</option>
            <option value="tuk_tuk">Tuk Tuk</option>
            <option value="car">Car</option>
            <option value="van">Van</option>
            <option value="cab">Cab</option>
            <option value="lorry">Lorry</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="totalDistanceCovered"
            placeholder="Total Distance Covered"
            value={formData.totalDistanceCovered}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="serviceDistance"
            placeholder="Service Distance"
            value={formData.serviceDistance}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-submit">
            SUBMIT
          </button>
          <button type="button" className="btn btn-view" onClick={handleView}>
            BACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicleForm;
