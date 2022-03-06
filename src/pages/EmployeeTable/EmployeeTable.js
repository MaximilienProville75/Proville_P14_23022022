import React from "react";
import "./EmployeeTable.css";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import { useState } from "react";

export const EmployeeTable = (props) => {
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
            accessor: "state",
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
      state,
      zipCode,
    },
    setState,
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const clearData = (event) => {
    event.preventDefault();
    // localStorage.clear();
    clearState();
    console.log(initialState);
    console.log(data);
  };

  const data = props.props;

  return (
    <>
      <Table columns={columns} data={data} />
      <div className="textLnk">
        <Link to="/registration">Home</Link>
      </div>
      <div className="clearData">
        <button onClick={clearData}>Clear Table</button>
      </div>
    </>
  );
};
