import Copy from '@mui/icons-material/ContentCopy';
import { colors } from "../../../../../Utils/styles.jsx";
import TunerRole from "../../../../../../assets/tunerRole.png";
import { useState } from "react";
import { Button, Input, LiNum } from "../../../../../Utils/TagUtils.jsx";

const IAMrole = ({ root, formData, setFormData, onNext }) => {
  const policy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`
  const [hover, setHover] = useState(false);
  const role = "CK-Tuner-Role-dev2";
  const copyToClipboard = (text) => navigator.clipboard.writeText(text)

  const disableNext = formData.arn == "" || formData.accountName == "" || formData.accountId == "";

  return (
    <>
      <div className="px-3 py-5">
        <h1 className="font-bold text-3xl mb-2">Create an IAM Role</h1>
        <h2 className="mb-5">Create an IAM Role by fillowing these roles</h2>
        <div className="p-5 bg-white rounded-lg">
          <ul className="p-2">
            <li className="mb-4"><span><LiNum num={1} />Log into AWS account & <span className="text-blue-800 font-bold underline">Create an IAM Role.</span></span></li>
            <li className="mb-4">
              <h2><LiNum num={2} />In the <i>Trusted entity type</i> section, select <b>Custom trust policy.</b>Replace the prefilled policy with the policy provided below -</h2>
              <div className="px-10">
                <div className={`p-2 mt-5 h-70 bg-gray-100 overflow-y-auto border border-gray-300 rounded`}>
                  <div>
                    <button className="" onClick={() => copyToClipboard(policy)}>X</button>
                  </div>
                  <pre className={`text-[${colors.bgCol}] text-xs font-bold`}>
                    {policy}
                  </pre>
                </div>
              </div>
            </li>

            {/* bg-[${colors.bgCol}] */}
            <li className="mb-4"><span><LiNum num={3} />Click on <b>Next</b> to go to the <i>add permissions page.</i> We would not be adding any permissions for now because the permission policy content will be dependent on the AWS Account ID retrieved from the IAM role. Click on <b>Next.</b></span></li>
            <li className="mb-4">
              <h2><LiNum num={4} />In the <i>Role name field,</i> enter the below-mentioned role name, and click on <b>Create Role-</b></h2>
              <div className={`px-10 mt-4`}>
                <div className={`border p-2 w-1/4 rounded cursor-pointer transition-colors duration-200`}
                  style={{ borderColor: hover ? colors.bgCol : "#e5e7eb" }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => copyToClipboard(role)}
                >
                  <span className="flex items-center gap-2">
                    <button className="p-1 border rounded cursor-pointer" style={{ color: hover ? "white" : colors.bgCol, backgroundColor: hover ? colors.bgCol : "transparent" }}>
                      <Copy fontSize="xs" />
                    </button>
                    {role}
                  </span>
                </div>

                <span className="text-xs" style={{ color: colors.bgCol }} hidden={!hover} >
                  Click anywhere in the box to copy the content inside.
                </span>
              </div>
            </li>
            <li className="mb-4"><h2 ><LiNum num={5} />Go to the newly created IAM Role & copy the Role ARN-</h2>
              <div className="flex justify-center mt-5">
                <img src={TunerRole} width={1500} alt="tunerRole" />
              </div>
            </li>
            <li className="mb-4"><h2 ><LiNum num={6} />Paste the copied Role ARN below -</h2>
              <div className="px-10 mt-4 flex justify-between">
                <Input value={formData.arn} onChange={(e) => setFormData(formData => ({ ...formData, arn: e.target.value }))} label="Enter the IAM Role ARN" type="text" placeholder="Enter the IAM Role ARN" />
                <Input value={formData.accountId} onChange={(e) => setFormData(formData => ({ ...formData, accountId: e.target.value }))} label="Enter Account ID" type="number" placeholder="Enter Account ID" />
                <Input value={formData.accountName} onChange={(e) => setFormData(formData => ({ ...formData, accountName: e.target.value }))} label="Enter Account Name" type="text" placeholder="Enter Account Name" />
              </div>
            </li>
          </ul>
        </div>

        {/* buttons */}
        <div className="flex justify-between mt-5 mb-5">
          <Button name={"Cancel"} bordercolor={colors.bgCol} textcolor={colors.bgCol} bgcolor={"white"} onClick={root} />
          <div className="flex gap-2">
            <Button name={"Next - Add Customer Managed Policies"} textcolor={"white"} bgcolor={!disableNext ? colors.bgCol : ""} className={"bg-gray-500"} disabled={disableNext} onClick={onNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IAMrole;
