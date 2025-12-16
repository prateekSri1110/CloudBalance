import CostChart from "./CostChart";

const ChartAndfilters = () => {

    return <>
        <div className="bg-gray-100">
            <div className="charts px-3 py-5">
                <div className="flex justify-between">

                    <div className="">
                        <span>Costs ($)</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <CostChart />
            </div>
            <div className="filters"></div>
        </div>
    </>
}

export default ChartAndfilters;