import React, { useEffect, useState } from "react";
import "./RevenueLicenceTable.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests

const RevenueLicenceTable = () => {
  const navigate = useNavigate();

  // State to store fetched revenue licence data
  const [revenueLicenceData, setRevenueLicenceData] = useState([]);

  // Function to fetch revenue licence data from the backend
  const fetchRevenueLicenceData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/revenue_licence/all");
      setRevenueLicenceData(response.data); // Set data to state
    } catch (error) {
      console.error("Error fetching revenue licence data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchRevenueLicenceData();
  }, []);

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">VEHICLE REVENUE LICENCE</h2>

      {/* Add Button */}
      <button
        className="btn btn-add"
        onClick={() => navigate("/VehicleRevenueLicence")}
      >
        ADD
      </button>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle No</th>
              <th>Date</th>
              <th>Cost</th>
              <th>Validate</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {revenueLicenceData.length > 0 ? (
              revenueLicenceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.vehicleNo}</td>
                  <td>{item.date}</td>
                  <td>{item.cost}</td>
                  <td>{item.validate}</td>
                  <td>{item.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Close Button */}
      <button className="btn btn-close" onClick={() => navigate(-1)}>
        CLOSE
      </button>
    </div>
  );
};

export default RevenueLicenceTable;
