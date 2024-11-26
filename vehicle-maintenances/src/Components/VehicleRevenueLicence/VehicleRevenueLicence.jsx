import React, { useState } from "react";
import "./VehicleRevenueLicence.css"; // Import custom CSS
import { useNavigate, useLocation } from "react-router-dom";

const VehicleRevenueLicence = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get vehicle number passed through state (if available)
  const { vehicleNumber } = location.state || { vehicleNumber: "" };

  // State for form fields
  const [form, setForm] = useState({
    date: "",
    cost: "",
    validate: "",
    description: "",
  });

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const data = { vehicleNumber, ...form };
    console.log("Submitted Data:", data);
    // Replace with an API call or further processing
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">VEHICLE REVENUE LICENCE</h2>

      {/* Input Fields */}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="vehicleNumber"
          placeholder="Vehicle No"
          value={vehicleNumber} // Pre-filled from state
          readOnly
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="cost"
          placeholder="Cost"
          value={form.cost}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          name="validate"
          placeholder="Validate"
          value={form.validate}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleFormChange}
        />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="btn btn-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        <button className="btn btn-view" onClick={() => navigate("/ViewRevenueLicence")}>
          VIEW
        </button>
      </div>
    </div>
  );
};

export default VehicleRevenueLicence;
