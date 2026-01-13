// import { useEffect, useState } from "react";
// import Table from "../../../../../Utils/Table";
// import api from "../../../../../Utils/axios";
// import Breadcrumb from "../../../../../Utils/breadcrumbs";
// import { Button } from "../../../../../Utils/TagUtils";
// import { colors } from "../../../../../Utils/styles";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const AccountTable = () => {
//     const [accounts, setAccounts] = useState([]);
//     const navigate = useNavigate();
//     const role = useSelector(state => state.user.role)

//     useEffect(() => {
//         const fetchAccounts = async () => {
//             try {
//                 const res = await api(`/accounts`)
//                 setAccounts(res.data)
//             } catch (e) {
//                 console.log(e);
//             }
//         };
//         fetchAccounts()
//     }, [])

//     return <>
//         <Breadcrumb />
//         <div className="px-5 py-2">
//             <h1 className="font-bold text-3xl mb-2">Accounts</h1>
//             <div className="p-5 bg-white rounded">
//                 <div className="flex justify-between mb-5">
//                     <p>Displaying all connected AWS accounts</p>
//                     {role === "ADMIN" ?
//                         <Button name={"+ Link Account"} textcolor={"white"} bgcolor={colors.bgCol} onClick={() => navigate("/dashboard/onboarding/IAMRole")} />
//                         : null}
//                 </div>
//                 <Table data={accounts} noFoot={true} />
//             </div>
//         </div>
//     </>
// }
// export default AccountTable;