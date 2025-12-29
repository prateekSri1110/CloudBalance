import { useState } from "react";
import { colors, fontColor } from "../../../../../Utils/styles.jsx";
import TuneIcon from '@mui/icons-material/Tune';
import ChartAndfilters from "./chartAndfilter.jsx";
import Breadcrumb from "../../../../../Utils/breadcrumbs.jsx";

const CostExplorer = () => {
  const [filterOn, setFilterOn] = useState(false);
  const [active, setActive] = useState("Service");

  const types = ["Service", "Instance Type", "Account ID", "Usage Type", "Platform", "Region", "Usage Type Group", "Purchase Option", "API Operation", "Resource", "Tags", "Charge Type", "Availability Zone"];
  const visibleTypes = types.slice(0, 5);
  const hiddenTypes = types.slice(5);


  return (
    <>
      <Breadcrumb />
      <div className="major w-full p-2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Cost Explorer</h1>
            <span className="text-xs" style={{ color: fontColor.span }}>
              How to always be aware of cost changes and history.
            </span>
          </div>

          <div>
            <button className={`border-1 px-3 py-1 text-[${colors.bgCol}] rounded`}>
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
              className={`text-xs bg-[${colors.bgCol}] p-1 text-white border border-gray-200 font-bold rounded`}
            >
              {active}
            </button>
            <span>|</span>

            <div className="flex gap-2 items-center">
              {/* First 5 */}
              {visibleTypes.map(item => (
                <button
                  key={item}
                  className={`text-xs p-2 bg-white border border-gray-200 font-bold rounded cursor-pointer`}
                  style={{ color: colors.bgCol }}
                  onClick={() => setActive(item)}
                >
                  {item}
                </button>
              ))}

              {/* Dropdown*/}
              {hiddenTypes.length > 0 && (
                <select className="text-xs p-2 w-20 font-bold cursor-pointer" style={{ color: colors.bgCol }} defaultValue="" onChange={(e) => setActive(e.target.value)}>
                  <option value="" disabled>
                    More
                  </option>
                  {hiddenTypes.map(item => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              )}
            </div>

          </div>

          {/* chart filter */}
          <div>
            <TuneIcon fontSize="large" color={colors.bgCol} className={`p-[2px] bg-[${colors.bgCol}] text-white cursor-pointer rounded`} onClick={() => setFilterOn(!filterOn)} />
          </div>
        </div>
        <ChartAndfilters side={filterOn} filter={types} />
      </div>
    </>
  );
};

export default CostExplorer;
