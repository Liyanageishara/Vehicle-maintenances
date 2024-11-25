import React from 'react';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashbord = () => {
    return (
      <div className="dashbord-container">
        <h2 className="text-center text-white">VEHICLE TYPES</h2>
        <br></br>

        <div className="row text-center">
          <div className="col-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-motorcycle fa-3x icon"></i>
              <p className="text-white mb-0">Bikes</p>
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-taxi fa-3x icon"></i>
              <p className="text-white mb-0">Tuk Tuks</p>
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-car fa-3x icon"></i>
              <p className="text-white mb-0">Cars</p>
            </button>
          </div>
          
          <div className="col-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-shuttle-van fa-3x icon"></i>
              <p className="text-white mb-0">Vans</p>
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-taxi fa-3x icon"></i>
              <p className="text-white mb-0">Cabs</p>
            </button>
          </div>
          <div className="col-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-truck fa-3x icon"></i>
              <p className="text-white mb-0">Lorries</p>
            </button>
          </div>
          <div className="col-4 offset-4 mb-3">
            <button className="btn btn-outline-light icon-btn">
              <i className="fas fa-car-side fa-3x icon"></i>
              <p className="text-white mb-0">Others</p>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Dashbord;
