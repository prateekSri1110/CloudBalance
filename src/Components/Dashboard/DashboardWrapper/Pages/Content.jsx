import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col relative">
        <div className="w-full h-[955px] overflow-y-scroll p-2 bg-[#e2e7e7ff]">
          <Outlet />
        </div>
        <div className="sticky">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content;
