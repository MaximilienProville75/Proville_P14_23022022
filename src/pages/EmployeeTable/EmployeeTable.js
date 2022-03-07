import React from "react";
import "./EmployeeTable.css";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import { useState } from "react";

export const EmployeeTable = (props) => {
  let data = props.props;

  const columns = React.useMemo(
    () => [
      {
        Header: "Current Employees",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Department",
            accessor: "department",
          },

          {
            Header: "Date of Birth",
            accessor: "dateBirth",
          },
          // {
          //   Header: "Start Date",
          //   accessor: "startDate",
          // },
          {
            Header: "Street",
            accessor: "street",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "State",
            accessor: "state2",
          },
          {
            Header: "Zip Code",
            accessor: "zipCode",
          },
        ],
      },
    ],
    []
  );

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

  const clearState = () => {
    setState({ ...initialState });
  };

  // Ajouter Clear le state
  const clearData = (event) => {
    event.preventDefault();
    localStorage.clear();
    data.splice(0, data.length);
    data = initialState;
    props.func(data);
  };

  return (
    <>
      <div class="min-h-screen bg-gray-100 text-gray-900">
        <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div class="mt-4">
            <Table columns={columns} data={data} />
          </div>
          <div className="textLnk">
            <Link to="/registration">Home</Link>
            <button onClick={clearData}>Clear Table</button>
          </div>
        </main>
      </div>
    </>
  );
};
