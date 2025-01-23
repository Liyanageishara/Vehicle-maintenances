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
      const response = await axios.get("http://localhost:8090/api/revenue_licence/all");
      setRevenueLicenceData(response.data); // Set data to state
    } catch (error) {
      console.error("Error fetching revenue licence data:", error);
    }
  };

  // Function to handle delete operation
  const handleDelete = async (revenueId) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`http://localhost:8090/api/revenue_licence/delete/${revenueId}`);
        alert("Record deleted successfully!");
        // Refetch data after deletion
        fetchRevenueLicenceData();
      } catch (error) {
        console.error("Error deleting record:", error);
        alert("Failed to delete record.");
      }
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
              <th>Actions</th> {/* Add Actions column */}
            </tr>
          </thead>
          <tbody>
            {revenueLicenceData.length > 0 ? (
              revenueLicenceData.map((item) => (
                <tr key={item.revenueId}>
                  <td>{item.vehicleNo}</td>
                  <td>{item.date}</td>
                  <td>{item.cost}</td>
                  <td>{item.validate}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item.revenueId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default RevenueLicenceTable;
