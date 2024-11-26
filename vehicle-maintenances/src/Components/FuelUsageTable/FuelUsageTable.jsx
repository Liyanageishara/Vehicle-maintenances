import React from "react";
import "./FuelUsageTable.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";

const FuelUsageTable = () => {
  const navigate = useNavigate();

  // Example data for the table (replace with dynamic data from API or state)
  const fuelUsageData = [
    {
      date: "2024-11-25",
      vehicleNumber: "ABC - 0012",
      cost: "$50",
      fuelLiters: "20",
      description: "Refueling at Station A",
    },
    {
      date: "2024-11-20",
      vehicleNumber: "DEF - 1234",
      cost: "$60",
      fuelLiters: "25",
      description: "Refueling at Station B",
    },
  ];

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="title">Fuel Usage</h2>

      {/* Add Button */}
      <button
        className="btn btn-add"
        onClick={() => navigate("/FuelUsage", { state: { vehicleNumber: "ABC - 0012" } })}
      >
        ADD
      </button>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle Number</th>
              <th>Costs</th>
              <th>Fuel Liters</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {fuelUsageData.length > 0 ? (
              fuelUsageData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.vehicleNumber}</td>
                  <td>{item.cost}</td>
                  <td>{item.fuelLiters}</td>
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

export default FuelUsageTable;
