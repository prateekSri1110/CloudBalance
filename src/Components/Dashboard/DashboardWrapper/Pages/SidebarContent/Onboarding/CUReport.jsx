import Breadcrumbs from "../../../../../Utils/breadcrumbs.jsx";
import { colors } from "../../../../../Utils/styles.jsx";
import { Button, Input, LiNum } from "../../../../../Utils/TagUtils.jsx";
import CopyField from "../../../../../Utils/CopyField.jsx";
import E2 from "../../../../../../assets/E2.png";
import E3 from "../../../../../../assets/E3.png";
import E4 from "../../../../../../assets/E4.png";
import { useNavigate } from "react-router-dom";

const CUReport = () => {
    const navigate = useNavigate();
    const field = ["ck-tuner-275595855473-hourly-cur", 275595855473]

    return (
        <>
            <Breadcrumbs />
            <div className="px-8 py-5">
                <h1 className="font-bold text-3xl mb-2">Create Cost & Usage Report</h1>
                <h2 className="mb-5">Create a Cost & Usage Report by following these steps</h2>
                <div className="p-5 bg-white rounded-lg">

                    <ul className="p-2">
                        <li className="mb-8"><span><LiNum num={1} />Go to <span className="text-blue-800 font-bold underline">Cost and Usage Reports </span>in the Billing Dashboard and click on <b>Create report.</b></span></li>

                        <li className="mb-8">
                            <h2><LiNum num={2} />Name the report as shown below and select the <b> Include resource IDs</b> checkbox -</h2>
                            <div className={`px-10 mt-4`}>
                                <CopyField field={field[0]} />
                                <span className="text-xs py-5">Ensure that the following configuration is checked</span><br />
                                <div className="px-7 py-2">
                                    <input type="checkbox" checked disabled />
                                    <span className="px-2 text-sm font-bold">Include Resource IDs</span>
                                </div>
                                <span className="text-sm">Click on <b>Next</b></span>
                                <img className="py-5" src={E2} width={1500} alt="tunerRole" />
                            </div>
                        </li>

                        <li className="mb-8">
                            <h2><LiNum num={3} />In Configure S3 Bucket, provide the name of the S3 bucket that was created -</h2>
                            <div className={`px-10 mt-4`}>
                                <span className="text-xs py-5">Ensure that the following configuration is checked</span><br />
                                <div className="px-7 py-2">
                                    <input type="checkbox" checked disabled />
                                    <span className="px-2 text-sm font-bold">The following default policy will be applied to your bucket</span>
                                </div>
                                <span className="text-sm">Click on <b>Save</b></span>
                                <img className="py-5" src={E3} width={1500} alt="tunerRole" />
                            </div>
                        </li>

                        <li className="mb-8">
                            <h2><LiNum num={4} />In Configure S3 Bucket, provide the name of the S3 bucket that was created -</h2>
                            <div className={`px-10 mt-4`}>
                                <span className="text-xs px-10">Report path prefix:</span><br />
                                <CopyField field={field[1]} />
                                <span className="text-xs py-5">Additionally, ensure that the following checks are in place</span><br />
                                <span className="text-xs py-5">Time granularity:</span><br />
                                <input type="radio" checked disabled /><span className="px-2 text-sm font-bold">Hourly</span>
                                <br />
                                <span className="text-xs py-5">Please make sure these checks are Enabled in Enable report data integration for:</span>
                                <div className="px-7 py-2">
                                    <input type="checkbox" checked disabled />
                                    <span className="px-2 text-sm font-bold">Amazon Athena</span>
                                </div>
                                <img className="py-5" src={E4} width={1500} alt="tunerRole" />
                            </div>
                        </li>

                        <li className="mb-8"><span><LiNum num={5} /> Click on <b> Next.</b> Now, review the configuration of the Cost and Usage Report. Once satisfied, click on <b> Create Report.</b></span></li>
                    </ul>
                </div >

                {/* buttons */}
                < div className="flex justify-between mt-5 mb-5" >
                    <Button name={"Cancel"} bordercolor={colors.bgCol} textcolor={colors.bgCol} bgcolor={"white"} onClick={() => navigate("/dashboard/onboarding")} />
                    <div className="flex gap-2">
                        <Button name={"Back - Setup CMP Replication"} bordercolor={colors.bgCol} textcolor={colors.bgCol} className={"bg-white"} onClick={() => navigate(-1)} />
                        <Button name={"Submit"} bgcolor={colors.bgCol} textcolor={"white"} />
                    </div>
                </div >
            </div >
        </>
    );
};

export default CUReport;
