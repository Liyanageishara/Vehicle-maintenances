import React from "react";
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
    <div
      className="dashboard_container text-center mt-5"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/Asserts/Login/img-01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        borderRadius: "16px",
        color: "white",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "3rem",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#fff",
          letterSpacing: "1.5px",
          marginBottom: "15px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
        }}
      >
        RANGIRI VEHICLE MANAGEMENT SYSTEM
      </h2>

      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center"
        style={{ marginTop: "10px" }}
      >
        {[
          { type: "bike", icon: "fas fa-motorcycle", label: "Bikes" },
          { type: "tuk_tuk", icon: "fas fa-taxi", label: "Tuk Tuks" },
          { type: "car", icon: "fas fa-car", label: "Cars" },
          { type: "van", icon: "fas fa-shuttle-van", label: "Vans" },
          { type: "cab", icon: "fas fa-taxi", label: "Cabs" },
          { type: "lorry", icon: "fas fa-truck", label: "Lorries" },
          { type: "other", icon: "fas fa-car-side", label: "Others" },
        ].map(({ type, icon, label }) => (
          <div className="col" key={type}>
            <button
              className="btn w-100 p-3"
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                border: "1px solid #ddd",
                borderRadius: "12px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => handleVehicleTypeClick(type)}
            >
              <i className={`${icon}`} style={{ fontSize: "2.5rem", color: "#ffcc00" }}></i>
              <p style={{ margin: 0, fontSize: "1rem", fontWeight: "600", textTransform: "capitalize" }}>{label}</p>
            </button>
          </div>
        ))}
      </div>

      <div className="row mt-2">
  {[
    { label: "ADD VEHICLE", onClick: handleAddVehicle, className: "btn-primary" },
    { label: "EMISSION TEST", onClick: handleEmissionTest, className: "btn-success" },
    { label: "REVENUE LICENCE", onClick: handleRevenueLicence, className: "btn-warning" },
    { label: "FUEL USAGE", onClick: handleFuelUsage, className: "btn-danger" },
    { label: "MONTHLY DISTANCE", onClick: handleDistance, className: "btn-info" },
    { label: "COMPANY ROUTING MAP", onClick: handleCompanyRoutingMap, className: "btn-primary" },
    { label: "DAILY ROUTING", onClick: handleDailyDistance, className: "btn-success" },
    {
      label: "VEHICLE IMAGE",
      onClick: () =>
        window.open(
          "https://drive.google.com/drive/folders/1o3ILrxhz4MoW7x3g5OG8c5TwrAQ2sFvc?usp=drive_link",
          "_blank"
        ),
      className: "btn-info",
    },
    { label: "REGISTER USER", onClick: RegisterMap, className: "btn-info" },
    { label: "SEARCH ROUTING DETAILS", onClick: handleDailyRoutingDetails, className: "btn-danger" },
    { label: "LOGOUT", onClick: handleLogout, className: "btn-secondary" },
  ].map(({ label, onClick, className }, index) => (
    <div className="col-12 col-md-6" key={index}>
      <button
        className={`btn ${className} m-2 w-100`}
        onClick={onClick}
        style={{ padding: "14px 24px", borderRadius: "10px" }}
      >
        {label}
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default Dashboard;