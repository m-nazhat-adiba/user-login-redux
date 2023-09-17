import React, { useState, useEffect } from "react";
import clsx from "clsx";

const InputField = ({ id, placeholder, onChange, data }) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (data != 0) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }, [data]);
  // console.log(isFocused);

  return (
    <div>
      <label className="flex flex-col relative">
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => (data ? null : setIsFocused(false))}
          onChange={onChange}
          type={id}
          name={id}
          required
          className="border-2 border-gray-300 px-4 py-2 text-xs rounded-lg"
        />
        <span
          className={clsx(
            "absolute text-xs transform translate-y-3 leading-3 left-2 transition ",
            isFocused ? "-translate-y-5" : null
          )}
        >
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default InputField;
