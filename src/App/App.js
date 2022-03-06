import "./App.css";
import React from "react";
import { useState } from "react";
import { EmployeeRegistration } from "../pages/EmployeeRegistration/EmployeeRegistration";
import { EmployeeTable } from "../pages/EmployeeTable/EmployeeTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

// ajouter UI modal ou un petit styling

const App = () => {
  const [value, setValue] = useLocalStorage("value", "");
  // const [value2, setValue2] = useState("");

  const initialState = {
    firstName: "",
    lastName: "",
    dateBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const [
    {
      firstName,
      lastName,
      department,
      dateBirth,
      street,
      city,
      state2,
      zipCode,
    },
    setState,
  ] = useState(initialState);

  const pull_data = (data) => {
    setValue(data);
    console.log(data);
  };

  const provideData = () => {
    if (value === null) {
      value = initialState;
      return <EmployeeTable props={value} func={pull_data} />;
    } else {
      return <EmployeeTable props={value} func={pull_data} />;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/registration"
            element={<EmployeeRegistration func={pull_data} />}
          />
          <Route path="/table" element={provideData()} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
