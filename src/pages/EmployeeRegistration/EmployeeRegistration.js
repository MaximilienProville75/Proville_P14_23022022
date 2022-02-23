import React from "react";
import "./EmployeeRegistration.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

export const EmployeeRegistration = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};
