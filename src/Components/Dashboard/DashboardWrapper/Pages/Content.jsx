import Footer from "./footer";

const Content = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="w-full bg-[#e2e7e7ff]">
          <h2>my content area</h2>
          <h2>my content area</h2>
          <h2>my content area</h2>
          <h2>my content area</h2>
          <h2>my content area</h2>
        </div>
        {/* <div className="fixed bottom-0 left-0"> */}
        <Footer />
        {/* </div> */}
      </div>
    </>
  );
};

export default Content;
