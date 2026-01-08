import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AWSservice from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/AWSservice.jsx";
import Onboarding from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/Onboarding.jsx";
import User from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/User/User.jsx";
import AddUser from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/User/AddUser.jsx";
import { Protected } from "./Components/Protected.jsx";
import Error from "./Components/Dashboard/DashboardWrapper/Pages/Error.jsx";
import CostExplorer from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/CostExplorer/CostExplorer.jsx";
// import { AddUserstoDB } from "./Components/Data/addUserstoDB.jsx";
import { ToastContainer } from "react-toastify";
import IAMrole from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/IAMrole.jsx";
import CustomerManagedPolicies from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/CustomerManagedPolicies.jsx";
import AccountTable from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/AccountTable.jsx";
import CUReport from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/CUReport.jsx";

function App() {
  return (
    // <AddUserstoDB />
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

          <Route path="onboarding" element={<Onboarding />}>
            <Route index element={<AccountTable />} />
            <Route path="IAMRole" element={<IAMrole />} />
            <Route path="CMP" element={<CustomerManagedPolicies />} />
            <Route path="/dashboard/onboarding/CUR" element={<CUReport />} />
          </Route>

          <Route path="costexplorer" element={<CostExplorer />} />
          <Route path="awsservice" element={<AWSservice />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>


      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
