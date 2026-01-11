import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard/Dashboard";
import Protected from "./Protected";
import Unauthorized from "./Dashboard/DashboardWrapper/Pages/Unauthorized";
import Error from "./Dashboard/DashboardWrapper/Pages/Error";
import User from "./Dashboard/DashboardWrapper/Pages/SidebarContent/User/User";
import AddUser from "./Dashboard/DashboardWrapper/Pages/SidebarContent/User/AddUser";
import Onboarding from "./Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/Onboarding";
import AccountTable from "./Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/AccountTable";
import IAMRole from "./Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/IAMrole";
import CustomerManagedPolicies from "./Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/CustomerManagedPolicies";
import CUReport from "./Dashboard/DashboardWrapper/Pages/SidebarContent/Onboarding/CUReport";
import CostExplorer from "./Dashboard/DashboardWrapper/Pages/SidebarContent/CostExplorer/CostExplorer";
import AWSservice from "./Dashboard/DashboardWrapper/Pages/SidebarContent/AWSservice";


const AppRoutes = () => {
    return <>

        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Dashboard - base protected */}
            <Route
                path="/dashboard"
                element={
                    <Protected roles={["ADMIN", "READONLY", "CUSTOMER"]}>
                        <Dashboard />
                    </Protected>
                }
            >
                {/* USERS */}
                <Route path="users" element={<User />} />
                <Route
                    path="users/addUser"
                    element={
                        <Protected roles={["ADMIN"]}>
                            <AddUser />
                        </Protected>
                    }
                />

                {/* ONBOARDING */}
                <Route
                    path="onboarding"
                    element={
                        <Protected roles={["ADMIN", "READONLY"]}>
                            <Onboarding />
                        </Protected>
                    }
                >
                    <Route index element={<AccountTable />} />
                    <Route path="IAMRole" element={<Protected roles={["ADMIN"]}><IAMRole /> </Protected>} />
                    <Route path="CMP" element={<Protected roles={["ADMIN"]}><CustomerManagedPolicies /> </Protected>} />
                    <Route path="CUR" element={<Protected roles={["ADMIN"]}><CUReport /> </Protected>} />
                </Route>

                {/* COST EXPLORER */}
                <Route
                    path="costexplorer"
                    element={
                        <Protected roles={["ADMIN", "READONLY", "CUSTOMER"]}>
                            <CostExplorer />
                        </Protected>
                    }
                />

                {/* AWS SERVICE */}
                <Route
                    path="awsservice"
                    element={
                        <Protected roles={["ADMIN", "CUSTOMER", "READONLY"]}>
                            <AWSservice />
                        </Protected>
                    }
                />
            </Route>

            {/* out of route */}
            <Route path="*" element={<Error />} />
        </Routes>
    </>
}

export default AppRoutes;