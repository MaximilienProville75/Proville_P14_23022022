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
  // const [data, setDataArr] = useLocalStorage("data", "");

  const pull_data = (data) => {
    setValue(data);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/registration"
            element={<EmployeeRegistration func={pull_data} />}
          />
          <Route path="/table" element={<EmployeeTable props={value} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
