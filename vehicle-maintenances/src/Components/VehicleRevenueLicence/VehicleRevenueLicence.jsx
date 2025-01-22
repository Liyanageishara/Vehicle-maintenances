import React, { useState } from "react";
import "./VehicleRevenueLicence.css"; // Import custom CSS
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const VehicleRevenueLicence = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get vehicle number passed through state (if available)
  const { vehicleNumber } = location.state || { vehicleNumber: "" };

  // State for form fields
  const [form, setForm] = useState({
    vehicleNo: vehicleNumber || "",
    date: "",
    cost: "",
    validate: "",
    description: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    try {
      // Send POST request to backend API
      const response = await axios.post(
        "http://localhost:8090/api/revenue_licence/save",
        [form], // Send form data as an array (as per your backend service)
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response
      if (response.data.status === "200") {
        window.alert("Revenue licence saved successfully.");
        // Reset the form fields
        setForm({
          vehicleNo: "",
          date: "",
          cost: "",
          validate: "",
          description: "",
        });
      } else {
        setResponseMessage(response.data.message || "Error saving data.");
      }
    } catch (error) {
      // Handle error
      setResponseMessage("Error saving revenue licence: " + error.message);
    }
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
          name="vehicleNo"
          placeholder="Vehicle No"
          value={form.vehicleNo} // Pre-filled from state
          onChange={handleFormChange}
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
        <button className="btn btn-view" onClick={() => navigate("/RevenueLicenceTable")}>
          VIEW
        </button>
      </div>
    </div>
  );
};

export default VehicleRevenueLicence;
