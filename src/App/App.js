import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { EmployeeRegistration } from "../pages/EmployeeRegistration/EmployeeRegistration";
import { EmployeeTable } from "../pages/EmployeeTable/EmployeeTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { DummyTable } from "../components/DummyTable/DummyTable";

const App = () => {
  const [value, setValue] = useState("");

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
          {/* <Route path="/table" element={<DummyTable props={value} />} /> */}
          <Route path="/table2" element={<EmployeeTable props={value} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
