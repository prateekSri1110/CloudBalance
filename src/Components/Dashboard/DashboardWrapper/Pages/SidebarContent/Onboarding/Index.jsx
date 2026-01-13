import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../../../../Utils/styles";
import api from "../../../../../Utils/axios";
import Breadcrumb from "../../../../../Utils/breadcrumbs";
import { Button } from "../../../../../Utils/TagUtils";
import Table from "../../../../../Utils/Table";
import IAMrole from "./IAMrole";
import CustomerManagedPolicies from "./CustomerManagedPolicies";
import CUReport from "./CUReport";
import { toast } from "react-toastify";

const Onboarding = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountForm, setAccountForm] = useState({ accountId: "", accountName: "", arn: "" })
  const [currentStep, setCurrentStep] = useState(null);
  const role = useSelector(state => state.user.role)

  const startOnboarding = () => {
    setCurrentStep(0);
  };

  const root = () => {
    setCurrentStep(null);
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const steps = [IAMrole, CustomerManagedPolicies, CUReport];
  const StepComponent = steps[currentStep];

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await api.get(`/accounts`)
        setAccounts(res.data)
      } catch (e) {
        console.log(e);
      }
    };
    fetchAccounts()
  }, [])

  const addAccount = async () => {
    console.log(accountForm.arn, accountForm.accountId, accountForm.accountName);
    await api.post('/accounts', {
      arn: accountForm.arn, accountId: accountForm.accountId, accountName: accountForm.accountName
    })
      .catch(() => toast("Account add failed!"))

    toast("Account Added!");
  }

  return <>
    <Breadcrumb />
    {currentStep === null ? (
      <div className="px-5 py-2">
        <h1 className="font-bold text-3xl mb-2">Accounts</h1>
        <div className="p-5 bg-white rounded">
          <div className="flex justify-between mb-5">
            <p>Displaying all connected AWS accounts</p>
            {role === "ADMIN" && (
              <Button
                name={"+ Link Account"}
                textcolor="white"
                bgcolor={colors.bgCol}
                onClick={startOnboarding}
              />
            )}
          </div>
          <Table data={accounts} noFoot />
        </div>
      </div>
    ) : (
      <StepComponent
        root={root}
        formData={accountForm}
        setFormData={setAccountForm}
        onNext={nextStep}
        onBack={prevStep}
        onSubmit={addAccount}
      />
    )}
  </>
}
export default Onboarding;