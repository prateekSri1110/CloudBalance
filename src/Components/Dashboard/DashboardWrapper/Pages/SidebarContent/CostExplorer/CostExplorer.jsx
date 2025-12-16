import { useState } from "react";
import { colors, fontColor } from "../../../../../Utils/styles.jsx";
import TuneIcon from '@mui/icons-material/Tune';
import CostChart from "./CostChart.jsx";
import ChartAndfilters from "./chartAndfilter.jsx";

const CostExplorer = () => {

  const types = ["Service", "Instance Type", "Account ID", "Usage Type", "Platform", "Region", "Usage Type Group", "Purchase Option", "API Operation", "Resource", "Tags", "Charge Type", "Availabilityzone"];


  const [active, setActive] = useState("Service");

  return (
    <>
      <div className="major w-full p-2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Cost Explorer</h1>
            <span className="text-xs" style={{ color: fontColor.span }}>
              How to always be aware of cost changes and history.
            </span>
          </div>

          <div>
            <button
              className={`border-1 px-3 py-1 text-[${colors.bgCol}] rounded`}
            >
              Recent Reports
            </button>
          </div>
        </div>

        <hr className="mb-4 text-gray-300" />

        <div className="px-3 py-4 bg-gray-100 flex justify-between border border-gray-300">
          {/* grouping switches */}
          <div className="container flex gap-2">
            <span className="label font-bold text-sm mt-2">Group By :</span>
            <button
              className={`text-xs bg-[${colors.bgCol}] p-[3px] text-white border border-gray-200 font-bold rounded`}
            >
              {active}
            </button>
            <span>|</span>
            {types.map((item) => (
              <button
                key={item}
                className={`text-xs text-[${colors.bgCol}] px-[6px] bg-white border border-gray-200 font-bold rounded cursor-pointer`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* chart filter */}
          <div>
            <TuneIcon fontSize="large" color={colors.bgCol} className={`p-[2px] bg-[${colors.bgCol}] text-white cursor-pointer rounded`} />
          </div>
        </div>
        <ChartAndfilters />
      </div>
    </>
  );
};

export default CostExplorer;
