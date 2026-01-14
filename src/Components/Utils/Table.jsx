import { colors } from "./styles";

const Table = ({ data = [] }) => {
    if (!data.length) return <h1>Loading...</h1>;
    const heads = Object.keys(data[0])

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm border border-blue-100 text-left">

                <thead style={{ backgroundColor: colors.main }}>
                    <tr style={{ color: colors.bgCol }} >
                        {heads.map(head => (
                            <th key={head} className="px-4 py-2 uppercase">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map(row => (
                        <tr key={row.accountId} className="even:bg-white odd:bg-gray-100">
                            {Object.values(row).map((data, idx) => (
                                <td key={idx} className="px-4 py-2">{data}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
