import { useMemo } from "react";
import { colors } from "./styles";

const CeTable = ({ data }) => {
    const months = useMemo(() => {
        if (!data?.length) return [];
        return Object.keys(data[0].monthlyCost);
    }, [data]);

    const getSum = (key) => data.reduce((sum, row) => sum + (Number(row[key]) || 0), 0);
    const format = (val) => typeof val === "number" ? `$ ${val.toLocaleString()}` : val;

    return (

        <div className="overflow-x-auto">
            <table className="w-full text-sm border border-blue-100 text-left">

                <thead style={{ backgroundColor: colors.main }}>
                    <tr style={{ color: colors.bgCol }} >
                        <th className="px-4 py-2 uppercase">{data[0].groupType}</th>
                        {months.map(month => (
                            <th className="px-4 py-2 uppercase" key={month}>{month}</th>
                        ))}
                        <th className="px-4 py-2 uppercase">Total</th>
                    </tr>
                </thead>


                <tbody>
                    {data.map(row => (
                        <tr key={row.groupName} className="even:bg-white odd:bg-gray-100">
                            <td className="px-4 py-2">{row.groupName}</td>

                            {months.map(month => (
                                <td className="px-4 py-2" key={month}>
                                    {row.monthlyCost[month] ?? 0}
                                </td>
                            ))}

                            <td className="px-4 py-2">{row.total}</td>
                        </tr>
                    ))}
                </tbody>

                <tfoot style={{ backgroundColor: colors.main }}>
                    <tr style={{ color: colors.bgCol }}>
                        <th className="px-4 py-2">Total</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
export default CeTable;