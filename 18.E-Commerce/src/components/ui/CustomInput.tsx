import React from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  value,
  placeholder = "",
  onChange,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default CustomInput;
