import React from "react";
import "./EmployeeRegistration.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import format from "date-fns/esm/fp/formatDuration";
import { PopUp } from "../../components/PopUp/PopUp";

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
      <div class="min-h-screen text-gray-900 flex justify-center bg-gray-100 flex-col py-12 px-4 sm:px-6 lg:px-8">
        <form class="border-8  flex flex-col gap-10 rounded-2xl  bg-purple-300/40 shadow overflow-hidden border-b border-purple-200 min-h-auto max-w-xl m-auto">
          <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <label>First Name</label>
              <input type="text" value={firstName} onChange={changeFirstName} />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input type="text" value={lastName} onChange={changeLastName} />
            </div>
            <div className="flex flex-col">
              <label>BirthDate</label>
              <ReactDatePicker
                selected={dateBirth}
                onChange={(date) => setDateBirth(date)}
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label>Date of Start</label>
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="addressInfos">
              <div className="flex flex-col">
                <label>Street</label>
                <input type="text" value={street} onChange={changeStreet} />
              </div>
              <div className="flex flex-col">
                <label>City</label>
                <input type="text" value={city} onChange={changeCity} />
              </div>
              <div className="flex flex-col">
                <label>State</label>
                <input type="text" value={state} onChange={changeState} />
              </div>
              <div className="flex flex-col">
                <label>Zip Code</label>
                <input type="text" value={zipCode} onChange={changeZipCode} />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Department</label>
              <input
                type="text"
                value={department}
                onChange={changeDepartment}
              />
            </div>
          </main>
        </form>
        <button
          onClick={transferValue}
          class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 bg-purple-100 hover:bg-purple-300/40 mt-10"
        >
          Save
        </button>
        <Link to="/table">To the Table</Link>
        <PopUp props={data} />
      </div>
    </>
  );
};
