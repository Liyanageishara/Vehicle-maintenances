import React from "react";
import "./EmissionTestForm.css"; // Import the custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const EmissionTestForm = () => {
    const navigate = useNavigate();


  return (
    <div className="container">
      <h2 className="title">ADD VEHICLE EMISSION TEST CERTIFICATE</h2>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Vehicle No"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Certificate No"
          />
        </div>
        <div className="form-group">
          <input type="date" className="form-control" placeholder="Date" />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Pass/Fail"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Valid Till"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Test Fee"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            rows="3"
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-submit">
            SUBMIT
          </button>
          <button type="button" className="btn btn-view">
            VIEW
          </button>
        </div>
      </form>
    </div>
  );

};

export default EmissionTestForm;
