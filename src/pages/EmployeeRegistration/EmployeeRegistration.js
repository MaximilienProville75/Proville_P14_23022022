import React from "react";
import ReactDatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FiCloudLightning } from "react-icons/fi";
import { PopUp } from "modal-oc-14-mp/dist/components/PopModal.js";

export const EmployeeRegistration = (props) => {
  const [data, setDataArr] = useLocalStorage("data", "");
  //*
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //* Dates
  const [dateBirth, setDateBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  //* Address States
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [usaState, setUSAState] = useState("AL");
  const [zipCode, setZipCode] = useState("");
  //* Department State
  const [department, setDepartment] = useState("Sales");
  //* PopUp
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const transferValue = (event) => {
    event.preventDefault();
    setButtonPopUp(true);

    const val = {
      firstName,
      lastName,
      dateBirth: moment(dateBirth.toUTCString()).format("DD/MM/YYYY"),
      startDate: moment(startDate.toUTCString()).format("DD/MM/YYYY"),
      street,
      city,
      usaState,
      zipCode,
      department,
    };

    setDataArr([...data, val]);
    clearState();
  };

  useEffect(() => {
    props.func(data);
  }, [data, props]);

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setDateBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setUSAState("");
    setZipCode("");
    setDepartment("");
  };

  return (
    <>
      <div className="min-h-screen text-gray-900 flex justify-center bg-purple-300 flex-col py-12 px-4 sm:px-6 lg:px-8">
        <Link
          to="/table"
          className="px-16 py-2 border-purple-400 border-4 text-xl font-bold rounded-2xl text-gray-700 bg-white hover:bg-purple-300/40 mt-5 max-w-xs text-center first-letter:text-purple-400 first-letter:text-2xl ml-auto mr-auto mb-5 shadow-lg shadow-purple-500"
        >
          To the Table
        </Link>

        <form className="border-8  flex flex-col gap-10 rounded-2xl  bg-white shadow  border-b border-purple-400 max-h-auto max-w-xl m-auto p-10 shadow-lg shadow-purple-500">
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col gap-6">
            <div className="flex flex-col ">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                First Name
              </label>
              <input
                type="text"
                className="border-purple-400 border-2"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
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
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                BirthDate
              </label>
              <ReactDatePicker
                selected={dateBirth}
                onChange={(date) => {
                  setDateBirth(date);
                }}
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
                  onChange={(event) => setStreet(event.target.value)}
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
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="first-letter:text-xl first-letter:text-purple-400 text-extrabold">
                  State
                </label>
                <select
                  value={usaState}
                  className="border-purple-400 border-2"
                  onChange={(event) => setUSAState(event.target.value)}
                  defaultValue={"AL"}
                >
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>DC</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
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
                  onChange={(event) => setZipCode(event.target.value)}
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
                onChange={(event) => setDepartment(event.target.value)}
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
          className="px-24 py-2 border-purple-400 border-4 rounded-2xl font-bold text-xl text-gray-700 bg-white hover:bg-purple-300/40 mt-5 mr-auto ml-auto max-w-xs text-center first-letter:text-2xl first-letter:text-purple-400 animate-pulse shadow-lg shadow-purple-500"
        >
          Save
        </button>
        <PopUp
          trigger={buttonPopUp}
          setTrigger={setButtonPopUp}
          // closeIcon={<FiCloudLightning />}
          bgView={true}
          animationOn={true}
          className="fixed top-0 left-0 w-full h-screen flex justify-center items-center "
        >
          <h1 className="font-sans text-2xl font-bold first-letter:text-purple-500 first-letter:text-4xl text-center">
            Employee Created!
          </h1>
        </PopUp>
      </div>
    </>
  );
};
