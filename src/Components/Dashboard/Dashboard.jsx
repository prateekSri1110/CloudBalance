import Navbar from "./navbar";
import Sidebar from "./DashboardWrapper/Pages/sidebar";
import Content from "./DashboardWrapper/Pages/Content";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const slide = useSelector((state) => state.slide);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar slide={slide} />

      {/* Main Content */}
      <main className={`pt-20 transition-all duration-300 bg-gray-50 min-h-screen ${slide ? "ml-[280px]" : "ml-[100px]"}`}>
        <Content />
      </main>
    </div>
  );
};

export default Dashboard;
