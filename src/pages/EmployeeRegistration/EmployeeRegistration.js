import React from "react";
import "./EmployeeRegistration.css";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import format from "date-fns/esm/fp/formatDuration";
import { PopUp } from "../../components/PopUp/PopUp";
import "react-datepicker/dist/react-datepicker.css";

export const EmployeeRegistration = (props) => {
  const [data, setDataArr] = useLocalStorage("data", "");
  //*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //* Dates [.toDateString()]
  const [dateBirth, setDateBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  //* Address States
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  //* Department State
  const [department, setDepartment] = useState("");

  const [buttonPopUp, setButtonPopUp] = useState(false);

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
    setButtonPopUp(true);

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
  // const updatedStringDate = dateBirth.toISOString().substring(0, 10);

  props.func(data);

  return (
    <>
      <div className="min-h-screen text-gray-900 flex justify-center bg-purple-300 flex-col py-12 px-4 sm:px-6 lg:px-8">
        <Link
          to="/table"
          className="px-16 py-2 border-purple-400 border-4 text-xl font-bold rounded-2xl text-gray-700 bg-white hover:bg-purple-300/40 mt-5 max-w-xs text-center first-letter:text-purple-400 first-letter:text-2xl ml-auto mr-auto mb-5"
        >
          To the Table
        </Link>

        <form className="border-8  flex flex-col gap-10 rounded-2xl  bg-white shadow  border-b border-purple-400 max-h-auto max-w-xl m-auto p-10">
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col gap-6">
            <div className="flex flex-col ">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                First Name
              </label>
              <input
                type="text"
                className="border-purple-400 border-2"
                value={firstName}
                onChange={changeFirstName}
              />
            </div>
            <div className="flex flex-col">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                Last Name
              </label>
              <input
                type="text"
                className="border-purple-400 border-2"
                value={lastName}
                onChange={changeLastName}
              />
            </div>
            <div className="flex flex-col">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                BirthDate
              </label>
              <ReactDatePicker
                selected={dateBirth}
                onChange={(date) => setDateBirth(date)}
                type="date"
                className="border-purple-400 border-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                Date of Start
              </label>
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                type="date"
                className="border-purple-400 border-2"
              />
            </div>
            <div className="addressInfos">
              <div className="flex flex-col">
                <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                  Street
                </label>
                <input
                  type="text"
                  className="border-purple-400 border-2"
                  value={street}
                  onChange={changeStreet}
                />
              </div>
              <div className="flex flex-col ">
                <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold ">
                  City
                </label>
                <input
                  type="text"
                  className="border-purple-400 border-2"
                  value={city}
                  onChange={changeCity}
                />
              </div>
              <div className="flex flex-col">
                <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                  State
                </label>
                <select
                  value={state}
                  className="border-purple-400 border-2"
                  onChange={changeState}
                >
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AZ">AZ</option>
                  <option value="AR">AR</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DE">DE</option>
                  <option value="DC">DC</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="IA">IA</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="ME">ME</option>
                  <option value="MD">MD</option>
                  <option value="MA">MA</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MS">MS</option>
                  <option value="MO">MO</option>
                  <option value="MT">MT</option>
                  <option value="NE">NE</option>
                  <option value="NV">NV</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NY">NY</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WV">WV</option>
                  <option value="WI">WI</option>
                  <option value="WY">WY</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="border-purple-400 border-2"
                  value={zipCode}
                  onChange={changeZipCode}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                Department
              </label>
              <select
                value={department}
                className="border-purple-400 border-2"
                onChange={changeDepartment}
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </div>
          </main>
        </form>
        <button
          onClick={transferValue}
          className="px-24 py-2 border-purple-400 border-4 rounded-2xl font-bold text-xl text-gray-700 bg-white hover:bg-purple-300/40 mt-5 mr-auto ml-auto max-w-xs text-center first-letter:text-2xl first-letter:text-purple-400 animate-pulse"
        >
          Save
        </button>
        <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h1 className="font-sans text-2xl font-bold first-letter:text-purple-500 first-letter:text-4xl text-center">
            Employee Created!
          </h1>
        </PopUp>
      </div>
    </>
  );
};
