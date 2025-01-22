import React from "react";
import "./Dashboard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleVehicleTypeClick = (vehicleType) => {
    navigate("/VehicleNumberDisplay", { state: { vehicleType } });
  };

  const handleAddVehicle = () => {
    navigate("/addVehicleForm");
  };

  const handleEmissionTest = () => {
    navigate("/VehicleEmissionTable");
  };

  const handleRevenueLicence = () => {
    navigate("/RevenueLicenceTable");
  };

  const handleFuelUsage = () => {
    navigate("/FuelUsageTable");
  };

  const handleDistance = () => {
    navigate("/AddMonthlydistance");
  };

  return (
    <div className="dashbord-container">
      <h2 className="text-center text-white">VEHICLE TYPES</h2>
      <br />

      <div className="row text-center">
        <div className="col-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("bike")}
          >
            <i className="fas fa-motorcycle fa-3x icon"></i>
            <p>Bikes</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("tuk_tuk")}
          >
            <i className="fas fa-taxi fa-3x icon"></i>
            <p>Tuk Tuks</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("car")}
          >
            <i className="fas fa-car fa-3x icon"></i>
            <p>Cars</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("van")}
          >
            <i className="fas fa-shuttle-van fa-3x icon"></i>
            <p>Vans</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("cab")}
          >
            <i className="fas fa-taxi fa-3x icon"></i>
            <p>Cabs</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("lorry")}
          >
            <i className="fas fa-truck fa-3x icon"></i>
            <p>Lorries</p>
          </button>
        </div>
        <div className="col-4 offset-4 mb-3">
          <button
            className="btn icon-btn"
            onClick={() => handleVehicleTypeClick("other")}
          >
            <i className="fas fa-car-side fa-3x icon"></i>
            <p>Others</p>
          </button>
        </div>
      </div>

      <div className="button-container text-center mt-4">
        <button className="btn btn-pink mx-2" onClick={handleAddVehicle}>
          ADD
        </button>
        <button className="btn btn-pink mx-2" onClick={handleEmissionTest}>
          EMISSION TEST
        </button>
        <button className="btn btn-pink mx-2" onClick={handleRevenueLicence}>
          REVENUE LICENCE
        </button>
        <button className="btn btn-pink mx-2" onClick={handleFuelUsage}>
          FUEL USAGE
        </button>
        <button className="btn btn-pink mx-2" onClick={handleDistance}>
          MONTHLY DISTANCE
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
