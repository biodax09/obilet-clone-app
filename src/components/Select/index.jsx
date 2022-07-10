import React from "react";
import { Select as AntSelect } from "antd";
import { MapIcon } from "../../icons";

const { Option } = AntSelect;

const Select = ({
  id,
  label,
  placeholder,
  value,
  options,
  loading,
  onChange,
  ...rest
}) => {
  return (
    <div className="input-container">
      <MapIcon className="icon" />
      <label htmlFor={id}>{label}</label>
      <AntSelect
        id={id}
        showSearch
        loading={loading}
        value={value}
        placeholder={placeholder}
        options={options}
        filterOption={(input, option) =>
          option.label
            .toLocaleLowerCase("tr")
            .includes(input.toLocaleLowerCase("tr"))
        }
        showArrow={true}
        suffixIcon={null}
        onChange={onChange}
      />
    </div>
  );
};

export default Select;
