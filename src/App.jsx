import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PartnerManagement from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/PartnerManagement.jsx";
import Tags from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/Tags.jsx";
import User from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/User/User.jsx";
import AddUser from "./Components/Dashboard/DashboardWrapper/Pages/SidebarContent/User/AddUser.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="partner" element={<PartnerManagement />} />
          <Route path="tags" element={<Tags />} />
          <Route path="users" element={<User />}></Route>
          <Route path="users/addUser" element={<AddUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
