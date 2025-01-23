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
    <div className="dashboard-container container text-center mt-5">
      <h2 className="dashboard-title mb-4">VEHICLE TYPES</h2>
      <div className="row g-3 justify-content-center">
        {[
          { type: "bike", icon: "fas fa-motorcycle", label: "Bikes" },
          { type: "tuk_tuk", icon: "fas fa-taxi", label: "Tuk Tuks" },
          { type: "car", icon: "fas fa-car", label: "Cars" },
          { type: "van", icon: "fas fa-shuttle-van", label: "Vans" },
          { type: "cab", icon: "fas fa-taxi", label: "Cabs" },
          { type: "lorry", icon: "fas fa-truck", label: "Lorries" },
          { type: "other", icon: "fas fa-car-side", label: "Others" },
        ].map(({ type, icon, label }) => (
          <div className="col-6 col-md-4 col-lg-3" key={type}>
            <button
              className="btn vehicle-button w-100 p-3"
              onClick={() => handleVehicleTypeClick(type)}
            >
              <i className={`${icon} vehicle-icon mb-2`}></i>
              <p>{label}</p>
            </button>
          </div>
        ))}
      </div>

      <div className="action-buttons-container row mt-5">
        <div className="col-12">
          <button
            className="btn action-button btn-primary"
            onClick={handleAddVehicle}
          >
            ADD VEHICLE
          </button>
          <button
            className="btn action-button btn-success"
            onClick={handleEmissionTest}
          >
            EMISSION TEST
          </button>
          <button
            className="btn action-button btn-warning"
            onClick={handleRevenueLicence}
          >
            REVENUE LICENCE
          </button>
          <button
            className="btn action-button btn-danger"
            onClick={handleFuelUsage}
          >
            FUEL USAGE
          </button>
          <button
            className="btn action-button btn-info"
            onClick={handleDistance}
          >
            MONTHLY DISTANCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
