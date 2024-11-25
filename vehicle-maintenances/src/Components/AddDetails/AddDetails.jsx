import React, { useState, useEffect, useCallback } from 'react';
import "./AddDetails.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Table } from 'react-bootstrap';

const AddDetails = () => {
  const initialFormData = {
    date: '',
    vehicleNumber: '',
    place: '',
    currentDistance: '',
    rows: [{ type: '', part: '', description: '', cost: 0 }],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const total = formData.rows.reduce((sum, row) => {
      const cost = parseFloat(row.cost);
      return sum + (isNaN(cost) ? 0 : cost);
    }, 0);
    setTotalCost(total);
  }, [formData.rows]);

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = "Please select a date.";
    if (!formData.place) errors.place = "Please enter the place.";

    formData.rows.forEach((row, index) => {
      if (!row.type) errors[`rowType${index}`] = "Please select a type.";
      if (!row.part) errors[`rowPart${index}`] = "Please select a part.";
      const cost = parseFloat(row.cost);
      if (isNaN(cost) || cost <= 0) errors[`rowCost${index}`] = "Please enter a valid cost.";
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("https://example.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      setSuccessMessage("Form submitted successfully!");
      setFormData(initialFormData);

    } catch (err) {
      setError("There was an issue submitting the form. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addRow = useCallback(() => {
    setFormData({ ...formData, rows: [...formData.rows, { type: '', part: '', description: '', cost: 0 }] });
  }, [formData]);

  const removeRow = useCallback((index) => {
    const rows = [...formData.rows];
    rows.splice(index, 1);
    setFormData({ ...formData, rows });
  }, [formData]);

  const handleRowChange = useCallback((index, e) => {
    const { name, value } = e.target;
    const rows = [...formData.rows];
    rows[index] = { ...rows[index], [name]: value };
    setFormData({ ...formData, rows });
  }, [formData]);

  return (
    <div className="add-details-form">
      
      <Form>
      <h3>Add Vehicle Details</h3>
        {/* Date Field */}
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            isInvalid={!!formErrors.date}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.date}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Other Fields */}
        <Form.Group controlId="vehicleNumber">
          <Form.Label>Vehicle Number</Form.Label>
          <Form.Control
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="place">
          <Form.Label>Place</Form.Label>
          <Form.Control
            type="text"
            name="place"
            value={formData.place}
            onChange={(e) => setFormData({ ...formData, place: e.target.value })}
            isInvalid={!!formErrors.place}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.place}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="currentDistance">
          <Form.Label>Current Distance</Form.Label>
          <Form.Control
            type="number"
            name="currentDistance"
            value={formData.currentDistance}
            onChange={(e) => setFormData({ ...formData, currentDistance: e.target.value })}
          />
        </Form.Group>

        {/* Dynamic Rows Table */}
        <Table bordered>
          <thead>
            <tr>
              <th>Type</th>
              <th>Part</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <Form.Control
                    as="select"
                    name="type"
                    value={row.type}
                    onChange={(e) => handleRowChange(index, e)}
                    isInvalid={!!formErrors[`rowType${index}`]}
                  >
                    <option value="">Select</option>
                    <option value="service">Service</option>
                    <option value="buy">Buy</option>
                    <option value="replace">Replace</option>
                    <option value="repairer">Repairer</option>
                    <option value="other">Repairer</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {formErrors[`rowType${index}`]}
                  </Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    as="select"
                    name="part"
                    value={row.part}
                    onChange={(e) => handleRowChange(index, e)}
                    isInvalid={!!formErrors[`rowPart${index}`]}
                  >
                    <option value="">Select</option>
                    <option value="weal">Weal</option>
                    <option value="body">Body</option>
                    <option value="engine">Engine</option>
                    <option value="other">Other</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {formErrors[`rowPart${index}`]}
                  </Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="description"
                    value={row.description}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="number"
                    name="cost"
                    value={row.cost}
                    onChange={(e) => handleRowChange(index, e)}
                    isInvalid={!!formErrors[`rowCost${index}`]}
                    step="0.01"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors[`rowCost${index}`]}
                  </Form.Control.Feedback>
                </td>
                <td>
                  <Button variant="danger" onClick={() => removeRow(index)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success" onClick={addRow}>Add Row</Button>

        {/* Total Cost */}
        <div className="total-cost-display">
          <h5>Total Cost: {totalCost}</h5>
        </div>

        {/* Feedback Messages */}
        {loading && <p>Submitting...</p>}
        {error && <p className="error-text">{error}</p>}
        {successMessage && <p className="success-text">{successMessage}</p>}

        {/* Submit Button */}
        <Button variant="primary" onClick={handleSubmit} disabled={loading}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddDetails;
