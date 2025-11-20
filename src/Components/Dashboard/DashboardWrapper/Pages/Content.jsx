import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Content = () => {
  return (
    <>
      <div className="w-full flex flex-col relative">
        <div className="w-full h-[955px] p-2 bg-[#e2e7e7ff]">
          <Outlet />
        </div>
        <div className="flex-1">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content;
Users
