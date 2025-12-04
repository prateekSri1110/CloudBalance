import { memo } from "react";

export const Input = memo(
  ({ type, input, value, onChange, disabled, name }) => {
    return (
      <>
        <div className="mb-5">
          <label className="mb-5">{input}</label>
          <input
            type={type}
            placeholder={`Enter your ${input}`}
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={name}
          />
        </div>
      </>
    );
  }
);
