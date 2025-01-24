import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ManageCities.css";

const ManageCities = () => {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState({ fromCity: "", toCity: "", distance: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/city");
      console.log("Fetched Cities:", response.data); // Debug log
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleAddCity = async () => {
    console.log("Adding city with data:", newCity); // Debug log
    try {
      await axios.post("http://localhost:8090/api/city/add", newCity);
      fetchCities();
      setNewCity({ fromCity: "", toCity: "", distance: "" });
    } catch (error) {
      console.error("Error adding city:", error);
    }
  };

  const handleDeleteCity = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/api/city/${id}`);
      fetchCities();
    } catch (error) {
      console.error("Error deleting city:", error);
    }
  };



  return (
    <div className="manage-cities-container">
      <h2 className="manage-cities-title">Manage Cities</h2>
      <div className="manage-cities-form">
        <input
          type="text"
          placeholder="From City"
          value={newCity.fromCity}
          onChange={(e) => setNewCity({ ...newCity, fromCity: e.target.value })}
        />
        <input
          type="text"
          placeholder="To City"
          value={newCity.toCity}
          onChange={(e) => setNewCity({ ...newCity, toCity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Distance (km)"
          value={newCity.distance}
          onChange={(e) =>
            setNewCity({ ...newCity, distance: parseInt(e.target.value) })
          }
        />
        <button onClick={handleAddCity}>Add Routing</button>
      </div>
      <table className="manage-cities-table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Distance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.fromCity}</td>
              <td>{city.toCity}</td>
              <td>{city.distance} km</td>
              <td>
                <button onClick={() => handleDeleteCity(city.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default ManageCities;
