import Navbar from "./navbar";
import Sidebar from "./DashboardWrapper/Pages/sidebar";
import Content from "./DashboardWrapper/Pages/Content";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const slide = useSelector((state) => state.slide);

  return (
    <div>
      <div className="fixed  top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="flex pt-20">
        <Sidebar slide={slide} />
        <div className="flex-1 bg-gray-50">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
