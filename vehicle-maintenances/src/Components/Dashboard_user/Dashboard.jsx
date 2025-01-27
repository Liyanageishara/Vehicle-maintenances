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
    navigate("/monthly-distance");
  };

  const handleCompanyRoutingMap = () => {
    navigate("/ManagecitiesPage");
  };

  const handleDailyDistance = () => {
    navigate("/daily-distance");
  };

  const RegisterMap = () => {
    navigate("/register");
  };

  const handleDailyRoutingDetails = () => {
    navigate("/view-routing-details");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container container text-center mt-5">
      <h2 className="dashboard-title mb-4">RANGIRI VEHICLE MANAGEMENT SYSTEM</h2>
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
          <div className="col-6 col-sm-4 col-lg-3" key={type}>
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
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn action-button btn-primary" onClick={handleAddVehicle}>
              ADD VEHICLE
            </button>
            <button className="btn action-button btn-success" onClick={handleEmissionTest}>
              EMISSION TEST
            </button>
            <button className="btn action-button btn-warning" onClick={handleRevenueLicence}>
              REVENUE LICENCE
            </button>
            <button className="btn action-button btn-danger" onClick={handleFuelUsage}>
              FUEL USAGE
            </button>
            <button className="btn action-button btn-info" onClick={handleDistance}>
              MONTHLY DISTANCE
            </button>
            <button className="btn action-button btn-primary" onClick={handleCompanyRoutingMap}>
              COMPANY ROUTING MAP
            </button>
            <button className="btn action-button btn-success" onClick={handleDailyDistance}>
              DAILY ROUTING
            </button>
            <button
              className="btn action-button btn-info"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1o3ILrxhz4MoW7x3g5OG8c5TwrAQ2sFvc?usp=drive_link",
                  "_blank"
                )
              }
            >
              VEHICLE IMAGE
            </button>
            <button className="btn action-button btn-info" onClick={RegisterMap}>
              REGISTER USER
            </button>
            <button className="btn action-button btn-danger" onClick={handleDailyRoutingDetails}>
              SEARCH ROUTING DETAILS
            </button>
            <button className="btn action-button btn-secondary" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
