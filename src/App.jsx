import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AWSservice from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/AWSservice.jsx";
import Onboarding from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding.jsx";
import User from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/User/User.jsx";
import AddUser from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/User/AddUser.jsx";
import CostExplorer from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/CostExplorer.jsx";
import { Protected } from "./Components/Protected.jsx";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        >
          <Route path="users" element={<User />} />
          <Route path="users/addUser" element={<AddUser />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="costexplorer" element={<CostExplorer />} />
          <Route path="awsservice" element={<AWSservice />} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
