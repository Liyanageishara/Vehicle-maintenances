import React from 'react';
import './FuelUsage.css';

const FuelUsage= () => {
  return (
    <div className="container-fluid fuel-usage-container">
      <div className="back-button">
        <button className="btn btn-outline-light">Back</button>
      </div>
      <div className="form-container">
        <h2 className="text-center text-white">Fuel Usage</h2>
        <form>
          <div className="mb-3">
            <input type="date" className="form-control" placeholder="Date" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Vehicle Number" />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" placeholder="Cost" />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" placeholder="Fuel Liters" />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              rows="3"
            ></textarea>
          </div>
          <div className="button-group d-flex justify-content-between">
            <button type="submit" className="btn btn-light btn-submit">
              Submit
            </button>
            <button type="button" className="btn btn-light btn-view">
              View
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FuelUsage;
