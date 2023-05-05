import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, changeStatus, ...inputProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  console.log(inputProps);
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {/* <i onClick={changeStatus}>{inputProps?.icon}</i> */}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
