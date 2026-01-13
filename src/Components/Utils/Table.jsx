import { colors } from "./styles";

const MONTHS = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec"
];

const Table = ({ data = [], noFoot }) => {
    if (!data.length) return <h1>Loading...</h1>;


    console.log(data);

    const type = data?.[0]?.type;

    const heads = [type, ...MONTHS, "total"];

    const getSum = (key) =>
        data.reduce((sum, row) => sum + (Number(row[key]) || 0), 0);

    const format = (val) =>
        typeof val === "number" ? `$ ${val.toLocaleString()}` : val;

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm border border-blue-100 text-left">

                <thead style={{ backgroundColor: colors.main }}>
                    <tr style={{ color: colors.bgCol }}>
                        {heads.map(head => (
                            <th key={head} className="px-4 py-2 uppercase">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="even:bg-white odd:bg-gray-100">

                            <td className="px-4 py-2">
                                {row.subtype}
                            </td>

                            {MONTHS.map(month => (
                                <td key={month} className="px-4 py-2">
                                    {format(row.monthCost?.[month] ?? 0)}
                                </td>
                            ))}

                            <td className="px-4 py-2">
                                {format(row.totalCost)}
                            </td>
                        </tr>
                    ))}
                </tbody>


                {!noFoot && (
                    <tfoot style={{ backgroundColor: colors.main }}>
                        <tr style={{ color: colors.bgCol }}>
                            <th className="px-4 py-2">Total</th>
                            {heads.slice(1).map(head => (
                                <th key={head} className="px-4 py-2">
                                    $ {getSum(head).toLocaleString()}
                                </th>
                            ))}
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    );
};

export default Table;
