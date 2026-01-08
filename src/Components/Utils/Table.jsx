import { colors } from "./styles";

const Table = ({ data, noFoot }) => {
    const heads = Object.keys(data?.[0] || []);

    const getSum = (head) => {
        return Math.round(data.reduce((sum, row) => sum + (Number(row[head]) || 0), 0) * 100) / 100;
    }

    return <>
        <div>
            <table className="min-w-full text-sm border border-blue-100 text-left">
                <thead style={{ backgroundColor: colors.main }}>
                    <tr style={{ color: colors.bgCol }}>
                        {heads.map((head, index) => (
                            <th key={index} className="px-4 py-2">{head}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="even:bg-white odd:bg-gray-100">
                            {heads.map((head) => (
                                <td className="px-4 py-2" key={head}>{row[head]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot style={{ backgroundColor: colors.main }} hidden={noFoot}>
                    <tr style={{ color: colors.bgCol }}>
                        <th className="px-4 py-2">Total</th>
                        {heads.slice(1).map((head, index) => (
                            <th key={index} className="px-4 py-2">${getSum(head)}</th>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    </>
}

export default Table;