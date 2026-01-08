import { useState } from "react";
import { colors } from "./styles";
import Copy from '@mui/icons-material/ContentCopy';

const CopyField = ({ field }) => {
    const [hover, setHover] = useState(false);
    const copyToClipboard = (text) => navigator.clipboard.writeText(text)

    return <div className={`px-10 mt-4`}>
        <div className={`border p-2 w-1/4 rounded cursor-pointer transition-colors duration-200`}
            style={{ borderColor: hover ? colors.bgCol : "#e5e7eb" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => copyToClipboard(field)}
        >
            <span className="flex items-center gap-2">
                <button className="p-1 border rounded cursor-pointer" style={{ color: hover ? "white" : colors.bgCol, backgroundColor: hover ? colors.bgCol : "transparent" }}>
                    <Copy fontSize="xs" />
                </button>
                {field}
            </span>
        </div>

        <span className="text-xs" style={{ color: colors.bgCol }} hidden={!hover} >
            Click anywhere in the box to copy the content inside.
        </span>
    </div>
}
export default CopyField;