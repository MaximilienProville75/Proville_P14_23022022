import "./App.css";

import { EmployeeRegistration } from "../pages/EmployeeRegistration/EmployeeRegistration";
import { EmployeeTable } from "../pages/EmployeeTable/EmployeeTable";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<EmployeeRegistration />} />
          <Route path="/table" element={<EmployeeTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
