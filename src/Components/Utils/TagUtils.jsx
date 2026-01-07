export const Button = ({
    textcolor, bordercolor, className, name
}) => {
    return <>
        <button className={`px-5 py-2  text-sm text-[${textcolor}] border border-[${bordercolor}] rounded ${className} cursor-pointer`}>{name}</button>
    </>
}

export const Input = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    name,
    error,
    disabled = false,
    className = "",
    readOnly
}) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-xs">
                    {label}
                    <span className="text-red-600"> *</span>
                </label>
            )}

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`
          border border-gray-300 p-3 w-100 rounded
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
                readOnly={readOnly}
            />

            {error && (
                <span className="text-xs text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
};

export const LiNum = ({num}) => {
    return <span className="rounded-full bg-gray-400 px-2 py-1 text-white mr-3">{num}</span>
}