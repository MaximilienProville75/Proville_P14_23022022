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
  const emptyArr = [
    {
      firstName: "",
      lastName: "",
      department: "",
      dateBirth: "",
      startDate: "",
      street: "",
      city: "",
      state2: "",
      zipCode: "",
    },
  ];

  const pull_data = (data) => {
    setValue(data);
  };

  const generateEmptTable = (value) => {
    if (value === null || value === undefined || value === "") {
      return emptyArr;
    } else {
      return value;
    }
  };

  generateEmptTable(value);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/registration"
            element={<EmployeeRegistration func={pull_data} />}
          />
          <Route
            path="/table"
            element={
              <EmployeeTable
                props={generateEmptTable(value)}
                func={pull_data}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
