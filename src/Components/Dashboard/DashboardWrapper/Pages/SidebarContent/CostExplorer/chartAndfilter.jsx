import { NavLink } from "react-router-dom";
import data from "../../../../../Data/CEdata";
import { colors } from "../../../../../Utils/styles";
import Table from "../../../../../Utils/Table";
import CostChart from "./CostChart";
import { FaChartColumn } from "react-icons/fa6";
import { LuChartNetwork } from "react-icons/lu";
import { LuChartColumnStacked } from "react-icons/lu";
import { useState } from "react";

const ChartAndfilters = (value) => {
    const filter = value.filter;
    const side = value.side;
    const [type, setType] = useState("mscolumn2d");

    return <>
        <div className="flex">

            <div className={`bg-gray-100 ${side ? "w-4/5" : "w-full"}`}>
                {/* charts */}
                <div className="charts px-3 py-5">
                    <div className="flex justify-between">
                        <div className="">
                            <span>Costs ($)</span>
                        </div>
                        <div className="flex gap-2 mb-3">
                            <div className="flex gap-2 text-sm items-center">
                                <label>Start :</label>
                                <input type="date" className="p-1 border border-gray-400 rounded bg-white" />
                                <label>End :</label>
                                <input type="date" className="p-1 border border-gray-400 rounded bg-white" />
                                <button type="button" className={`bg-[${colors.bgCol}] p-1 text-white font-bold rounded cursor-pointer`}>Apply</button>
                            </div>

                            <div className="flex items-center">
                                <NavLink onClick={() => setType("mscolumn2d")} className={({ isActive }) => `flex items-center p-2 border border-gray-300 rounded shadow-md hover:bg-white ${isActive ? "bg-[#f1fafe]" : ""}`}>
                                    <FaChartColumn color={colors.bgCol} />
                                </NavLink>

                                <NavLink onClick={() => setType("msline")} className={({ isActive }) => `flex items-center p-2 border border-gray-300 rounded shadow-md hover:bg-white ${isActive ? "bg-[#f1fafe]" : ""}`}>
                                    <LuChartNetwork color={colors.bgCol} />
                                </NavLink>

                                <NavLink onClick={() => setType("marimekko")} className={({ isActive }) => `flex items-center p-2 border border-gray-300 rounded shadow-md hover:bg-white ${isActive ? "bg-[#f1fafe]" : ""}`}>
                                    <LuChartColumnStacked color={colors.bgCol} />
                                </NavLink>
                            </div>
                        </div>

                    </div>
                    <CostChart props={{ data, type }} />
                </div>

                {/* table */}
                <div className="filters">
                    <Table data={data} />
                </div>
            </div>

            {/* side filters */}
            <aside className={`bg-white h-screen transition-all duration-300 ease-in-out ${side ? "w-1/5" : "w-0 overflow-hidden"}`}>
                <div className="shadow-lg">
                    <div className="flex justify-between p-4">
                        <h2 className="font-bold text-xl">Filters</h2>
                        <h2 className={`font-bold text-[${colors.bgCol}]`}>Reset All</h2>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="p-2">
                        <h2 className="font-bold text-md">Showing {filter.length} results</h2>
                        {filter.map((item) => (
                            <div className="p-2" key={item}>
                                <div className="flex gap-2 p-2 text-md">
                                    <input
                                        key={item}
                                        type="checkbox"
                                    />
                                    <span>{item}</span>
                                </div>
                                <hr className="text-gray-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    </>
}

export default ChartAndfilters;