import React from "react";
import "./AddVehicleForm.css"; // Import the custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AddVehicleForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">ADD VEHICLES</h2>
      <form className="form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Vehicle No" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Vehicle Type" />
        </div>
        <div className="form-group">
          <input type="date" className="form-control" placeholder="Date" />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Total Distance Covered"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Service Distance"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-submit">SUBMIT</button>
          <button type="button" className="btn btn-view">VIEW</button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicleForm;
