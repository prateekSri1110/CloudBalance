import { colors } from "../../../../../Utils/styles";
import Reset from '@mui/icons-material/RotateLeft'
import Search from '@mui/icons-material/Search';;
import Right from '@mui/icons-material/ArrowCircleRight';
import Left from '@mui/icons-material/ArrowCircleLeft';
import Folder from '@mui/icons-material/FolderOpen';

const AccountOnboard = () => {
    const accountId = [
        { name: "Roni Thomas", id: "989033863264" },
        { name: "Aircel Money", id: "767369465358" },
        { name: "Doodhwala", id: "237795921511" },
        { name: "AI Gym", id: "315756860246" },
        { name: "Tejprakash Sharma", id: "861931862932" },
        { name: "Apoyo", id: "429796869693" },
        { name: "IDFC", id: "003429390769" },
        { name: "AI Gym", id: "315756860246" },
        { name: "Tejprakash Sharma", id: "861931862932" },
        { name: "Apoyo", id: "429796869693" },
        { name: "IDFC", id: "003429390769" },
        { name: "Galadari", id: "112512014927" },
    ];

    return <div className="w-full">
        <div className="flex gap-2 bg-white text-xl font-bold">
            <h1>Manage Account Id(s)</h1>
            <span>|</span>
            <h1 className="text-gray-500"><Reset />Reset</h1>
        </div>

        <div className="flex p-2 w-full bg-white border border-gray-300">
            {/* left */}
            <div className="w-1/2 border border-gray-400">
                <div className="flex justify-between bg-blue-100 p-2">
                    <h1 className="font-bold text-md">Choose Account IDs to Associate</h1>
                    <h1 className={`text-[${colors.bgCol}]`}>999 Available</h1>
                </div>
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        name="searchAccount"
                        placeholder="Search"
                        className="border border-gray-300 p-2 pl-10 w-full rounded"
                    />
                </div>

                <div className="flex gap-2 p-2">
                    <input type="checkbox" name="selectAll" className="" />
                    <label>Select All</label>
                </div>
                <div className="h-80 overflow-y-auto">
                    {accountId.map((id, index) => (
                        <div className="flex gap-2 even:bg-white odd:bg-gray-100 border border-gray-200 p-2" key={index}>
                            <input type="checkbox" name="selectAll" className="" />
                            <label>{id.name} ({id.id})</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* switch */}
            <div className="flex items-center m-5">
                <div className="">
                    <Right fontSize="large" style={{ color: colors.bgCol, marginBottom: "20px" }} />
                    <Left fontSize="large" style={{ color: colors.bgCol }} />
                </div>
            </div>


            {/* right */}
            <div className="w-1/2 border border-gray-400">
                <div className="flex justify-center items-center h-full w-full">
                    <div className="flex flex-col items-center text-center gap-2">
                        <Folder style={{ fontSize: "10rem" }} />
                        <h1 className="text-lg font-semibold">No Account IDs</h1>
                        <span className="text-gray-600">Selected Account IDs will be shown here.</span>
                    </div>
                </div>


                {/* <div className="flex justify-between bg-blue-100 p-2">
                    <h1 className="font-bold text-lg">Associated Account IDs</h1>
                    <h1 className={`text-[${colors.bgCol}]`}>0 Added</h1>
                </div>
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        name="searchAccount"
                        placeholder="Search"
                        className="border border-gray-300 p-2 pl-10 w-full rounded"
                    />
                </div>

                <div className="flex gap-2 p-2">
                    <input type="checkbox" name="selectAll" className="" />
                    <label>Select All</label>
                </div>
                <div className="h-80 overflow-y-auto">
                    {accountId.map((id, index) => (
                        <div className="flex gap-2 even:bg-white odd:bg-gray-100 border border-gray-200 p-2" key={index}>
                            <input type="checkbox" name="selectAll" className="" />
                            <label>{id.name} ({id.id})</label>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    </div>
}
export default AccountOnboard;