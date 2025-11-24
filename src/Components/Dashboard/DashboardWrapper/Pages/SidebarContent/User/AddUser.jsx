import AddIcon from "@mui/icons-material/Add";

const AddUser = () => {
  return (
    <div className="p-5 border bg-white-400">
      <h1 className="text-3xl font-bold">Add New User</h1>
      <div className="p-5">
        <form className="lg:w-150">
          <div className="flex">
            <div className="mb-5">
              <label className="mb-4">First Name</label>
              <input
                type="email"
                className="block border text-lg  px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter First Name"
              />
            </div>
            <div className="mb-5 ml-5">
              <label className="mb-4">Last Name</label>
              <input
                type="password"
                className="block border text-lg px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-5">
              <label className="mb-5">Email</label>
              <input
                type="email"
                className="block border text-lg  px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-5 ml-5">
              <label className="mb-4">Select Data</label>
              <input
                type="password"
                className="block border text-lg px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Select Date"
              />
            </div>
          </div>
          <button className="p-3 bg-teal-800 text-white font-bold mb-4 cursor-pointer">
            <AddIcon className="mb-1" /> Add New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
