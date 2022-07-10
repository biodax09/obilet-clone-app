import React, { useState } from "react";
import dayjs from "dayjs";

import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/lib/date-picker/generatePicker";
import locale from "antd/lib/date-picker/locale/tr_TR";

import { CalendarIcon } from "@/icons";

const AntDatePicker = generatePicker(dayjsGenerateConfig);

const dateFormat = "D MMMM YYYY dddd";

const DatePicker = ({ id, value, label, onChange, placeholder }) => {
  const format = (value) => {
    const date = dayjs(value.toDate()).locale("tr").format(dateFormat);
    return date;
  };

  return (
    <div className="date-container">
      <CalendarIcon className="icon" />
      <label htmlFor={id}>{label}</label>
      <AntDatePicker
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder || dayjs().locale("tr").format(dateFormat)}
        allowClear={false}
        suffixIcon={null}
        format={format}
        showToday={null}
        locale={locale}
        disabledDate={(current) => {
          return current && current < dayjs().subtract(1, "day");
        }}
      />
      <div className="selectday">
        <button onClick={() => onChange?.(dayjs())} className="selectbutton">
          Bugün
        </button>
        <button
          onClick={() => onChange?.(dayjs().add(1, "day"))}
          className="selectbutton"
        >
          Yarın
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
