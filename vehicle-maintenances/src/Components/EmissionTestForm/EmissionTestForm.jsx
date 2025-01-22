// Updated EmissionTestForm.jsx
import React, { useState } from "react";
import "./EmissionTestForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmissionTestForm = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    vehicleNo: "",
    certificateNo: "",
    addDate: "",
    status: "",
    validTill: "",
    testFee: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8090/api/emission/save", [formData]);
      if (response.status === 200) {
        alert("Emission Test Certificate added successfully!");
        setFormData({
          vehicleNo: "",
          certificateNo: "",
          addDate: "",
          status: "",
          validTill: "",
          testFee: "",
          description: "",
        });
        navigate("/VehicleEmissionTable");
      }
    } catch (error) {
      console.error("Error saving emission test data:", error);
      alert("Failed to save emission test data. Please try again.");
    }
  };

  const handleView = () => {
    navigate("/VehicleEmissionTable");
  };

  return (
    <div className="container">
      <h2 className="title">ADD VEHICLE EMISSION TEST CERTIFICATE</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
            placeholder="Vehicle No"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="certificateNo"
            value={formData.certificateNo}
            onChange={handleChange}
            placeholder="Certificate No"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="addDate"
            value={formData.addDate}
            onChange={handleChange}
            placeholder="Date"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Pass/Fail"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="validTill"
            value={formData.validTill}
            onChange={handleChange}
            placeholder="Valid Till"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="testFee"
            value={formData.testFee}
            onChange={handleChange}
            placeholder="Test Fee"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-submit">
            SUBMIT
          </button>
          <button type="button" className="btn btn-view" onClick={handleView}>
            VIEW
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmissionTestForm;
