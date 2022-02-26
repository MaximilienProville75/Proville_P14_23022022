import React from "react";
import "./EmployeeRegistration.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import format from "date-fns/esm/fp/formatDuration";

export const EmployeeRegistration = (props) => {
  const [data, setDataArr] = useLocalStorage("data", "");
  const [firstName, setFirstName] = useState("firstName", "");
  const [lastName, setLastName] = useState("lastName", "");
  const [dateBirth, setDateBirth] = useState(format(new Date(), "yyyy/mm/dd"));

  const [startDate, setStartDate] = useState(new Date());
  //* Address States
  const [street, setStreet] = useState("street", "");
  const [city, setCity] = useState("city", "");
  const [state, setState] = useState("state", "");
  const [zipCode, setZipCode] = useState("zipCode", "");
  //* Department State
  const [department, setDepartment] = useState("department", "");

  //? States Values
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  //? Address State
  const changeStreet = (event) => {
    setStreet(event.target.value);
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const changeState = (event) => {
    setState(event.target.value);
  };
  const changeZipCode = (event) => {
    setZipCode(event.target.value);
  };
  //? Department State
  const changeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();

    const val = {
      firstName,
      lastName,
      dateBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };
    setDataArr([...data, val]);
    clearState();
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setDateBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
    setDepartment("");
  };

  console.log(dateBirth);
  props.func(data);

  return (
    <>
      <form>
        <div className="inputWrapper">
          <label>First Name</label>
          <input type="text" value={firstName} onChange={changeFirstName} />
        </div>
        <div className="inputWrapper">
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={changeLastName} />
        </div>
        <ReactDatePicker
          selected={dateBirth}
          onChange={(date) => setDateBirth(date)}
        />
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <div className="addressInfos">
          <div className="inputWrapper">
            <label>Street</label>
            <input type="text" value={street} onChange={changeStreet} />
          </div>
          <div className="inputWrapper">
            <label>City</label>
            <input type="text" value={city} onChange={changeCity} />
          </div>
          <div>
            <label>State</label>
            <input type="text" value={state} onChange={changeState} />
          </div>
          <div>
            <label>Zip Code</label>
            <input type="text" value={zipCode} onChange={changeZipCode} />
          </div>
        </div>
        <div>
          <label>Department</label>
          <input type="text" value={department} onChange={changeDepartment} />
        </div>
        <button onClick={transferValue}>Save</button>
      </form>
      {/* <Link to="/table">Table Bla</Link> */}
      <Link to="/table2">Blabla 2</Link>
      {/* <DummyTable props={data} /> */}
    </>
  );
};
