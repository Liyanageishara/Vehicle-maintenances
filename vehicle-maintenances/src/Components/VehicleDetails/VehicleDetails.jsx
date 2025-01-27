import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./VehicleDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

const VehicleDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vehicleNumber } = location.state || {
    vehicleNumber: "Unknown",
  };

  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(
          `https://javapaas-191377-0.cloudclusters.net/api/add-vehicle/details/${vehicleNumber}`
        );
        if (response.ok) {
          const data = await response.json();
          setVehicleDetails(data);
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
    navigate("/AddVehicleDetail", { state: { vehicleNumber } });
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Vehicle Report: ${vehicleNumber}`, 14, 10);

    const tableData = vehicleDetails.map((detail) => [
      detail.date,
      detail.type,
      detail.description,
      detail.cost,
      detail.place,
      detail.millage,
    ]);

    doc.autoTable({
      head: [["Date", "Type", "Description", "Cost", "Place", "Millage"]],
      body: tableData,
    });

    doc.save(`${vehicleNumber}_report.pdf`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-fluid p-2 p-sm-3">
      {/* Upper Panel */}
      <div className="btn-panel d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
          <button className="btn small-btn back-btn mb-2 mb-sm-0" onClick={() => navigate(-1)}>
      <i className="fas fa-arrow-left"></i> Back
    </button>

        <div className="d-flex flex-column flex-sm-row gap-2">
          <button
            className="btn small-btn add-btn"
            onClick={handleAddVehicleDetails}
          >
            <i className="fas fa-plus-circle"></i> Add Details
          </button>
          <button
            className="btn small-btn download-btn"
            onClick={handleDownloadPDF}
          >
            <i className="fas fa-download"></i> Download
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="details-container mt-3">
        <div className="header text-center">
          <h2 className="title">{vehicleNumber}</h2>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th><i className="fas fa-calendar-alt"></i> Date</th>
                <th><i className="fas fa-list"></i> Type</th>
                <th><i className="fas fa-align-left"></i> Description</th>
                <th><i className="fas fa-solid fa-rupee-sign"></i> Cost</th>
                <th><i className="fas fa-map-marker-alt"></i> Place</th>
                <th><i className="fas fa-tachometer-alt"></i> Millage</th>
              </tr>
            </thead>
            <tbody>
              {vehicleDetails.length > 0 ? (
                vehicleDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.date}</td>
                    <td>{detail.type}</td>
                    <td className="text-wrap">{detail.description}</td>
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
