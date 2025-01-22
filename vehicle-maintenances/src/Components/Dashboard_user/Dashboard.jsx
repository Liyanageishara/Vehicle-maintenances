import React from 'react';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleVehicleTypeClick = (vehicleType) => {
    navigate('/VehicleNumberDisplay', { state: { vehicleType } });
  };
  const handleAddVehicle = () => {
    navigate('/addVehicleForm'); // Navigate to AddVehicleDetail page
  };

  return (
    <div className="dashbord-container">
      <h2 className="text-center text-white">VEHICLE TYPES</h2>
      <br></br>

      <div className="row text-center">
        <div className="col-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('bike')}
          >
            <i className="fas fa-motorcycle fa-3x icon"></i>
            <p className="text-white mb-0">Bikes</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('tuk_tuk')}
          >
            <i className="fas fa-taxi fa-3x icon"></i>
            <p className="text-white mb-0">Tuk Tuks</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('car')}
          >
            <i className="fas fa-car fa-3x icon"></i>
            <p className="text-white mb-0">Cars</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('van')}
          >
            <i className="fas fa-shuttle-van fa-3x icon"></i>
            <p className="text-white mb-0">Vans</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('cab')}
          >
            <i className="fas fa-taxi fa-3x icon"></i>
            <p className="text-white mb-0">Cabs</p>
          </button>
        </div>
        <div className="col-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('lorry')}
          >
            <i className="fas fa-truck fa-3x icon"></i>
            <p className="text-white mb-0">Lorries</p>
          </button>
        </div>
        <div className="col-4 offset-4 mb-3">
          <button
            className="btn btn-outline-light icon-btn"
            onClick={() => handleVehicleTypeClick('other')}
          >
            <i className="fas fa-car-side fa-3x icon"></i>
            <p className="text-white mb-0">Others</p>
          </button>
        </div>
        <div>
        <button
          className="vehicle-add-button"
          onClick={handleAddVehicle} // Handle navigation on click
        >
          Add Vehicle
        </button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;