import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './main.scss';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/Forget_Password/ForgetPassword';
import OTPComponent from './Components/OTP/OTP';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Dashboard from './Components/Dashboard_user/Dashboard';

import VehicleNumberDisplay from './Components/VehicleNumberDisplay/VehicleNumberDisplay';
import EmissionTestForm from './Components/EmissionTestForm/EmissionTestForm';
import AddVehicleForm from './Components/AddVehicleForm/AddVehicleForm';
import VehicleEmissionTable from './Components/VehicleEmissionTable/VehicleEmissionTable';
import VehicleDetails from './Components/VehicleDetails/VehicleDetails';
import AddVehicleDetail from './Components/AddVehicleDetail/AddVehicleDetail';
import FuelUsage from './Components/FuelUsage/FuelUsage';
import FuelUsageTable from './Components/FuelUsageTable/FuelUsageTable';
import VehicleRevenueLicence from './Components/VehicleRevenueLicence/VehicleRevenueLicence';
import RevenueLicenceTable from './Components/RevenueLicenceTable/RevenueLicenceTable'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp" element={<OTPComponent />} /> {/* OTP route */}
          <Route path="/change-password" element={<ChangePassword />} /> {/* Change Password route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Change Password route */}
          <Route path="/FuelUsage" element={<FuelUsage />} />
          <Route path="/FuelUsageTable" element={<FuelUsageTable />} />
          <Route path="/VehicleRevenueLicence" element={<VehicleRevenueLicence />} />
          <Route path="/VehicleNumberDisplay" element={<VehicleNumberDisplay />} /> {/* Change Password route */}
          <Route path="/EmissionTestForm" element={<EmissionTestForm />} /> {/* Change Password route */}
          <Route path="/addVehicleForm" element={<AddVehicleForm />} />
          <Route path="/VehicleEmissionTable" element={<VehicleEmissionTable />} />
          <Route path="/VehicleDetails" element={<VehicleDetails />} />
          <Route path="/AddVehicleDetail" element={<AddVehicleDetail />} />
          <Route path="/RevenueLicenceTable" element={<RevenueLicenceTable />} />




        </Routes>
      </div>
    </Router>
  );
}

export default App;