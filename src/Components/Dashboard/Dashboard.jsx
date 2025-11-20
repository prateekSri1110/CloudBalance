// import Wrapper from "./DashboardWrapper/Wrapper";
import Navbar from "./navbar";
import Sidebar from "./DashboardWrapper/Pages/sidebar";
import { useState } from "react";
import Content from "./DashboardWrapper/Pages/Content";
// import { colors } from "./styles";
import Footer from "./DashboardWrapper/Pages/footer";

const Dashboard = () => {
  const [slide, setSlide] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar slide={slide} setSlide={setSlide} />
      </div>
      <div className="flex pt-20">
        <Sidebar slide={slide} />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Content />
        </div>
      </div>

    

    </div>
  );
};

export default Dashboard;
