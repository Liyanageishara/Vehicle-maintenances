import React, { useState } from "react";
import "./AddVehicleDetail.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Custom CSS for styling
import { useNavigate, useLocation } from "react-router-dom";

const AddVehicleDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get vehicle number passed through state
  const { vehicleNumber } = location.state || { vehicleNumber: "" };

  // State to handle form fields
  const [form, setForm] = useState({
    date: "",
    vehicleNumber: vehicleNumber, // Pre-fill vehicle number
    place: "",
    currentDistance: "",
  });

  // State to handle table rows
  const [rows, setRows] = useState([]);

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle table row additions
  const handleAddRow = () => {
    setRows([...rows, { type: "", description: "", parts: "", cost: "" }]);
  };

  // Handle table row changes
  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Handle form submission
  const handleSubmit = async () => {
    const data = { ...form, rows }; // Prepare the data for submission

    try {
      const response = await fetch("https://javapaas-191377-0.cloudclusters.net/api/add-vehicle/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure JSON data
        },
        body: JSON.stringify(data), // Convert the data to JSON
      });

      if (response.ok) {
        alert("Vehicle details saved successfully!");
        navigate("/VehicleDetails", { state: { vehicleNumber: form.vehicleNumber } });
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to save vehicle details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving vehicle details.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Add Vehicle Details</h2>

      {/* Input Fields */}
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
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={form.vehicleNumber} // Pre-filled from state
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="place"
          placeholder="Place"
          value={form.place}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="currentDistance"
          placeholder="Current Distance"
          value={form.currentDistance}
          onChange={handleFormChange}
        />
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Parts</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="table-input"
                    value={row.type}
                    onChange={(e) => handleRowChange(index, "type", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="table-input"
                    value={row.description}
                    onChange={(e) => handleRowChange(index, "description", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="table-input"
                    value={row.parts}
                    onChange={(e) => handleRowChange(index, "parts", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="table-input"
                    value={row.cost}
                    onChange={(e) => handleRowChange(index, "cost", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-add-row" onClick={handleAddRow}>
          Add Row
        </button>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="btn btn-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        <button className="btn btn-back" onClick={() => navigate(-1)}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default AddVehicleDetail;
