import { useEffect, useState } from "react";
import { colors, fontColor } from "../../../../../Utils/styles.jsx";
import TuneIcon from '@mui/icons-material/Tune';
import ChartAndfilters from "./chartAndfilter.jsx";
import Breadcrumb from "../../../../../Utils/breadcrumbs.jsx";
import { toast } from "react-toastify";
import api from "../../../../../Utils/axios.jsx";

const CostExplorer = () => {
  const [filterOn, setFilterOn] = useState(false);
  const [data, setData] = useState([])

  const now = new Date()
  const lastSixMonth = new Date(now.getFullYear(), now.getMonth() - 6);
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1);

  const [start, setStart] = useState(`${lastSixMonth.getFullYear()}-${String(lastSixMonth.getMonth() + 1).padStart(2, "0")}`);
  const [end, setEnd] = useState(`${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, "0")}`);

  const types = ["Service", "Instance_Type", "Account_ID", "Usage_Type", "Platform", "Region", "Usage_Type_Group", "Purchase_Option", "API_Operation", "Resource", "Tags", "Charge_Type", "Availability_Zone"];
  const [type, setType] = useState(types[0])
  const visibleTypes = types.slice(0, 5);
  const hiddenTypes = types.slice(5);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (start >= end) {
      toast("end date should be after start date!");
      return;
    }
    const fetchCost = async () => {
      try {
        setLoading(true);
        const res = await api.get("/costexplorer", {
          params: { type, start, end }
        })

        const costData = Array.isArray(res.data) ? res.data : Object.values(res.data);
        setData(costData);
      } catch (err) {
        console.error(err);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchCost();
  }, [type, start, end]);

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
              {type}
            </button>
            <span>|</span>

            <div className="flex gap-2 items-center">
              {/* First 5 */}
              {visibleTypes.map(item => (
                <button
                  key={item}
                  className={`text-xs p-2 bg-white border border-gray-200 font-bold rounded cursor-pointer`}
                  style={{ color: colors.bgCol }}
                  onClick={() => setType(item)}
                >
                  {item}
                </button>
              ))}

              {/* Dropdown*/}
              {hiddenTypes.length > 0 && (
                <select className="text-xs p-2 w-20 font-bold cursor-pointer" style={{ color: colors.bgCol }} defaultValue="" onChange={(e) => setType(e.target.value)}>
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

        {loading && (
          <div className="text-center py-10 font-semibold">
            Loading cost data...
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-10 text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && data.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No data available for selected range
          </div>
        )}

        {!loading && !error && data.length > 0 && (
          <ChartAndfilters
            side={filterOn}
            type={type}
            filter={types}
            start={start}
            end={end}
            setStart={setStart}
            setEnd={setEnd}
            data={data}
          />
        )}
      </div>
    </>
  );
};

export default CostExplorer;
