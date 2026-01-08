import { colors } from "./styles"

export const BoxCode = ({ policy }) => {
    const copyToClipboard = (text) => navigator.clipboard.writeText(text)

    return <div className="px-10">
        <div className={`p-2 mt-5 h-70 bg-gray-100 overflow-y-auto border border-gray-300 rounded`}>
            <div>
                <button className="" onClick={() => copyToClipboard(policy)}>X</button>
            </div>
            <pre className={`text-[${colors.bgCol}] text-xs font-bold`}>
                {policy}
            </pre>
        </div>
    </div>
}