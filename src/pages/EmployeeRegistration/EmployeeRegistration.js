import React from "react";
import "./EmployeeRegistration.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

export const EmployeeRegistration = () => {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  //* Address States
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  //* Department State
  const [department, setDepartment] = useState("");

  console.log(startDate);

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};
