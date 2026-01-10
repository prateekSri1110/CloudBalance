import error from "../../../../assets/error.gif";

export default function Error() {
  return (
    <>
      <div className="flex justify-center align-center vh-100">
        <div className="p-4 text-center">
          <img src={error} style={{ width: "50em" }} alt="" />
          <h1 className="mt-5 text-3xl font-bold">Error 404 : Page Found</h1>
        </div>
      </div>
    </>
  );
}