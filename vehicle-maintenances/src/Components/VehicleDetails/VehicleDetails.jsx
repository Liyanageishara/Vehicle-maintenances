import React, { useEffect, useState } from "react";
import "./VehicleDetails.css"; // Import custom CSS
import { useLocation, useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleNumber } = location.state || { vehicleNumber: "Unknown" };

  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8090/api/add-vehicle/details/${vehicleNumber}`
        );
        if (response.ok) {
          const data = await response.json();
          // Format the data for display
          const formattedDetails = data.map((item) => ({
            date: item.date,
            type: item.rows.map((row) => row.type).join(", "), // Combine types
            description: item.rows.map((row) => row.description).join(", "), // Combine descriptions
            cost: item.rows.map((row) => row.cost).join(", "), // Combine costs
            place: item.place,
            millage: item.currentDistance,
          }));
          setVehicleDetails(formattedDetails);
        } else {
          console.error("Failed to fetch vehicle details");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [vehicleNumber]);

  const handleAddVehicleDetails = () => {
    navigate("/AddVehicleDetail", { state: { vehicleNumber } }); // Pass vehicle number
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid p-0">
      {/* Upper Panel */}
      <div className="text-light py-2 px-3 d-flex align-items-center justify-content-between btn-pannel">
        <button className="btn back-b" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="btn-add-details"
          onClick={handleAddVehicleDetails}
        >
          Add Vehicle Details
        </button>
      </div>

      {/* Main Content */}
      <div className="container mt-3">
        <div className="header">
          <div className="icon">🚗</div>
          <h2 className="title">{vehicleNumber}</h2>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Place</th>
                <th>Millage</th>
              </tr>
            </thead>
            <tbody>
              {vehicleDetails.length > 0 ? (
                vehicleDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.date}</td>
                    <td>{detail.type}</td>
                    <td>{detail.description}</td>
                    <td>{detail.cost}</td>
                    <td>{detail.place}</td>
                    <td>{detail.millage}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
