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
      className="container text-center mt-5"
      style={{
        backgroundImage: "url('/src/Asserts/Login/img-01.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        borderRadius: "16px",
        color: "#333",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "2rem",
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

      <div className="row mt-4">
        <div className="col-12">
          <button
            className="btn btn-primary m-2 w-100"
            onClick={handleAddVehicle}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            ADD VEHICLE
          </button>
          <button
            className="btn btn-success m-2 w-100"
            onClick={handleEmissionTest}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            EMISSION TEST
          </button>
          <button
            className="btn btn-warning m-2 w-100"
            onClick={handleRevenueLicence}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            REVENUE LICENCE
          </button>
          <button
            className="btn btn-danger m-2 w-100"
            onClick={handleFuelUsage}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            FUEL USAGE
          </button>
          <button
            className="btn btn-info m-2 w-100"
            onClick={handleDistance}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            MONTHLY DISTANCE
          </button>
          <button
            className="btn btn-primary m-2 w-100"
            onClick={handleCompanyRoutingMap}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            COMPANY ROUTING MAP
          </button>
          <button
            className="btn btn-success m-2 w-100"
            onClick={handleDailyDistance}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            DAILY ROUTING
          </button>
          <button
            className="btn btn-info m-2 w-100"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1o3ILrxhz4MoW7x3g5OG8c5TwrAQ2sFvc?usp=drive_link",
                "_blank"
              )
            }
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            VEHICLE IMAGE
          </button>
          <button
            className="btn btn-info m-2 w-100"
            onClick={RegisterMap}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            REGISTER USER
          </button>
          <button
            className="btn btn-danger m-2 w-100"
            onClick={handleDailyRoutingDetails}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            SEARCH ROUTING DETAILS
          </button>
          <button
            className="btn btn-secondary m-2 w-100"
            onClick={handleLogout}
            style={{ padding: "14px 24px", borderRadius: "10px" }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;